import { Request, Response, NextFunction } from 'express';
import { Validator } from 'jsonschema';
import debug from 'debug';

const log: debug.IDebugger = debug('app:players-controller');
class PlayersMiddleware {
    private validator: Validator;
 
    constructor() {
        this.validator = new Validator();
    }

    async validateRequiredPlayerBodyFields(req: Request, res: Response, next: NextFunction) {
        if (req.body?.email && req.body?.password) {
            next();
        } else {
            res.status(400).send({error: `Missing required fields email and password`});
        }
    }
    
    async extractPlayerId(req: Request, res: Response, next: NextFunction) {
        req.body.id = req.params.player_Id;
        next();
    }
}

export default new PlayersMiddleware();
