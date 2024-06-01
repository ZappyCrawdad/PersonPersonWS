import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PersonPersonPhoneService } from './person.person-phone.service';
import { CreatePersonPersonPhoneDto } from './dto/create-person.person-phone.dto';
import { UpdatePersonPersonPhoneDto } from './dto/update-person.person-phone.dto';

@Controller('person.person-phone')
export class PersonPersonPhoneController {
  constructor(private readonly personPersonPhoneService: PersonPersonPhoneService) {}

  @Post()
  create(@Body() createPersonPersonPhoneDto: CreatePersonPersonPhoneDto) {
    return this.personPersonPhoneService.create(createPersonPersonPhoneDto);
  }

  @Get()
  findAll() {
    return this.personPersonPhoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personPersonPhoneService.findOnePhone(+id);
  }

  // person-person-phone.controller.ts

@Put()
update(@Body() updatePersonPersonPhoneDto: UpdatePersonPersonPhoneDto){
    return this.personPersonPhoneService.update(updatePersonPersonPhoneDto);
}


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personPersonPhoneService.remove(+id);
  }
}
