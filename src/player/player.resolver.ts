import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { PlayersService } from "./player.service";
import { CampaignsService } from "../campaign/campaign.service";

@Resolver("Player")
export class PlayersResolver {
  constructor(
    private campaignsService: CampaignsService,
    private playersService: PlayersService
  ) {}

  @Query()
  async player(@Args("id") id: string) {
    return this.playersService.findOneById(id);
  }

  @Mutation()
  async upsertPlayer(@Args("id") id: string) {
    return this.playersService.upsertPlayer(id);
  }

  @ResolveField()
  async campaigns(@Parent() player) {
    const { id } = player;
    return this.campaignsService.findAll({ players: id });
  }
}
