import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SideMenuComponent } from "../../componets/side-menu/side-menu.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
