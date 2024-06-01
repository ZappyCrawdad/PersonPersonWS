import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Person.PhoneNumberType')
export class PersonPhoneNumberType {

    @PrimaryGeneratedColumn()
    PhoneNumberTypeID: number;

    @Column()
    Name: String;

    @Column()
    ModifiedDate: Date;
}
