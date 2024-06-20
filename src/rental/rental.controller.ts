import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { RentalService } from './rental.service';
import { RentalDto } from './dto/rental.dto'; // Ensure you have defined RentalDto with appropriate validation decorators

@Controller('rentals')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Post()
  async rentBook(@Body() rentalData: RentalDto) {
    return this.rentalService.rentBook(rentalData);
  }

  @Get('user/:userId')
  async getRentalsByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.rentalService.getRentalsByUserId(userId);
  }
}
