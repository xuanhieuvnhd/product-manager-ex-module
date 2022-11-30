import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  // @ts-ignore
  productForm: FormGroup;
  // @ts-ignore
  id: number;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);
      this.productForm = new FormGroup({
        // @ts-ignore
        id: new FormControl(product.id),
        // @ts-ignore
        name: new FormControl(product.name),
        // @ts-ignore
        price: new FormControl(product.price),
        // @ts-ignore
        description: new FormControl(product.description),
      });
    });
  }

  ngOnInit() {
    this.getAllCategory();
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product);
    alert('Cập nhật sản phẩm thành công');
  }
  getAllCategory() {
    this.categories = this.categoryService.getAll();
  }
}
