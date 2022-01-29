import express from 'express';
import path from "path";
import { middlewaresConfig } from './config/middlewares';
import { constants } from './config/constants';
import { connectDB } from './config/database';
import { initializeRoutes } from './modules';


const app = express();

middlewaresConfig(app);
connectDB();
initializeRoutes(app);

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// define a route handler for the default home page
/* app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
} ); */

app.listen(constants.PORT, () => {
    console.log(`Application is running on port ${constants.PORT}`)
});

export default app