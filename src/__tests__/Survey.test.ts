import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe("surveys", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.query('DELETE FROM surveys');
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = await createConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  it("Shout be able to create a new user", async () => {
    const response = await request(app).post('/surveys').send({
      title: "Title Example",
      description: "Desacription Exemple"
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("Shout be able to get all surveys", async () => {
    await request(app).post('/surveys').send({
      title: "Title Example 2",
      description: "Desacription Exemple2"
    });
    const response = await request(app).get('/surveys');
    expect(response.body.length).toBe(2);

  });
})