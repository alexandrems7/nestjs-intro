import { Injectable } from "@nestjs/common/decorators";
import { CreateTableDto } from "./dto/create-table.dto";
@Injectable()
export class TableService{

    findAll() {
        return 'Buscar todos os livros';
    }

    create(createTableDto: CreateTableDto) {
        return 'cadastrar um livro'
    }
}