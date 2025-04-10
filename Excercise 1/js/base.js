export class Product {
  constructor(data) {
    this.id = data?.Id;
    this.title = data?.Title;
    this.gender = data?.Gender;
    this.age = data?.Age;
    this.price = data?.Price;
  }
}
