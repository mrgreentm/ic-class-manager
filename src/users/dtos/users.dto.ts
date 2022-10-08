/* eslint-disable prettier/prettier */
import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'O campo nome deve ser do tipo TEXTO!' })
  @IsNotEmpty({ message: 'O campo nome não pode ser DE FORMA ALGUMA VAZIO' })
  name: string;

  @IsString({ message: 'O campo role deve ser do tipo TEXTO!' })
  @IsNotEmpty({ message: 'O campo role não pode ser DE FORMA ALGUMA VAZIO' })
  role: string;

  @IsEmail({ message: 'Insira um e-mail válido!' })
  @IsNotEmpty({ message: 'O campo e-mail não pode ser DE FORMA ALGUMA VAZIO!' })
  email: string;

  @IsString({ message: 'O campo registration deve ser do tipo TEXTO!' })
  @IsNotEmpty({ message: 'O campo registration não pode ser DE FORMA ALGUMA VAZIO!' })
  registration: string;

  @IsNotEmpty({ message: 'O campo senha não pode ser DE FORMA ALGUMA VAZIO!' })
  @IsString({
    message: 'Sua senha DEVE conter letras, número e caracteres especiais!',
  })
  password: string;
}
