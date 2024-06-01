import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PersonEmailAddressService } from './person.email-address.service';
import { CreatePersonEmailAddressDto } from './dto/create-person.email-address.dto';
import { UpdatePersonEmailAddressDto } from './dto/update-person.email-address.dto';

@Controller('person.email-address')
export class PersonEmailAddressController {
  constructor(private readonly personEmailAddressService: PersonEmailAddressService) {}

  @Post()
  create(@Body() createPersonEmailAddressDto: CreatePersonEmailAddressDto) {
    return this.personEmailAddressService.create(createPersonEmailAddressDto);
  }

  @Get()
  findAll() {
    return this.personEmailAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personEmailAddressService.findOnePersonEmail(+id);
  }

  @Put()
  update( @Body() updatePersonEmailAddressDto: UpdatePersonEmailAddressDto) {
    return this.personEmailAddressService.update(updatePersonEmailAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personEmailAddressService.remove(+id);
  }
}
