import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
  styleUrl: './gif-list-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListItemComponent {
   @Input() gifImg : Gif[]=[]
   
  
    
 }
