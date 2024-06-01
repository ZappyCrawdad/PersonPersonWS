import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonPersonModule } from './person.person/person.person.module';
import { PersonBusinessEntityModule } from './person.business-entity/person.business-entity.module';
import { PersonEmailAddressModule } from './person.email-address/person.email-address.module';
import { PersonPersonPhoneModule } from './person.person-phone/person.person-phone.module';
import { PersonPhoneNumberTypeModule } from './person.phone-number-type/person.phone-number-type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433, // Puerto por defecto de SQL Server
      username: 'usr_aas',
      password: '123',
      database: 'AdventureWorks2022',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Útil para desarrollo, no recomendable para producción
      options: {
        encrypt: true, // Si es necesario, dependiendo de tu configuración de servidor
        trustServerCertificate: true // Necesario si estás en desarrollo y usas certificados autofirmados
      }
    }),
    PersonPersonModule,
    PersonBusinessEntityModule,
    PersonEmailAddressModule,
    PersonPersonPhoneModule,
    PersonPhoneNumberTypeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
