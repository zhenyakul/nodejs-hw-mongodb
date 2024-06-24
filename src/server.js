import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { env } from './utils/env.js';
import contactsRouter from './routes/contacts-routes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundErrorHandler } from './middlewares/notFoundErrorHandler.js';

const port = Number(env('PORT', 3001));

export const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(cors());

  app.use('/api/contacts/', contactsRouter);

  app.use('*', notFoundErrorHandler);
  app.use(errorHandler);

  app.listen(port, () => console.log(`Server is running on ${port} port...`));
};
