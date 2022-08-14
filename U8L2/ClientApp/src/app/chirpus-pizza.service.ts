import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChirpusPizzaService {

  constructor() { }

  public GetMenuItems(): MenuItem[] {
    return this.OurMenuItems;
}

  public OurMenuItems: MenuItem[] = [
    { ItemName: "Chicken Fingers", Category: "dinner", Price: 11.99 },
    { ItemName: "Pizza", Category: "dinner", Price: 11.99 },
    { ItemName: "Wings", Category: "side", Price: 8.99 },
    { ItemName: "Breadsticks", Category: "side", Price: 5.99 },
    { ItemName: "Caesar Salad", Category: "salad", Price: 4.99 },
    { ItemName: "Cinnamon Roll", Category: "dessert", Price: 8.99 },
  ]
}

export class MenuItem {
  public ItemName: string = "";
  public Category: string = "";
  public Price: number = 0;
}
