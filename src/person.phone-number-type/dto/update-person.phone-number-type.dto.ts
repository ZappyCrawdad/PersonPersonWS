import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonPhoneNumberTypeDto } from './create-person.phone-number-type.dto';

export class UpdatePersonPhoneNumberTypeDto extends PartialType(CreatePersonPhoneNumberTypeDto) {

    PhoneNumberTypeID?: number;
    BusinessEntityID?: number;
    Name?: String;
    ModifiedDate?: Date;
}
