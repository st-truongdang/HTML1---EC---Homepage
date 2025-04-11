export class Cart {
  constructor(data) {
    this.total = data?.total || 0;
    this.quantity = data?.quantity || 0;
    this.cartItem = data?.cartItem || [];
  }
}
