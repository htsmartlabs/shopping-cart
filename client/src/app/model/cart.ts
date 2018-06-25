export class Cart {
  _id?: string;
  user_id: string;
  product: [{
    product_id: string;
    quantity: number;
  }];
  cost: number;
}
