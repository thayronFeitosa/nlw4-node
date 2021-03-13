import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveyRepository } from '../repositories/SurveysReposytory';

class SurveysController {

  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const surveysReposytory = getCustomRepository(SurveyRepository);

    const survey = surveysReposytory.create({
      title,
      description
    });
    await surveysReposytory.save(survey);
    response.status(201).json(survey);
  }

  async show(request: Request, response: Response) {
    const surveysReposytory = getCustomRepository(SurveyRepository);
    
    const allSurveys = await surveysReposytory.find(); // muito importante o await para retornar os dados do banco

    return response.status(201).json(allSurveys);

  }
}

export { SurveysController };
