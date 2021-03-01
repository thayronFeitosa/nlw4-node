import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {
  async create (request: Request, response: Response) {
    try {
      const { name, email } = request.body;
      const usersRepository = getRepository(User);

      const userAlreadyExists = await usersRepository.findOne({
        email: email
      });

      if(!email || !name) {
        return response.status(400).json({ error: 'no body informed' });
      };

      if(userAlreadyExists) {
        return response.status(400).json({ error: 'user already exists!' });
      };

      const user =usersRepository.create({
        name,
        email
      });

      await usersRepository.save(user);
      return response.send(user);
    } catch (err) {
      return response.json(500).json('err');

    }
  }
}

export { UserController };