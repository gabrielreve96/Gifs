import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuOption } from '../../../interfaces/MenuOption';
import { ICONS } from '../../../../shared/constants/icons.constants';

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
  /**
   * Opciones del menú lateral usando signals para reactividad
   */
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
    },
    {
      icon: ICONS.FAVORITES,
      label: 'Favorites',
      router: '/dashboard/favorites',
      sublabel: 'Your favorite GIFs'
    },
    {
      icon: ICONS.HISTORY,
      label: 'History',
      router: '/dashboard/history',
      sublabel: 'Recently viewed'
    }
  ]);

  /**
   * Verifica si una ruta está activa
   * @param item - El item del menú
   * @returns true si la ruta está activa
   */
  isActive(item: MenuOption): boolean {
    // Esta lógica se puede expandir según las necesidades
    return window.location.pathname.includes(item.router);
  }
}
