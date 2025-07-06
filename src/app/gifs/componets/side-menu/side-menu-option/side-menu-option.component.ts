import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuOption } from '../../../interfaces/MenuOption';
import { ICONS } from '../../../../shared/constants/icons.constants';
import { GifServices } from 'src/app/gifs/services/gifs.services';

@Component({
  selector: 'app-side-menu-option',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu-option.component.html',
  styleUrl: './side-menu-option.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptionComponent { 
 



  public readonly menuOptions = signal<MenuOption[]>([
    {
      icon: ICONS.TRENDING,
      label: 'Trending',
      router: '/dashboard/trending',
      sublabel: 'Trending GIFs'
    },
    {
      icon: ICONS.SEARCH,
      label: 'Search',
      router: '/dashboard/search',
      sublabel: 'Search GIFs'
    }
  ]);


   public  historyGif = inject(GifServices)
    


  isActive(item: MenuOption): boolean {
    // Esta lógica se puede expandir según las necesidades
    return window.location.pathname.includes(item.router);
  }
}
