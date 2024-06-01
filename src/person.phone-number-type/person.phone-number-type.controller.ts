import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PersonPhoneNumberTypeService } from './person.phone-number-type.service';
import { CreatePersonPhoneNumberTypeDto } from './dto/create-person.phone-number-type.dto';
import { UpdatePersonPhoneNumberTypeDto } from './dto/update-person.phone-number-type.dto';

@Controller('person.phone-number-type')
export class PersonPhoneNumberTypeController {
  constructor(private readonly personPhoneNumberTypeService: PersonPhoneNumberTypeService) {}

  @Post()
  create(@Body() createPersonPhoneNumberTypeDto: CreatePersonPhoneNumberTypeDto) {
    return this.personPhoneNumberTypeService.create(createPersonPhoneNumberTypeDto);
  }

  @Get()
  findAll() {
    return this.personPhoneNumberTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('buesqueda de id en el Controller' + id)
    return this.personPhoneNumberTypeService.findOnePhType(+id);
  }

  @Put()
  update( @Body() updatePersonPhoneNumberTypeDto: UpdatePersonPhoneNumberTypeDto) {
    return this.personPhoneNumberTypeService.update(updatePersonPhoneNumberTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personPhoneNumberTypeService.remove(+id);
  }
}
