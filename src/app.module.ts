import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { PrismaModule } from './prisma/prisma.module';
import { RentalModule } from './rental/rental.module';

@Module({
  imports: [AuthModule, UserModule, BookModule, PrismaModule, RentalModule],
})
export class AppModule {}
