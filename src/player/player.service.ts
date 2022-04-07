import { Injectable } from "@nestjs/common";
import { Player, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}

  async player(
    playerWhereUniqueInput: Prisma.PlayerWhereUniqueInput
  ): Promise<Player> {
    return this.prisma.player.findUnique({ where: playerWhereUniqueInput });
  }

  async players(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PlayerWhereUniqueInput;
    where?: Prisma.PlayerWhereInput;
    orderBy?: Prisma.PlayerOrderByWithRelationInput;
  }): Promise<Player[]> {
    return this.prisma.player.findMany({
      ...params,
    });
  }

  async createPlayer(data: Prisma.PlayerCreateInput): Promise<Player> {
    return this.prisma.player.create({ data });
  }

  async updatePlayer(params: {
    where: Prisma.PlayerWhereUniqueInput;
    data: Prisma.PlayerUpdateInput;
  }): Promise<Player> {
    return this.prisma.player.update({
      ...params,
    });
  }

  async deletePlayer(where: Prisma.PlayerWhereUniqueInput): Promise<Player> {
    return this.prisma.player.delete({ where });
  }
}
