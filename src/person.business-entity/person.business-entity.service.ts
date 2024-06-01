import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePersonBusinessEntityDto } from './dto/create-person.business-entity.dto';
import { UpdatePersonBusinessEntityDto } from './dto/update-person.business-entity.dto';
import { PersonBusinessEntity } from './entities/person.business-entity.entity';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

@Injectable()
export class PersonBusinessEntityService {

  constructor(
    @InjectEntityManager()
      private readonly entityManager: EntityManager
    ){}

    async  create(createPersonBusinessEntityDto: CreatePersonBusinessEntityDto): Promise<PersonBusinessEntity> {
      const newBunisses = new PersonBusinessEntity();

      newBunisses.BusinessEntityID = createPersonBusinessEntityDto.BusinessEntityID;
      newBunisses.rowguid = createPersonBusinessEntityDto.rowguid;
      newBunisses.ModifiedDate = createPersonBusinessEntityDto.ModifiedDate;

      const personRepository = this.entityManager.getRepository(PersonBusinessEntity);
      return await personRepository.save(newBunisses);
      }

  async findAll(): Promise<PersonBusinessEntity[]> {
    const personRepository = this.entityManager.getRepository(PersonBusinessEntity)
    return await personRepository.find();
    }

  async findOneBunisses(id: number): Promise<PersonBusinessEntity>{
    const personRepository = this.entityManager.getRepository(PersonBusinessEntity)
    return await personRepository.findOne({where: {BusinessEntityID: id}})
  }

  async update(id: number, updatePersonBusinessEntityDto: UpdatePersonBusinessEntityDto): Promise<PersonBusinessEntity> {
    const personRepository = this.entityManager.getRepository(PersonBusinessEntity);
    const existingBusiness = await personRepository.findOne({where: {BusinessEntityID:id}});
    if (!existingBusiness) {
      throw new BadRequestException('Person with ID ${id} not found');
    }
    existingBusiness.BusinessEntityID = updatePersonBusinessEntityDto.BusinessEntityID;
    existingBusiness.rowguid = updatePersonBusinessEntityDto.rowguid;
    existingBusiness.ModifiedDate = updatePersonBusinessEntityDto.ModifiedDate;
    return await personRepository.save(existingBusiness);
  }

  async remove(id: number): Promise<void> {
    const personRepository = this.entityManager.getRepository(PersonBusinessEntity);
    const existingBusiness = await  personRepository.findOne({ where: {BusinessEntityID:id} });
    if (!existingBusiness) {
      throw new BadRequestException('Person with ID ${id} not found');
    }
    await personRepository.remove(existingBusiness);

  }
}
