import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../model/product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return newProduct;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productID: string) {
    const product = this.products.find((prod) => prod.id === productID);
    if (!product) {
      throw new NotFoundException('Product ID not Found');
    }
    return { ...product };
  }
}
