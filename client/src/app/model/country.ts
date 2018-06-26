export class Country {
  _id: string;
  country: string;
  province:[{
    name: string;
    city: string[];
  }];
}
