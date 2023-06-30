import { CatsService } from './cats.service';
import { Controller, Get, Ip, NotFoundException, Param, ParseIntPipe, Post, Req } from '@nestjs/common'

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {

    }
    @Get()
    findAll(@Ip() ip): string {
        return this.catsService.getHello();
    }
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id): string {
        return `This action returns a #${id} cat`;
    }
}