import { Injectable } from '@angular/core';
import { Food } from 'src/app/data/food';
import { sampleTag, samplefood } from 'src/app/data/data';
import { Tag } from 'src/app/data/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return samplefood;
  }
  getAllBySearch(x:string):Food[]{
    return this.getAll().filter(Food=>Food.name.toLowerCase().includes(x.toLowerCase()));
  }
  getAllTag():Tag[]{
    return sampleTag;
  }
  getAllBYTag(x:string):Food[]{
    return x=="All"?this.getAll():this.getAll().filter(Food=>Food.tag?.includes(x));
  }
  getFoodById(x:number):Food{
    return this.getAll().find(Food=>Food.id==x)?? new Food();
  }
}

