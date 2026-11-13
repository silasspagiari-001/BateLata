import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { VerifyCodeDto } from './dto/verify-code.dto';
import { ResendCodeDto } from './dto/resend-code.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post('verify-email')
  verifyEmail(@Body() dto: VerifyCodeDto) {
    return this.authService.verifyCode(dto);
  }

  @Post('verify-phone')
  verifyPhone(@Body() dto: VerifyCodeDto) {
    return this.authService.verifyCode(dto);
  }

  @Post('resend-code')
  resendCode(@Body() dto: ResendCodeDto) {
    return this.authService.resendCode(dto);
  }
}
