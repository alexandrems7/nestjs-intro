import { Controller, Get, Post } from '@nestjs/common';
@Controller('table')
export class TableController {
    @Get()
    findAll() {
    return 'Buscar todos os livros';
    }

    @Post()
    create(){
        return 'cadastrar um livro'
    }
}