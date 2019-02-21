import { Router, Request, Response, NextFunction } from 'express';
import StorageManager from "../Storage/StorageManager";

class PersonRouter {
  public router: Router;

  /**
   * Initialize the PersonRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }
  private getPerson = async (req: Request, res: Response, next: NextFunction) => {
    const input = req.params.input;
    if (input) {
      const result = StorageManager.getPerson(input);
      if (result)
        res.send(result);
      else
        res.sendStatus(404);
    }
    else
      res.sendStatus(400);
  }
  init() {
    this.router.get('/:input', this.getPerson);
  }

}
// Create the PersonRouter, and export its configured Express.Router
export default new PersonRouter().router;
