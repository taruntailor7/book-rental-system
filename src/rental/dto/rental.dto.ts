import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class RentalDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Type(() => Number)
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Type(() => Number)
  bookId: number;

  @IsString()
  @IsNotEmpty()
  bookTitle: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Type(() => Number)
  bookPrice: number;

  @IsOptional()
  @IsString()
  bookImageUrl?: string;

  @IsOptional()
  @IsString()
  bookDescription?: string;
}
