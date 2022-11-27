import { Injectable } from "@nestjs/common/decorators";

@Injectable()
export class TableService{

    findAll() {
        return 'Buscar todos os livros';
    }

    create() {
        return 'cadastrar um livro'
    }
}