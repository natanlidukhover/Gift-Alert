// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, User, Address, UserProduct } = initSchema(schema);

export {
  Product,
  User,
  Address,
  UserProduct
};