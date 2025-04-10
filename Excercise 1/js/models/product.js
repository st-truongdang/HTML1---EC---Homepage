export class Product {
  constructor(data) {
    this.id = data?.id || 'N/A';
    this.title = data?.title || 'No title';
    this.gender = data?.gender || 'No gender';
    this.age = data?.age || 'No age';
    this.price = data?.price || 'No price';
  }
}
