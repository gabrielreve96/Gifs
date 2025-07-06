import { Component, inject  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable  } from 'rxjs';
import { toSignal} from "@angular/core/rxjs-interop"
import { GifServices } from '../../services/gifs.services';

@Component({
  selector: 'app-history-pages',
  imports: [],
  templateUrl: './history-pages.component.html',
  styleUrl: './history-pages.component.css'
})
export class HistoryPagesComponent {
// query = inject(ActivatedRoute).params.subscribe((params)=> {
 // console.log(params)
 //})

 public gifsServices =  inject(GifServices)
 
 
 
 
 query = toSignal(
   inject(ActivatedRoute).params.pipe(
     map(params => params['query'] ?? 'No encontado')
   )
 ) 

 
}


