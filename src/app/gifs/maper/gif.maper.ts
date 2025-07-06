import { GiphiItem } from "../interfaces/Gif.interfaces";
import { Gif } from "../interfaces/gifs.interface";

export class GifMapper{



    static mapGiphyItemToGif(item:GiphiItem):Gif{
       return{
         id:item.id,
         title:item.title,
         url:item.images.original.url
       }
    }


    static mapGiphyItemsToGifArray(item:GiphiItem[]):Gif[]{
        return  item.map(this.mapGiphyItemToGif)
    }




}