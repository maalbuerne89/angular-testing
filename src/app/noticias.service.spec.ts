import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoticiasService } from './noticias.service';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { fakeApiData } from './rest-api.json';
import { of } from 'rxjs';

describe('NoticiasService', () => {
  let service: NoticiasService;
  // let httpMock: HttpTestingController;
  // let httpClient: HttpClient;
  let httpClientSpy: { get: jasmine.Spy }; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
      ],
      providers: [NoticiasService]
    });
    // service = TestBed.inject(NoticiasService);
    // httpMock = TestBed.get(HttpTestingController);
    // httpClient = TestBed.inject(HttpClient);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new NoticiasService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar las noticias', (done: DoneFn) => {
    const mockResultGet = fakeApiData.noticias;

    console.log('value mock', mockResultGet);

    httpClientSpy.get.and.returnValue(of(mockResultGet));

    service.getNoticiasFromApi().subscribe(noticias => { // TODO: No se sabe el tiempo de delay.
      console.log('fasdf', noticias);
      expect(noticias).toEqual(mockResultGet);
      done();
    });
  });
});
