import { Component,OnInit} from '@angular/core';
import { Tag } from 'src/app/data/tag';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
  tag?:Tag[];
  constructor(private foodservice:FoodService){
    this.tag=this.foodservice.getAllTag();
  }

  ngOnInit(): void {

  }

}
