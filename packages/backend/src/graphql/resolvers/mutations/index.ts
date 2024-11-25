import { GraphQLResolveInfo } from 'graphql';
import { mutationTest } from './mutationTest';
import { mutationLogin } from './mutationLogin'; 

export default {
  mutationTest: (
    parent: any,
    args: any,
    context: any,
    info: GraphQLResolveInfo
  ) => mutationTest(parent, args, context, info),
  login: (
    parent: any,
    args: { email: string; password: string },
    context: any,
    info: GraphQLResolveInfo
  ) => mutationLogin(parent, args, context, info), 
};

