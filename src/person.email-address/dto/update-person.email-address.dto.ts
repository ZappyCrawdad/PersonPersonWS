import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonEmailAddressDto } from './create-person.email-address.dto';

export class UpdatePersonEmailAddressDto extends PartialType(CreatePersonEmailAddressDto) {

    BunisesEntityID?: number;
    EmailAddressID?: number;
    EmailAddress?: String;
    rowguid?: String;
    ModifiedDate?: Date;
}
