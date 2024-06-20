import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class BookService {
  constructor(private prisma: PrismaService) {}

  async getAllBooks() {
    return this.prisma.book.findMany();
  }

  async getBookById(id: number) {
    return this.prisma.book.findUnique({
      where: {
        id: id,
      },
    });
  }
}
