import { PrismaClient } from '@prisma/client'

class PlayersService {
    prisma: PrismaClient
    
    constructor() {
        this.prisma = new PrismaClient();
    }

    readById = async (id:number) => {
        return await this.prisma.player.findUnique({
            where: { id: Number(id) }
        })
    }

    create = async (params:any) => {
        
    }
}

export default new PlayersService();