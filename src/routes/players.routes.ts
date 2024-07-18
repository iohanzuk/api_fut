import {CommonRoutesConfig} from '../common/common.routes.config';
import PlayersController from '../controllers/players.controller';
import PlayersMiddleware from '../middlewares/players.middleware';
import express from 'express';

export class PlayersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PlayersRoutes');
    }

    configureRoutes() {
        this.app.route(`/players`)
            .get(PlayersController.listPlayers)
            .post(
                PlayersMiddleware.validateRequiredPlayerBodyFields,
                PlayersController.createPlayer);

        this.app.param(`playerId`, PlayersMiddleware.extractPlayerId);
        this.app.route(`/players/:playerId`)
            .get(PlayersController.getPlayerById)
            .delete(PlayersController.removePlayer)
            .put( 
                PlayersMiddleware.validateRequiredPlayerBodyFields,
                PlayersController.put);

        return this.app;
    }
}