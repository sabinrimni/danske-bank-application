import { Router, Request, Response, NextFunction } from 'express';

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
        const { username } = req.body;
        try {
            if (!username)
                throw new ResponseError(400, `Wrong Format! (${username})`);
            
            const user = await AccountModel.getUserByUsername(username);
            const newPassword = this.generateTempPassword();
            user.pVersion++;
            user.password = bcrypt.hashSync(newPassword, bcrypt.genSaltSync());
            const updates = { password: user.password, pVersion: user.pVersion, lastModified: Date.now() };
            await AccountModel.update(user.username, updates);

            EmailService.sendResetPasswordEmail(user, newPassword);
            res.sendStatus(200);
        } catch (e) {
            console.log(e.message, e);
            res.sendStatus(e.statusCode || 500);
        }
    }
    init() {
        this.router.get('/:input', this.getPerson);
    }

}
// Create the PersonRouter, and export its configured Express.Router
export default new PersonRouter().router;
