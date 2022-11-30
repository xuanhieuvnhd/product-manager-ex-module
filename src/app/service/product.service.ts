import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {Category} from "../model/category";
import {CategoryService} from "./category.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories: Category[] = [];
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New',
    category: this.getCategories()[0]
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new',
    category: this.getCategories()[0]
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%',
    category: this.getCategories()[0]
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%',
    category: this.getCategories()[0]
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new',
    category: this.getCategories()[0]
  }];

  constructor( private categoryService: CategoryService) {
    this.getCategories();
  }

  getAll() {
    return this.products;
  }

 getCategories(){
    return this.categoryService.getAll();
 }
  saveProduct(product: Product) {
    this.products.push(product);
  }

  findById(id: number) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }
}
