import { Injectable } from "@nestjs/common";
import { Campaign, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CampaignService {
  constructor(private prisma: PrismaService) {}

  async campaign(
    campaignWhereUniqueInput: Prisma.CampaignWhereUniqueInput
  ): Promise<Campaign> {
    return this.prisma.campaign.findUnique({ where: campaignWhereUniqueInput });
  }

  async campaigns(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CampaignWhereUniqueInput;
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput;
  }): Promise<Campaign[]> {
    return this.prisma.campaign.findMany({
      ...params,
    });
  }

  async createCampaign(data: Prisma.CampaignCreateInput): Promise<Campaign> {
    return this.prisma.campaign.create({ data });
  }

  async updateCampaign(params: {
    where: Prisma.CampaignWhereUniqueInput;
    data: Prisma.CampaignUpdateInput;
  }): Promise<Campaign> {
    return this.prisma.campaign.update({
      ...params,
    });
  }

  async deleteCampaign(
    where: Prisma.CampaignWhereUniqueInput
  ): Promise<Campaign> {
    return this.prisma.campaign.delete({ where });
  }
}
