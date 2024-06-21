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

    try {
      // Check if the book has already been rented
      const existingRental = await this.prisma.rental.findFirst({
        where: {
          userId,
          bookId,
        },
      });

      if (existingRental) {
        return {
          error: true,
          message: 'This book has already been rented.',
        };
      }

      // Create a new rental entry
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
      return {
        error: false,
        message: 'Book rented successfully',
        rental,
      };
    } catch (error) {
      console.error('Error renting book:', error);
      return {
        error: true,
        message: 'Failed to rent the book. Please try again later.',
      };
    }
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
