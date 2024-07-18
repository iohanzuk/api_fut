import { Application } from 'express';

export abstract class CommonRoutesConfig {
    protected app: Application;
    protected name: string;

    constructor(app: Application, name: string ) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }

    getName() {
        return this.name;
    }

    abstract configureRoutes(): Application;
}