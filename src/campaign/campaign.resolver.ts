import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { PlayerService } from "src/player/player.service";
import { CampaignService } from "./campaign.service";

@Resolver("Campaign")
export class CampaignsResolver {
  constructor(
    private campaignsService: CampaignService,
    private playersService: PlayerService
  ) {}

  @Query()
  async campaign(@Args("id") id: string) {
    return this.campaignsService.campaign({ id: Number(id) });
  }

  @Mutation()
  async upsertCampaign(@Args("campaign") campaign: any) {
    const id = campaign.id;
    const existingCampaign = await this.campaignsService.campaign(id);
    if (existingCampaign) {
      return this.campaignsService.updateCampaign(campaign);
    }
    return this.campaignsService.createCampaign(campaign);
  }

  @ResolveField()
  async players(@Parent() campaign) {
    const { id } = campaign;
    return this.playersService.players({ where: { campaignId: id } });
  }
}
