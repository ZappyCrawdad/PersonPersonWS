import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonPersonPhoneDto } from './create-person.person-phone.dto';

export class UpdatePersonPersonPhoneDto extends PartialType(CreatePersonPersonPhoneDto) {

    BunisesEntityID?: number;
    PhoneNumber?: String;
    PhoneNumberTypeID?: number;
    ModifiedDate?: Date;
}
