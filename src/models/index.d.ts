import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image: string;
  readonly url: string;
  readonly price?: number | null;
  readonly elo: number;
  readonly users?: (UserProduct | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class User {
  readonly id: string;
  readonly first_name: string;
  readonly last_nam: string;
  readonly email: string;
  readonly phone_number?: string | null;
  readonly birthday: string;
  readonly preferences: string;
  readonly addresses?: (Address | null)[] | null;
  readonly self_entry: boolean;
  readonly contacts?: string[] | null;
  readonly likes?: (UserProduct | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Address {
  readonly id: string;
  readonly address_lines: string[];
  readonly city: string;
  readonly state: string;
  readonly country: string;
  readonly postal_code: string;
  readonly user_id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Address, AddressMetaData>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address, AddressMetaData>) => MutableModel<Address, AddressMetaData> | void): Address;
}

export declare class UserProduct {
  readonly id: string;
  readonly product: Product;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserProduct, UserProductMetaData>);
  static copyOf(source: UserProduct, mutator: (draft: MutableModel<UserProduct, UserProductMetaData>) => MutableModel<UserProduct, UserProductMetaData> | void): UserProduct;
}