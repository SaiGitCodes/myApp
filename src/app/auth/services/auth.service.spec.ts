import { TestBed } from '@angular/core/testing';
import { HttprouteService } from './httproute.service';
import { AuthService } from './auth.service';
import { of, throwError } from 'rxjs';

let msg = {
  FIELD_REQUIRED: "This field is required"
}
let res = {
  token: "U2FsdGVkX1+aTEtuhy7Cvghc6npGdvkOtvmnmamXXmUf9Y8nUkBa0RqQ23ei2qdUvkWgWFEHyMasC0xDyExPu/i+YCdAPfPL33geoktTb3vBu3ZffDNj+WdFPHO+lqN3wyWGY8VnP9eI0/XE1xC7qddo/Tr+zzzgZJiKSoyqkrrR7Ef0HgjnE/S+lYcmlcGw/6hOm0x1f8FDyMx2wID6TjS/Ph0YLDd0l7vvExGauxqHYGVUShXdgImO5cM+vnewsXHeVyL7GGsXqpoMuuf15bRPSOHBFv8f8meO++KKj3I=",
  refreshToken: "enYVmwWpC4Ag1YjWgTUwZPFYTZc3e5JTj80lWLHhUXFsZLZd21mfIVKdnVPckFBotDO1TV9z3DUSFTznbrtRAASILrfdVAWyVhQUdqvJNRAzpHsNTLwjaYv8SAJpT8pnqME5eIww6Wdg2YZFBHaYsrqkY43wNB40LY94jxqc3hXzVkijCrHi0hpdDjgjusKPVs1MCECtfECjwwHLXfMBWxUqu11w0Y7Kn2RzLojMaanAzqd59CzyWuHu8ooId0We",
  user: { "id": 11, "roleId": 15, "designationId": 2, "firstName": "Sai", "lastName": "Janani", "email": "sai@gmail.com", "alternateEmail": "saijananitm@gmail.com", "dateOfBirth": "2023-05-10T18:30:00.000Z", "dateOfJoin": "2023-05-25T18:30:00.000Z", "created": "2023-05-13T03:43:17.000Z", "modified": "2023-05-13T03:43:17.000Z" }
};

// let ctoken = "U2FsdGVkX1+bLR+mUz/D6IwkbP38/zrM3YjCmrOizgZJBcwDyQAJBLwns9cO4dfn3LL0Zfc2sYi5pCeVt+unZoWa3k6OWwy3GGY9zmRCIHb6YJlifKdayCdsqNcEf3PqGKaDrN715YsrSbUeiQnJY6nJgVYteZlttOLfJi4exxOg7tBw2Q4TsQVqSq79z7cLWHE2k3k8LGRSJf41MabjFRhfPsKXmS8isWDr0WDnJuM/R7cMJpk5sOKYlmpMXFz3I7bbvg+2GxFzFpTvem1FT9io3tmJOZg8X+otPUcB8os=";
let aa = true;
class MockHttprouteService {
  getjsonData() {
    return of(msg);
  }
  postMethod() {
    if (aa) {
      return of(res);
    }
    else {
      return throwError({ error: { error: 'test' } });
    }
  }

}

fdescribe('AuthService', () => {
  let service: AuthService;
  let http: HttprouteService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttprouteService, useClass: MockHttprouteService }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('call for getMessage', () => {
    service.getMessage();
    expect(service.getMessage).toBeDefined();
  });

  test('should call forsignIn', () => {
    aa = true;
    const data = { email: 'sai@gmail.com', password: '12345' }
    service.signIn(data).subscribe(res => {
      expect(res).toBeDefined();
    });
  });

  test('should signIn', () => {
    aa = false;
    const data = { email: 'sai@gmail.com', password: '12345' }
    service.signIn(data).subscribe(res => {
    }, (err) => {
      expect(err).toBeDefined();
    });
  });

  test('call for getToken', () => {
    aa = true;
    const data = { email: 'sai@gmail.com', password: '12345' }
    service.signIn(data).subscribe(res => {
      expect(res).toBeDefined();
    });
    // sessionStorage.setItem('currentUserToken', JSON.stringify({ token: "shayucnuahnscasuhndcuwahduwd/wq45325436", refreshToken: "21423saDAF/FWER3ETE/SDFDSVDSVDS" }))
    service.getToken();
    // sessionStorage.removeItem('currentUserToken');
    // service.getToken();
    expect(service.getToken).toBeDefined();
  });

  test('call for getRefreshToken set', () => {
    aa = true;
    const data = { email: 'sai@gmail.com', password: '12345' }
    service.signIn(data).subscribe(res => {
      expect(res).toBeDefined();
    });
    // service.getToken();
    // sessionStorage.setItem('currentUserToken', JSON.stringify({ token: "shayucnuahnscasuhndcuwahduwd/wq45325436", refreshToken: "21423saDAF/FWER3ETE/SDFDSVDSVDS" }))
    service.getRefreshToken();
    sessionStorage.removeItem('currentUserToken');
    service.getRefreshToken();
    expect(service.getRefreshToken).toBeDefined();
  });

  test('call for isAuthenticated set', () => {
    sessionStorage.setItem('currentUserToken', JSON.stringify({ token: "shayucnuahnscasuhndcuwahduwd/wq45325436", refreshToken: "21423saDAF/FWER3ETE/SDFDSVDSVDS" }))
    service.isAuthenticated();
    sessionStorage.removeItem('currentUserToken');
    service.isAuthenticated();
    expect(service.isAuthenticated).toBeDefined();
  });


  test('call for onLogout', () => {
    service.onLogout();
    expect(service.onLogout).toBeDefined();
  });



});
