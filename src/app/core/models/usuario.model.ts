export interface Usuario {
  _id?: string;
  nome: string;
  email: string;
  tipo: 'admin' | 'cliente' | 'cliente-plus';
  dataCadastro?: Date;
}