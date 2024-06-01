import { Module } from '@nestjs/common';
import { PersonPhoneNumberTypeService } from './person.phone-number-type.service';
import { PersonPhoneNumberTypeController } from './person.phone-number-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonPhoneNumberType } from './entities/person.phone-number-type.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([PersonPhoneNumberType])
  ],
  controllers: [PersonPhoneNumberTypeController],
  providers: [PersonPhoneNumberTypeService],
})
export class PersonPhoneNumberTypeModule {}
