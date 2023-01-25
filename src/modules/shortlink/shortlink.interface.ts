import { ApiProperty } from '@nestjs/swagger';

export class ISaveLinkReq {
  @ApiProperty()
  url: string;
  @ApiProperty()
  newUrl: string;
}
export interface ISaveLinkRes {
  short: string;
  newUrl: string;
}

export class IUpdateVisitorGetLinkReq {
  @ApiProperty()
  short: string;
}
export interface IUpdateVisitorGetLinkRes {
  url: string;
}
