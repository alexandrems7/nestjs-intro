import { Injectable } from '@nestjs/common/decorators';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  tables: Table[] = [];

  findAll() {
    return this.tables;
  }

  create(createTableDto: CreateTableDto) {
    const table: Table = { id: 'random_id', ...createTableDto };

    this.tables.push(table);
    return table;
  }
}
