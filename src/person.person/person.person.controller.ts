import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PersonPersonService } from './person.person.service';
import { CreatePersonPersonDto } from './dto/create-person.person.dto';
import { UpdatePersonPersonDto } from './dto/update-person.person.dto';

@Controller('person.person')
export class PersonPersonController {
  constructor(private readonly personPersonService: PersonPersonService) {}

  @Post()
  create(@Body() createPersonPersonDto: CreatePersonPersonDto) {
    return this.personPersonService.create(createPersonPersonDto);
  }

  @Get()
  findAll() {
    return this.personPersonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personPersonService.findOnePerson(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePersonPersonDto: UpdatePersonPersonDto) {
    return this.personPersonService.update(+id, updatePersonPersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personPersonService.remove(+id);
  }
}
