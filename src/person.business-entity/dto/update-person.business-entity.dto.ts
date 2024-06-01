import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonBusinessEntityDto } from './create-person.business-entity.dto';

export class UpdatePersonBusinessEntityDto extends PartialType(CreatePersonBusinessEntityDto) {

    BusinessEntityID?: number;
    rowguid?: String;
    ModifiedDate?: Date;
}
