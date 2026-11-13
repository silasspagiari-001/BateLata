import { IsString } from 'class-validator';

export class ResendCodeDto {
  @IsString()
  type: string; // EMAIL | PHONE
}
