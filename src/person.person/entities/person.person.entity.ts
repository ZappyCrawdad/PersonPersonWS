import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Person.Person')
export class PersonPerson {

    @PrimaryGeneratedColumn()
    BusinessEntityID: number;

    @Column()
    PersonType: String;

    @Column()
    NameStyle: boolean;

    @Column()
    Title: String;

    @Column()
    FirstName: String;

    @Column()
    MiddleName: String;

    @Column()
    LastName: String;

    @Column()
    Suffix: String;

    @Column()
    EmailPromotion: number;

    @Column()
    AdditionalContactInfo: String;

    @Column()
    Demographics: String;

    @Column()
    rowguid: String;

    @Column()
    ModifiedDate: Date;
}
