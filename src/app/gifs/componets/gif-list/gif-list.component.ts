import { Component, ChangeDetectionStrategy, inject, input, Input } from '@angular/core';
import { GifListItemComponent } from "../gif-list-item/gif-list-item.component";
import { ServicesGifListService } from 'src/app/shared/services/ServicesGifList.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListComponent { 
 
  public data = input<Gif>()

  @Input() imgUrl: Gif[] = []; 
   
  
}
