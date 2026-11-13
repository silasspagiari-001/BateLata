import { IsString } from 'class-validator';

export class VerifyCodeDto {
  @IsString()
  type: string; // EMAIL | PHONE

  @IsString()
  code: string;
}
