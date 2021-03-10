import express from 'express';
import './database';
import { router } from './router/router';

const app = express();

app.use(express.json());
app.use(router);

const PORT = '3333';

app.listen(3333, () => console.log(`servidor rodando na porta ${PORT} 🚀️`));
