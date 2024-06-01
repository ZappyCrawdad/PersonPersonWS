import { Module } from '@nestjs/common';
import { PersonPersonPhoneService } from './person.person-phone.service';
import { PersonPersonPhoneController } from './person.person-phone.controller';

@Module({
  controllers: [PersonPersonPhoneController],
  providers: [PersonPersonPhoneService],
})
export class PersonPersonPhoneModule {}
