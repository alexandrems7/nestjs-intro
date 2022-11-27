import { ApiProperty } from "@nestjs/swagger/dist";
import { IsNumber, IsPositive } from "class-validator";

export class CreateTableDto {
    @IsNumber()
    @IsPositive()
    @ApiProperty({
        description: "código do livro",
        example: 1,
    })
    number: number;
}