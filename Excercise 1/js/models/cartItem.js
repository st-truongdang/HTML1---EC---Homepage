export class CartItem {
  constructor(data) {
    this.id = data?.id;
    this.title = data?.title;
    this.price = data?.price;
    this.quantity = data?.quantity || 1;
  }
}
