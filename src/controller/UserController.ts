import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UsersRepository';

class UserController {
  async create(request: Request, response: Response) {
    try {
      const { name, email } = request.body;
      const usersRepository = getCustomRepository(UserRepository)

      const userAlreadyExists = await usersRepository.findOne({
        email: email
      });

      if (!email || !name) {
        return response.status(400).json({ error: 'no body informed' });
      };

      if (userAlreadyExists) {
        return response.status(400).json({ error: 'user already exists!' });
      };

      const user = usersRepository.create({
        name,
        email
      });

      await usersRepository.save(user);
      return response.status(201).json(user);
    } catch (err) {
      return response.json(400).json('err');

    }
  }
}

export { UserController };
