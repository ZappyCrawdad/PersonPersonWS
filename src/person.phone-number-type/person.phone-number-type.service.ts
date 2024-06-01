import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { CreatePersonPhoneNumberTypeDto } from './dto/create-person.phone-number-type.dto';
import { UpdatePersonPhoneNumberTypeDto } from './dto/update-person.phone-number-type.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { PersonPhoneNumberType } from './entities/person.phone-number-type.entity';
import { PersonBusinessEntity } from 'src/person.business-entity/entities/person.business-entity.entity';

@Injectable()
export class PersonPhoneNumberTypeService {

  constructor(
    @InjectEntityManager()
      private readonly entityManager: EntityManager
    ){}

  async create(createPersonPhoneNumberTypeDto: CreatePersonPhoneNumberTypeDto): Promise<PersonPhoneNumberType> {
    const newPhType = new PersonPhoneNumberType();

    newPhType.PhoneNumberTypeID = createPersonPhoneNumberTypeDto.BusinessEntityID;
    newPhType.Name = createPersonPhoneNumberTypeDto.Name;
    newPhType.ModifiedDate = createPersonPhoneNumberTypeDto.ModifiedDate;

    const personRepository = this.entityManager.getRepository(PersonPhoneNumberType);
      return await personRepository.save(newPhType);
  }

  async findAll(): Promise<PersonPhoneNumberType[]> {
    const personRepository = this.entityManager.getRepository(PersonPhoneNumberType)
    return await personRepository.find();
  }

  async findOnePhType(id: number): Promise<PersonPhoneNumberType> {
    console.log('busqueda id'+id)
    const personRepository = this.entityManager.getRepository(PersonPhoneNumberType)
    return await personRepository.findOne({where: {PhoneNumberTypeID: id}})
  }

  async update(updatePersonPhoneNumberTypeDto: UpdatePersonPhoneNumberTypeDto): Promise<PersonPhoneNumberType> {
    const personRepository = this.entityManager.getRepository(PersonPhoneNumberType);
    const existingPhType = await personRepository.findOne({where: {PhoneNumberTypeID: updatePersonPhoneNumberTypeDto.PhoneNumberTypeID}});
    if (!existingPhType) {
        throw new BadRequestException(`Person with ID ${updatePersonPhoneNumberTypeDto.PhoneNumberTypeID} not found`);
    }

    // Solo actualiza si existingPhType no es nulo
    existingPhType.Name = updatePersonPhoneNumberTypeDto.Name;
    existingPhType.ModifiedDate = updatePersonPhoneNumberTypeDto.ModifiedDate;
    
    return await personRepository.save(existingPhType);
}
  async remove(id: number): Promise<void> {
    const personRepository = this.entityManager.getRepository(PersonPhoneNumberType);
    const existingPhType = await  personRepository.findOne({ where: {PhoneNumberTypeID: id} });
    if (!existingPhType) {
      throw new BadRequestException('Person with ID ${id} not found');
    }
    await personRepository.remove(existingPhType);
  }
}
