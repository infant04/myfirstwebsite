import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/data/cart/cart';
import { Cartlist } from 'src/app/data/cart/cartitem';
import { Food } from 'src/app/data/food';
import{ BehaviorSubject,Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:CartItem=this.getCartToLocalStorage();
private cartSubject:BehaviorSubject<CartItem>=new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(food:Food):void{
    var cartitem=this.cart.items.find(item=>item.food.id === food.id);
    if(cartitem)
    {
      return;
    }
    this.cart.items.push(new Cartlist(food));
    this.setCartToLocalStorage();
  }
  removeFormCart(foodid:number):void{
    this.cart.items=this.cart.items.filter(item=>item.food.id!=foodid);
    this.setCartToLocalStorage();
  }
  changeQuantity(foodid:number,quantity:number){
    var cartitem=this.cart.items.find(item=>item.food.id==foodid);
    if(!cartitem)
    {return;}
    cartitem.quantity=quantity;
    cartitem.Price=quantity*cartitem.food.price;
    this.setCartToLocalStorage();
  }
  clearCart(){
    this.cart=new CartItem();
    this.setCartToLocalStorage();
  }
  getCartObservable():Observable<CartItem>{
    return this.cartSubject.asObservable()
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice=this.cart.items.reduce((prevSum,currentItem)=>prevSum+currentItem.Price,0);
    this.cart.count=this.cart.items.reduce((prevSum,currentCount)=>prevSum+currentCount.quantity,0);
    const cartJson=JSON.stringify(this.cart);
    console.log(cartJson);
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartToLocalStorage():CartItem{
    const cartJson=localStorage.getItem('Cart');
    if(cartJson)
    {
      return JSON.parse(cartJson);
    }
    else
    {
      return new CartItem();
    }

  }
}

