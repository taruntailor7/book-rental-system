import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Import PrismaService if separate
import { RentalDto } from './dto/rental.dto'; // Ensure you have defined RentalDto with appropriate validation decorators

@Injectable()
export class RentalService {
  constructor(private readonly prisma: PrismaService) {} // Inject PrismaService if separate

  async rentBook(rentalData: RentalDto) {
    const {
      userId,
      bookId,
      bookTitle,
      bookPrice,
      bookImageUrl,
      bookDescription,
    } = rentalData;

    const rental = await this.prisma.rental.create({
      data: {
        userId,
        bookId,
        bookTitle,
        bookPrice,
        bookImageUrl,
        bookDescription,
      },
    });

    return rental;
  }

  async getRentalsByUserId(userId: number) {
    const rentals = await this.prisma.rental.findMany({
      where: {
        userId,
      },
    });

    return rentals;
  }
}
