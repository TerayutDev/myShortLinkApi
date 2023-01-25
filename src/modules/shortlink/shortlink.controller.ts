import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ShortLinkBusiness } from './shortlink.business';
import { ISaveLinkReq, IUpdateVisitorGetLinkReq } from './shortlink.interface';

@Controller('shortlink')
@ApiTags('shortlink')
export class ShortLinkController {
  constructor(private _shortlinkBusiness: ShortLinkBusiness) {}
  @Post('saveLink')
  async saveLink(@Body() request: ISaveLinkReq) {
    return await this._shortlinkBusiness.saveLink(request);
  }
  @Post('updateVisitor')
  async updateVisitor(@Body() request: IUpdateVisitorGetLinkReq) {
    return await this._shortlinkBusiness.updateVisitor(request);
  }
}
