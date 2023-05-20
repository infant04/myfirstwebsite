import { Component,OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartquenty=0;
  constructor(private cartservice:CartService){
  this.cartservice.getCartObservable().subscribe((newCart)=>{
    this.cartquenty=newCart.count;
  })
  }
ngOnInit(): void {

}
}
