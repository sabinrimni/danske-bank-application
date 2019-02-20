import { Router, Request, Response, NextFunction } from 'express';
import StorageManager from "../Storage/StorageManager";

class ExposureRouter {
    public router: Router;

    /**
     * Initialize the ExposureRouter
     */
    constructor() {
        this.router = Router();
        this.init();
    }
    private getExposure = async (req: Request, res: Response, next: NextFunction) => {
        const val2 = req.params.val2;
        if(val2)
          res.send(StorageManager.getExposure(val2));
        else 
          res.sendStatus(400);
    }
    init() {
        this.router.get('/:val2', this.getExposure);
    }

}
// Create the ExposureRouter, and export its configured Express.Router
export default new ExposureRouter().router;
