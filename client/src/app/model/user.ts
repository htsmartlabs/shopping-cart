export class User {
  _id?: string;
  admin?: boolean;
  name?: string;
  email: string;
  password: string;
  cPassword?: string;
  phone?: string;
  address?: {
    street: string,
    houseNo: string,
    city: string,
    province: string,
    country: string,
    postalCode: string
  };
}
