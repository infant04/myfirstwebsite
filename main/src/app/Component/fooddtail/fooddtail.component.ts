import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/data/food';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-fooddtail',
  templateUrl: './fooddtail.component.html',
  styleUrls: ['./fooddtail.component.css']
})
export class FooddtailComponent implements OnInit{
  food!:Food;
  constructor(activated:ActivatedRoute,private foodService:FoodService,private cartservice:CartService,private router:Router){
    activated.params.subscribe((params)=>{
      if(params.id)
    {
      this.food=this.foodService.getFoodById(params.id);
    }
    }

    )
  }

  addToCart():void{
    this.cartservice.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }
ngOnInit(): void {

}
}
