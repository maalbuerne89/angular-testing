import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { fakeApiData } from './rest-api.json';
import { INoticia } from './noticias.model';

const api = 'https://www3.labanca.com.uy/noticias';

export interface ITitle {
  title: string;
  subtitle: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  headers = new HttpHeaders;
  title$: BehaviorSubject<ITitle> = new BehaviorSubject<ITitle>({
    title: 'ARCHIVO DE NOTICIAS',
    subtitle: 'INSTITUCIONAL'
  });

  constructor(
    private _http: HttpClient
  ) { 
    // this.headers.append('Content-Type', 'application/json');    
    // this._http.request('GET', api, { headers: this.headers, responseType: 'json' }).subscribe((values:any) => {
    //   values.forEach((noticia:any) => {
    //     sessionStorage.setItem(noticia.id.toString(), JSON.stringify(noticia));
    //   });
    // });

    // this.getNoticiasFromApi().subscribe((values:any) => {
    //   values.forEach((noticia:any) => {
    //     sessionStorage.setItem(noticia.id.toString(), JSON.stringify(noticia));
    //   });
    // });

    fakeApiData.noticias.forEach(noticia => {
      sessionStorage.setItem(noticia.id.toString(), JSON.stringify(noticia));
    });
  }

  getNoticiasFromApi(){
    console.log('entro');
    this.headers.append('Content-Type', 'application/json');    
    return this._http.get(api, { headers: this.headers, responseType: 'json' });
  }

  getNoticias(){
    // return this._http.request('GET', api, { headers: this.headers, responseType: 'json' });
    const noticias: any[] = [];
    for(let i = 0; i < sessionStorage.length; i++){
      const key = sessionStorage.key(i);
      if(key){
        const value = sessionStorage.getItem(key);
        if(value){
          const noticia = JSON.parse(value);
          noticias.push(noticia)
        }
      }
    }
    
    return of(noticias);
  }

  getNoticiaById(id = 0){
    console.log('id: ', id);

    // fakeApiData.noticias.forEach(x => {
    //   console.log(x);
    //   if(x.id == id){
    //     console.log('alegriaaaaaaaaaaaa');
    //   }
    // })

    // const noticia = fakeApiData.noticias.find(noticia => noticia.id == id);
    const noticia = sessionStorage.getItem(id.toString());
    if(noticia)
      return of(JSON.parse(noticia));

    return of(null);
  }

  addNoticia(noticia: INoticia){
    sessionStorage.setItem(noticia.id.toString(), JSON.stringify(noticia));
  }

  setNoticia(noticia: INoticia){
    sessionStorage.setItem(noticia.id.toString(), JSON.stringify(noticia));
  }
  
  removeNoticia(id = 0){
    sessionStorage.removeItem(id.toString());
  }


  setTitle(title: ITitle){
    this.title$.next(title);
  }

  get getTitleObservable(): Observable<ITitle> {
    return this.title$.asObservable();
  }
}
