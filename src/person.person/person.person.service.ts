import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePersonPersonDto } from './dto/create-person.person.dto';
import { UpdatePersonPersonDto } from './dto/update-person.person.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { promises } from 'dns';
import { PersonPerson } from './entities/person.person.entity';

@Injectable()
export class PersonPersonService {

    constructor(
      @InjectEntityManager()
      private readonly entityManager: EntityManager
    ){}

    async create(createPersonPersonDto: CreatePersonPersonDto): Promise<PersonPerson> {
      const newPerson = new PersonPerson();
      // Aqui
      
      //newPerson.BusinessEntityId = ...
      newPerson.PersonType = createPersonPersonDto.PersonType;
      newPerson.NameStyle = createPersonPersonDto.NameStyle;
      newPerson.Title = createPersonPersonDto.Title;
      newPerson.FirstName = createPersonPersonDto.FirstName;
      newPerson.MiddleName = createPersonPersonDto.MiddleName;
      newPerson.LastName= createPersonPersonDto.LastName;
      newPerson.Suffix = createPersonPersonDto.Suffix;
      newPerson.EmailPromotion = createPersonPersonDto.EmailPromotion;
      newPerson.AdditionalContactInfo = createPersonPersonDto.AdditionalContactInfo;
      newPerson.Demographics = createPersonPersonDto.Demographics;
      newPerson.rowguid = createPersonPersonDto.rowguid;
      newPerson.ModifiedDate = createPersonPersonDto.ModifiedDate;

      
     const personRepository = this.entityManager.getRepository(PersonPerson);
    return await personRepository.save(newPerson);
  }


  async findAll(): Promise<PersonPerson[]> {
    const personRepository=this.entityManager.getRepository(PersonPerson)
    return await personRepository.find();
  }

  async findOnePerson(id: number): Promise<PersonPerson> {
    const personRepository=this.entityManager.getRepository(PersonPerson)
    return await personRepository.findOne({where:{BusinessEntityID: id}})
  }

  async update(id: number, updatePersonPersonDto: UpdatePersonPersonDto): Promise<PersonPerson> {
    const personRepository = this.entityManager.getRepository(PersonPerson);
    const existingPerson = await personRepository.findOne({where: {BusinessEntityID:id}});
    if (!existingPerson) {
      throw new BadRequestException('Person with ID ${id} not found');
    }
    existingPerson.PersonType = updatePersonPersonDto.PersonType;
    existingPerson.FirstName= updatePersonPersonDto.FirstName;
    existingPerson.LastName= updatePersonPersonDto.LastName;
    return await personRepository.save(existingPerson);
   
  }


  async remove(id: number): Promise<void>{
    const personRepository = this.entityManager.getRepository(PersonPerson);
    const existingPerson = await  personRepository.findOne({ where: {BusinessEntityID:id} });
    if (!existingPerson) {
      throw new BadRequestException('Person with ID ${id} not found');
    }
    await personRepository.remove(existingPerson);
    
  }

}
