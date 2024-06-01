import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PersonBusinessEntityService } from './person.business-entity.service';
import { CreatePersonBusinessEntityDto } from './dto/create-person.business-entity.dto';
import { UpdatePersonBusinessEntityDto } from './dto/update-person.business-entity.dto';

@Controller('person.business-entity')
export class PersonBusinessEntityController {
  constructor(private readonly personBusinessEntityService: PersonBusinessEntityService) {}

  @Post()
  create(@Body() createPersonBusinessEntityDto: CreatePersonBusinessEntityDto) {
    return this.personBusinessEntityService.create(createPersonBusinessEntityDto);
  }

  @Get()
  findAll() {
    return this.personBusinessEntityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personBusinessEntityService.findOneBunisses(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePersonBusinessEntityDto: UpdatePersonBusinessEntityDto) {
    return this.personBusinessEntityService.update(+id, updatePersonBusinessEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personBusinessEntityService.remove(+id);
  }
}
