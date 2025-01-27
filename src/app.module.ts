import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArchersModule } from './archers/archers.module';
import { EquipmentModule } from './equipment/equipment.module';
import { ArrowsModule } from './arrows/arrows.module';
import { ScoresheetsModule } from './scoresheets/scoresheets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoresetModule } from './scoreset/scoreset.module';
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3006,
            username: 'root',
            password: 'archery2425FYP!',
            database: 'archery',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        ArchersModule,
        EquipmentModule,
        ArrowsModule,
        ScoresheetsModule,
        ScoresetModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
