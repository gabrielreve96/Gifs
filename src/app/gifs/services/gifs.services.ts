import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GifsResponse } from '../interfaces/Gif.interfaces';
import { Gif } from '../interfaces/gifs.interface';
import { GifMapper } from '../maper/gif.maper';
import { map, tap } from 'rxjs';


 

@Injectable({providedIn: 'root'})
export class GifServices {
  private http= inject(HttpClient)


  trendingGifd = signal<Gif[]>([])
  historySearch =  signal<Record<string , Gif[]>>({})
  searchHistoryKey =  computed(()=>Object.keys(this.historySearch()))

   constructor(){
      this.loadTrendingGifs()
   }

    loadTrendingGifs(){ 
        this.http.get<GifsResponse>( `${environment.gifiUrl}/gifs/trending`,{
            params:{
                api_key:environment.apikey_giphi,
                limit:20
            }
        } ).subscribe((response)=>   {
            const gid  = GifMapper.mapGiphyItemsToGifArray(response.data)
            this.trendingGifd.set(gid)
            console.log(gid)
        })
        
    }

 searchGif(query:string){
  
    return  this.http.get<GifsResponse>(`${environment.gifiUrl}/gifs/search?` ,{
        params:{
            api_key:environment.apikey_giphi,
            limit:20,
            q:query
        }
     }).pipe(
        map( ({data})=> data  ),
        map( (items)=> GifMapper.mapGiphyItemsToGifArray(items)  ),


        //Historial 
        tap((items) => {
          this.historySearch.update(hisotry=> ({
            ...hisotry ,[query.toLocaleLowerCase()]:items
          }))
        })
     );

 }

getHistoryGifs(query: string): Gif[] {
  return this.historySearch()[query.toLowerCase()] ?? [];
}

    
}                   