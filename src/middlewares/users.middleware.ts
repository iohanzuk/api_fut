import { Request, Response, NextFunction } from 'express';
import debug from 'debug';

const log: debug.IDebugger = debug('app:players-controller');
class UsersMiddleware {
 

    async validateUserRole(req: Request, res: Response, next: NextFunction) {
        if (req.body?.email && req.body?.password) {
            next();
        } else {
            res.status(400).send({error: `Missing required fields email and password`});
        }
    }
}

export default new UsersMiddleware();
