import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subscription, filter, map, mergeMap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent {

  constructor(private authservice: AuthService) {
    this.datawhole = new Subscription()
  }

  datasubscription!: Subscription;
  datasubscription2!: Subscription;
  // dataunsubscribe!: Subscription;

  private datawhole!: Subscription;


  ngOnInit() {

    // this.message.next('sai');

    // this.authservice.message.subscribe(message => {
    //   console.log('message: ', message);
    // })



    let data = new Observable(subscribe => {
      subscribe.next(1);
      subscribe.next(2);
      subscribe.complete();
      subscribe.next(3);
      subscribe.error('This is a error msg');
      subscribe.next(4);
      subscribe.next(5);
    });

    // let data = new Observable((subscribe: Observer<number>) => {
    //   setInterval(() => {
    //     subscribe.next(1);
    //   }, 1000000)

    //   // subscribe.next(2);
    //   // subscribe.next(3);
    //   // subscribe.next(4);
    //   // subscribe.next(5);
    // });

    // data.subscribe(res => {
    //   console.log('response: ', res);
    // }, err => {
    //   console.log('Error: ', err);
    // }, () => {
    //   console.log('Completed');
    // });

    // data.subscribe(err => {
    //   console.log('Error: ', err);
    // }, res => {
    //   console.log('response: ', res);
    // }, () => {
    //   console.log('Completed');
    // });

    // data.subscribe({
    //   next: (res) => {
    //     console.log('response', res);
    //   },
    //   error: (err) => {
    //     console.log('error', err);
    //   },
    //   complete: () => {
    //     console.log('completed');
    //   }
    // })

    // this.dataunsubscribe = data.subscribe({
    data.subscribe({
      error: (err) => {
        console.log('error', err);
      },
      next: (res) => {
        console.log('response', res);
      },
      complete: () => {
        console.log('completed');
      }
    })

    // let data = new Observable((subscribe: Observer<number>) => {
    //   subscribe.next(1);
    //   subscribe.next(2);
    //   subscribe.next(3);
    //   subscribe.next(4);
    //   subscribe.next(5);
    // });

    //rxjs operators:

    // data.pipe(filter(x => x > 2)).subscribe(res => {
    //   console.log('response :', res);
    // });
    // data.pipe(map(x => x * 2)).subscribe(res => {
    //   console.log('response :', res);
    // });

    // this.datasubscription = this.getObservables().subscribe(res => {
    //   console.log('returnresponse1: ', res);
    // })
    // this.datasubscription2 = this.getObservables1().subscribe(res => {
    //   console.log('returnresponse2: ', res);
    // })


    this.datawhole.add(this.getObservables().subscribe(res => {
      console.log('returnresponse1: ', res);
    }));
    this.datawhole.add(this.getObservables1('1').subscribe(res => {
      console.log('returnresponse2: ', res);
    }));

    // this.datawhole.add(this.getObservables().subscribe(res => {
    //   console.log('returnresponse1: ', res);
    //   this.getObservables1(res).subscribe(res2 => {
    //     console.log('response2: ', res2);
    //   })
    // }));

    //mergeMap
    this.datawhole.add(this.getObservables().pipe(mergeMap((res) => {
      console.log('response1: ', res);
      return this.getObservables1(res);
    }), mergeMap((res2) => {
      console.log('response2: ', res2);
      return this.getObservables2(res2);
    })).subscribe((res3) => {
      console.log('response3: ', res3);
    }));

  }

  getObservables(): Observable<string> {
    return new Observable(subscribe => {
      // setInterval(() => {
      subscribe.next('1');
      // }, 1000);

      // subscribe.next('2');
      // subscribe.next('3');
      // subscribe.next('4');
    })
  }

  getObservables1(id: string): Observable<string> {
    return new Observable(subscribe => {
      // setInterval(() => {
      subscribe.next('Sai');
      // }, 1000);

      // subscribe.next('2');
      // subscribe.next('3');
      // subscribe.next('4');
    })
  }

  getObservables2(id: string): Observable<string> {
    return new Observable(subscribe => {
      // setInterval(() => {
      subscribe.next('Janani');
      // }, 1000);

      // subscribe.next('2');
      // subscribe.next('3');
      // subscribe.next('4');
    })
  }

  ngOnDestroy() {
    // this.datasubscription.unsubscribe();
    // this.datasubscription2.unsubscribe();
    // this.dataunsubscribe.unsubscribe();
    this.datawhole.unsubscribe();
  }

  onSubmit() {
    this.authservice.message.next('Janani')
  }

}
