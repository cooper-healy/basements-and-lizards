import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { PlayerService } from "./player.service";
import { CampaignService } from "../campaign/campaign.service";
import { Prisma } from "@prisma/client";

@Resolver("Player")
export class PlayersResolver {
  constructor(
    private campaignsService: CampaignService,
    private playersService: PlayerService
  ) {}

  @Query()
  async player(@Args("id") id: string) {
    return this.playersService.player({ id: Number(id) });
  }

  @Mutation()
  async upsertPlayer(@Args("player") player: any) {
    const id = player.id;
    if (id) {
      const existingPlayer = await this.playersService.player({ id });
      if (existingPlayer) {
        return this.playersService.updatePlayer(player);
      }
    }
    return this.playersService.createPlayer(player);
  }

  @ResolveField()
  async campaigns(@Parent() player) {
    const { id } = player;
    return this.campaignsService.campaigns({ where: { id: Number(id) } });
  }
}
