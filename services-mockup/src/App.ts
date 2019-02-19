import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import PersonRouter from './Routes/PersonRouter';
import FacilityRouter from './Routes/FacilityRouter';
import ExposureRouter from './Routes/ExposureRouter';
// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
      res.header('Access-Control-Expose-Headers', 'Content-Length, Token');
      res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
      if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
      } else {
        return next();
      }
    });
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json({ limit: '5mb' }));
    this.express.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
  }
  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Server is up!'
      });

    });
    this.express.use('/', router);
    this.express.use("/person", PersonRouter);
    this.express.use("/facility", FacilityRouter);
    this.express.use("/exposure", ExposureRouter);
  }

}
export default new App().express;
