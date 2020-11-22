import { IsString, IsNumber } from "class-validator";

export class CreateUserSchema {
    @IsNumber()
    id: number;

    @IsString()
    username: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}