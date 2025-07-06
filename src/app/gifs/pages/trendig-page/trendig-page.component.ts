import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { GifListComponent } from "../../componets/gif-list/gif-list.component";
import { GifServices } from '../../services/gifs.services';

@Component({
  selector: 'app-trendig-page',
  imports: [GifListComponent],
  templateUrl: './trendig-page.component.html',
  styleUrl: './trendig-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendigPageComponent {
   
  gifsServices = inject(GifServices)

   

 }
