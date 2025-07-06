import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SideMenuHeaderComponent } from "./side-menu-header/side-menu-header.component";
import { SideMenuOptionComponent } from "./side-menu-option/side-menu-option.component";
import { GifServices } from '../../services/gifs.services';

@Component({
  selector: 'app-side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
    
    public  historyGif = inject(GifServices)
    
 }
