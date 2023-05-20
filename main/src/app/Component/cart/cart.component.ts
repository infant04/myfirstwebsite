import { Component,OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/data/cart/cart';
import { Cartlist } from 'src/app/data/cart/cartitem';
import { CartService } from 'src/app/services/cart/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  @Input()
  Margin!:'1.2rem';
  cart!:CartItem;
  constructor(private cartservice:CartService,private router:Router){
    this.cartservice.getCartObservable().subscribe((cart)=>{
      this.cart=cart;
    }

    )
  }
  ngOnInit(): void {

  }
  RemoveFromCart(cartitem:Cartlist)
  {
    this.cartservice.removeFormCart(cartitem.food.id);
  }
  changeQuantity(cartitem:Cartlist,quantity:string){
    var x=parseInt(quantity);
    if (x==0)
    {
      this.cartservice.removeFormCart(cartitem.food.id);
    }
    else
    {
      this.cartservice.changeQuantity(cartitem.food.id,x);
    }

  }
  process(){
    if(this.cart.count)
    this.router.navigateByUrl("/checkout");
    else
    alert("selects");
  }
}
