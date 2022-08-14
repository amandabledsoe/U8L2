import { Component, OnInit } from '@angular/core';
import { ChirpusPizzaService, MenuItem } from '../chirpus-pizza.service';

@Component({
  selector: 'app-menu-display',
  templateUrl: './menu-display.component.html',
  styleUrls: ['./menu-display.component.css']
})
export class MenuDisplayComponent implements OnInit {
  public ourMenuItems: MenuItem[] = [];

  constructor(private myCPService: ChirpusPizzaService) {
    this.ourMenuItems = myCPService.GetMenuItems();
  }

  ngOnInit(): void {
  }

}
