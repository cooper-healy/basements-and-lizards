import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { PlayersService } from "src/players/players.service";
import { CampaignsService } from "./campaigns.service";

@Resolver("Campaign")
export class CampaignsResolver {
  constructor(
    private campaignsService: CampaignsService,
    private playersService: PlayersService
  ) {}

  @Query()
  async campaign(@Args("id") id: string) {
    return this.campaignsService.findOneById(id);
  }

  @Mutation()
  async upsertCampaign(@Args("id") id: string) {
    return this.campaignsService.upsertCampaign(id);
  }

  @ResolveField()
  async players(@Parent() campaign) {
    const { id } = campaign;
    return this.playersService.findAll({ campaignId: id });
  }
}
