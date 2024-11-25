import bcrypt from 'bcrypt';
import { User } from '../../../models/User'; // Ajuste o caminho conforme a sua estrutura de pastas
import { AuthenticationError } from 'apollo-server-errors';

export const mutationLogin = async (_parent: any, { email, password }: { email: string, password: string }, _context: any, _info: any) => {
  // Verificar se o usuário existe
  const user = await User.findOne({ email });
  if (!user) {
    throw new AuthenticationError('Usuário não encontrado');
  }

  // Comparar a senha fornecida com a armazenada no banco
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new AuthenticationError('Senha incorreta');
  }

  // Retornar os dados do usuário
  return user;
};
