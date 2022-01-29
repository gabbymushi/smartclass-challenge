import express from 'express';
import { middlewaresConfig } from './config/middlewares';
import { constants } from './config/constants';
import { connectDB } from './config/database';
import { initializeRoutes } from './modules';


const app = express();

middlewaresConfig(app);
connectDB();
initializeRoutes(app);

app.listen(constants.PORT, () => {
    console.log(`Application is running on port ${constants.PORT}`)
});

export default app