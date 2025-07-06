import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifServices } from '../../services/gifs.services';
import { GifListItemComponent } from "../../componets/gif-list-item/gif-list-item.component";
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifListItemComponent],
  templateUrl: `./search-page.component.html`,
  styleUrl: './search-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent {
  
  public servicesGif = inject(GifServices)
   
   public searchData = signal<Gif[]>([])

   onSearch(query:string){
       this.servicesGif.searchGif(query).subscribe((response)=>{
          this.searchData.set(response)
       })
   }
 }
