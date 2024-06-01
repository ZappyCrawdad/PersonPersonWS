import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePersonPersonPhoneDto } from './dto/create-person.person-phone.dto';
import { UpdatePersonPersonPhoneDto } from './dto/update-person.person-phone.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { PersonPersonPhone } from './entities/person.person-phone.entity';
import { PersonBusinessEntity } from 'src/person.business-entity/entities/person.business-entity.entity';

@Injectable()
export class PersonPersonPhoneService {

  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager
  ){}

  async create(createPersonPersonPhoneDto: CreatePersonPersonPhoneDto): Promise<PersonPersonPhone> {
    const newPhone = new PersonPersonPhone();

    newPhone.PhoneNumber = createPersonPersonPhoneDto.PhoneNumber;
    newPhone.PhoneNumberTypeID = createPersonPersonPhoneDto.PhoneNumberTypeID;
    newPhone.ModifiedDate = createPersonPersonPhoneDto.ModifiedDate;

    const personRepository = this.entityManager.getRepository(PersonPersonPhone);
    return await personRepository.save(newPhone);
  }

  async findAll(): Promise<PersonPersonPhone[]> {
    const personRepository=this.entityManager.getRepository(PersonPersonPhone)
    return await personRepository.find();
  }

  async findOnePhone(id: number): Promise<PersonPersonPhone> {
    const personRepository = this.entityManager.getRepository(PersonPersonPhone)
    return await personRepository.findOne({where:{BusinessEntityID: id}})
  }

  async update(updatePersonPersonPhoneDto: UpdatePersonPersonPhoneDto): Promise<PersonPersonPhone> {
    const personRepository = this.entityManager.getRepository(PersonPersonPhone);
    const existingPhone = await personRepository.findOne({where: {BusinessEntityID: updatePersonPersonPhoneDto.BusinessEntityID}});
    if (!existingPhone) {
        throw new BadRequestException(`Person with ID ${updatePersonPersonPhoneDto.BusinessEntityID} not found`);
    }

    // Solo actualiza si existingPhone no es nulo
    existingPhone.PhoneNumber = updatePersonPersonPhoneDto.PhoneNumber;
    existingPhone.PhoneNumberTypeID = updatePersonPersonPhoneDto.PhoneNumberTypeID;
    existingPhone.ModifiedDate = updatePersonPersonPhoneDto.ModifiedDate;
    
    return await personRepository.save(existingPhone);
}

  async remove(id: number): Promise<void> {
    const personRepository = this.entityManager.getRepository(PersonBusinessEntity);
    const existingPhone = await personRepository.findOne({where: {BusinessEntityID: id}});
    if (!existingPhone){
      throw new BadRequestException('Person with ID ${id} not found');
    }
    await personRepository.remove(existingPhone);
  }
}
