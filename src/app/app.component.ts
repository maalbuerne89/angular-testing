import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { NoticiasService } from './noticias.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit{
  title = 'ARCHIVO DE NOTICIAS';
  subtitle = 'INSTITUCIONAL';
  home = true;

  constructor(
    private noticiasService: NoticiasService,
    private router: Router
  ){
  }  

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      console.log(event.routerEvent?.url);
      this.home = event.routerEvent?.url === '/noticias';
    });
  }

  ngAfterContentInit(): void {
  }

  ngAfterViewInit(){
    this.noticiasService.getTitleObservable.subscribe(titleObj => {
      console.log('titulos', titleObj);
      setTimeout(() => {
        this.title = titleObj.title;
        this.subtitle = titleObj.subtitle;
      }, 50);
    })
  }
}
