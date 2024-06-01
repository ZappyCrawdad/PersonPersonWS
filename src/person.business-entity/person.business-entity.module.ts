import { Module } from '@nestjs/common';
import { PersonBusinessEntityService } from './person.business-entity.service';
import { PersonBusinessEntityController } from './person.business-entity.controller';

@Module({
  controllers: [PersonBusinessEntityController],
  providers: [PersonBusinessEntityService],
})
export class PersonBusinessEntityModule {}
