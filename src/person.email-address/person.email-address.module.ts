import { Module } from '@nestjs/common';
import { PersonEmailAddressService } from './person.email-address.service';
import { PersonEmailAddressController } from './person.email-address.controller';

@Module({
  controllers: [PersonEmailAddressController],
  providers: [PersonEmailAddressService],
})
export class PersonEmailAddressModule {}
