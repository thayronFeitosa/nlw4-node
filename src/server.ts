import express, { request, response } from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({message: 'hello word - NLW04'});
});

app.listen(3333, () => console.log('servidor rodando na porta'));
