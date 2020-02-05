import { Connection } from 'typeorm';
import { Cliente } from '../../model/cliente.entity';

export const ClienteProvider = [
  {
    provide: 'CLIENTE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Cliente),
    inject: ['DESPERTAR_CONNECTION'],
  },
];