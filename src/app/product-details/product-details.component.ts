import { Component, OnInit, Input, Output} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product | undefined;
  @Output() notify = new ActivatedRoute()

  constructor(private route: ActivatedRoute) { }

ngOnInit() {
this.route.paramMap.subscribe((params: ParaMap) => {
let id = }
};)

}
