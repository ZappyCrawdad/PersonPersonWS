import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePersonEmailAddressDto } from './dto/create-person.email-address.dto';
import { UpdatePersonEmailAddressDto } from './dto/update-person.email-address.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { PersonEmailAddress } from './entities/person.email-address.entity';

@Injectable()
export class PersonEmailAddressService {

  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager
  ){}
  
  async create(createPersonEmailAddressDto: CreatePersonEmailAddressDto): Promise<PersonEmailAddress> {
    const newEmail = new PersonEmailAddress();

    //newEmail.BusinessEntityID = createPersonEmailAddressDto.BusinessEntityID;
    newEmail.EmailAddressID = createPersonEmailAddressDto.EmailAddressID;
    newEmail.EmailAddress = createPersonEmailAddressDto.EmailAddress;
    newEmail.rowguid = createPersonEmailAddressDto.rowguid;
    newEmail.ModifiedDate = createPersonEmailAddressDto.ModifiedDate;

    const personRepository = this.entityManager.getRepository(PersonEmailAddress);
      return await personRepository.save(newEmail);
  }

  async findAll(): Promise<PersonEmailAddress[]> {
    const personRepository=this.entityManager.getRepository(PersonEmailAddress)
    return await personRepository.find();
  }

  async findOnePersonEmail(id: number): Promise<PersonEmailAddress> {
    const personRepository=this.entityManager.getRepository(PersonEmailAddress)
    return await personRepository.findOne({where:{BusinessEntityID: id}})
  }

  async update( updatePersonEmailAddressDto: UpdatePersonEmailAddressDto): Promise<PersonEmailAddress>{
  const personRepository = this.entityManager.getRepository(PersonEmailAddress);
  const existingEmail = await personRepository.findOne({where: {EmailAddressID: updatePersonEmailAddressDto.BunisesEntityID}});
  if (!existingEmail){
    throw new BadRequestException(`Person with ID ${updatePersonEmailAddressDto.BunisesEntityID} not found`);
  }
  // Solo actualiza si existingEmail no es nulo
  existingEmail.EmailAddress = updatePersonEmailAddressDto.EmailAddress;
  return await personRepository.save(existingEmail);
}


  async remove(id: number): Promise<void> {
    const personRepository = this.entityManager.getRepository(PersonEmailAddress);
    const existingEmail = await personRepository.findOne({where: {BusinessEntityID:id}})
    if(!existingEmail){
      throw new BadRequestException('Person with ID ${id} not found');
    }
    await personRepository.remove(existingEmail);
  }
}
