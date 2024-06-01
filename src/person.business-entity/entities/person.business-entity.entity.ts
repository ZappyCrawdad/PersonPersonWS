import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Person.BusinessEntity')
export class PersonBusinessEntity {

    @PrimaryGeneratedColumn()
    BusinessEntityID: number;

    @Column()
    rowguid: String;

    @Column()
    ModifiedDate: Date;
}
