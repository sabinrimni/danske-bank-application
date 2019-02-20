import { Router, Request, Response, NextFunction } from 'express';
import StorageManager from "../Storage/StorageManager";

class FacilityRouter {
    public router: Router;

    /**
     * Initialize the FacilityRouter
     */
    constructor() {
        this.router = Router();
        this.init();
    }
    private getFacility = async (req: Request, res: Response, next: NextFunction) => {
      const val1 = req.params.val1;
      if(val1)
        res.send(StorageManager.getFacility(val1));
      else 
        res.sendStatus(400);
    }
    init() {
        this.router.get('/:val1', this.getFacility);
    }

}
// Create the FacilityRouter, and export its configured Express.Router
export default new FacilityRouter().router;
