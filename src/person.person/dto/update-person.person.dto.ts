import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonPersonDto } from './create-person.person.dto';

export class UpdatePersonPersonDto extends PartialType(CreatePersonPersonDto) {

    BunisesEntityID?: number;
    PersonType?: String;
    NameStyle?: boolean;
    Title?: String;
    FirstName?: String;
    MiddleName?: String;
    LastName?: String;
    Suffix?: String;
    EmailPromotion?: number;
    AdditionalContactInfo?: String;
    Demographics?: String;
    rowguid?: String;
    ModifiedDate?: Date;
}
