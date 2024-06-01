import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Person.EmailAddress')
export class PersonEmailAddress {

    @PrimaryGeneratedColumn()
    BusinessEntityID: number;

    @Column()
    EmailAddressID: number;

    @Column()
    EmailAddress: String;

    @Column()
    rowguid: String;

    @Column()
    ModifiedDate: Date;
}
