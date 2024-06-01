import { Module } from '@nestjs/common';
import { PersonPersonService } from './person.person.service';
import { PersonPersonController } from './person.person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonPerson } from './entities/person.person.entity';

@Module({

  imports: [
    TypeOrmModule.forFeature([PersonPerson])
  ],
  controllers: [PersonPersonController],
  providers: [PersonPersonService],
  exports:[PersonPersonService]
})
export class PersonPersonModule {}
