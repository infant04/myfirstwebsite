import { Component,OnInit} from '@angular/core';
import { Food } from 'src/app/data/food';
import { FoodService } from 'src/app/services/food/food.service';
import { ActivatedRoute, Route } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  food:Food[]=[];
constructor(private foodservice:FoodService,activatedrout:ActivatedRoute){
  activatedrout.params.subscribe((params)=>{
    if(params.searchterm){
      this.food=foodservice.getAllBySearch(params.searchterm);
    }
    else if(params.tagterm){
      this.food=foodservice.getAllBYTag(params.tagterm)
    }
    else{
      this.food=foodservice.getAll();
    }
  }

  )

}
ngOnInit(): void {

}

}
