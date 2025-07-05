import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { GifListItemComponent } from "../gif-list-item/gif-list-item.component";
import { ServicesGifListService } from 'src/app/shared/services/ServicesGifList.service';

@Component({
  selector: 'app-gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListComponent { 
  public listImgUrl =  inject(ServicesGifListService)
  
}
