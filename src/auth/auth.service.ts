import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);

    try {
      // save the new user in the db
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
        // we can select values what we want to send as response.
        // select: {
        //   id: true,
        //   email: true,
        //   createdAt: true,
        // },
      });

      delete user.hash;
      // return the saved user
      return {
        message: 'User registered successfully!',
        error: false,
        user: user,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        return {
          message: 'User already exist!',
          error: true,
        };
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('email does not exist!');
    }

    const pwMatches = await argon.verify(user.hash, dto.password);

    if (!pwMatches) {
      throw new ForbiddenException('Wrong password');
    }

    delete user.hash;
    return user;
  }
}
