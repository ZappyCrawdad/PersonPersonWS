import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Person.PersonPhone')
export class PersonPersonPhone {

    @PrimaryGeneratedColumn()
    BusinessEntityID: number;

    @Column()
    PhoneNumber: String;

    @Column()
    PhoneNumberTypeID: number;

    @Column()
    ModifiedDate: Date;
}
