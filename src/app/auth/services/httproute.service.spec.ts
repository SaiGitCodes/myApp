import { TestBed } from '@angular/core/testing';

import { HttprouteService } from './httproute.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

class MockHttpClient {
  get() {

  }
  post() {

  }
}

fdescribe('HttprouteService', () => {
  let service: HttprouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: MockHttpClient }
      ],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(HttprouteService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('getMethod', () => {
    const url = 'sdfghj';
    service.getMethod(url);
    expect(service.getMethod).toBeDefined();
  })

  test('postMethod', () => {
    const url = 'https://abc.com';
    const data = 'dfghj'
    service.postMethod(url, data);
    expect(service.postMethod).toBeDefined();
  })

  test('getjsonData', () => {
    const url = 'https://abc.com';
    service.getjsonData(url);
    expect(service.getjsonData).toBeDefined();
  })
});
