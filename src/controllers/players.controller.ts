import { Request, Response, NextFunction } from 'express';
import PlayersService from '../services/players.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:players-controller');
class PlayersController {
    public async listPlayers(req: Request, res: Response) {
        const users = await PlayersService.list(100, 0);
        res.status(200).send(users);
    }

    public async getPlayerById(req: Request, res: Response) {
        const player = await PlayersService.readById(parseInt(req.params.playerId));
        res.status(200).send(player);
    }

    public async createPlayer(req: Request, res: Response) {
        const userId = await PlayersService.create(req.body);
        res.status(201).send({id: userId});
    }

    public async patch(req: Request, res: Response) {
        log(await PlayersService.patchById(req.body));
        res.status(204).send(``);
    }

    public async put(req: Request, res: Response) {
        log(await PlayersService.updateById({id: req.params.userId, ...req.body}));
        res.status(204).send(``);
    }

    public async removePlayer(req: Request, res: Response) {
        log(await PlayersService.deleteById(req.params.userId));
        res.status(204).send(``);
    }
}

export default new PlayersController();