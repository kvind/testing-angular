import { Component, OnInit, ElementRef } from '@angular/core';
import { Store, Actions, Select, ofActionSuccessful } from '@ngxs/store';
import { JsonPlaceHolderRequest } from './store/app.action';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { JsonState } from './store/app.state';
import { Observable, of, merge, from, concat, forkJoin, Subject, interval } from 'rxjs';
import { delay, concatMap, tap, concatAll, map, startWith, takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Navigate, RouterDataResolved } from '@ngxs/router-plugin';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  myTitle = 'hello';

  display = false;

  specialForm: FormGroup;

  nbInput = [1, 2, 3, 4, 5];

  period = new FormControl('');

  @Select(JsonState.error) error$: Observable<Error>;
  @Select(JsonState.data) data$: Observable<any>;

  test$ = interval(2000).pipe(
    startWith('valeur numéro 0'),
    map(value => `Valeur numéro ${value}`)
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private fb: FormBuilder
  ) {
    actions$.pipe(
      ofActionSuccessful(RouterDataResolved),
    ).subscribe((action: RouterDataResolved) => {
      console.warn(action.routerState);
    });
  }


  ngOnInit() {
    // this.actions$.pipe(ofActionSuccessful(JsonPlaceHolderSuccess)).subscribe(() => console.log('action dispatched success'));
    // this.store.dispatch(new JsonPlaceHolderRequest());
    this.error$.subscribe(() => console.log('neww error'));
    this.data$.subscribe(() => console.log('new dataaa'));
    this.specialForm = this.fb.group({
      name: '',
      firstName: '',
      password: ''
    });

    const obs1$ = of('bonjour mister').pipe(delay(1000));
    const obs2$ = of('kevin').pipe(delay(2000));
    const obs3$ = of('comment ça va').pipe(delay(1000));
    const obs4$ = of('moi très bien').pipe(delay(1000));

    from([obs1$, obs2$, obs3$, obs4$])
      .pipe(
        concatMap(res => res),
        tap(() => console.log('finish!!!'))
      ).subscribe(() => console.log('here we are'));
    concat(obs4$, obs1$, obs3$).pipe(
      tap((resp) => console.log('try with concat', resp))
    ).subscribe(() => console.log('hello sir'));
    // emit 'Hello'
    // const source = of('Hello');
    // // map to inner observable and flatten
    // const example = source.pipe(mergeMap(val => of(`${val} World!`)));
    // // output: 'Hello World!'
    // const subscribe = example.subscribe(val => console.log(val));
    of(obs1$, obs2$, obs3$).pipe(concatAll()).subscribe(() => console.log('on concat all'));
  }

  showElement() {
    console.log(this.period.value);
  }

  onSubmit() {
    console.log('hello mister');
  }

  compile(value: any) {
    console.log('excute function', value);
  }

  openPdf() {
    // const docDefinition = {
    //   content: [
    //     {
    //       layout: 'lightHorizontalLines', // optional
    //       table: {
    //         // headers are automatically repeated if the table spans over multiple pages
    //         // you can declare how many rows should be treated as headers
    //         headerRows: 1,
    //         widths: ['*', 'auto', 100, '*'],

    //         body: [
    //           ['First', 'Second', 'Third', 'The last one'],
    //           ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
    //           [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4']
    //         ]
    //       }
    //     }
    //   ]
    // };

    const docDefinition = {
      content: [
        { text: 'This is a header', style: 'header' },
        'No styling here, this is a standard paragraph',
        { text: 'Another text', style: 'anotherStyle' },
        { text: 'Multiple styles applied', style: ['header', 'anotherStyle'] }
      ],

      styles: {
        header: {
          fontSize: 22,
          bold: true
        },
        anotherStyle: {
          italics: true,
          alignment: 'right'
        }
      }
    };
    pdfMake.createPdf(docDefinition).open();
  }

  getPosts(url: string) {
    this.store.dispatch(new JsonPlaceHolderRequest(url));
  }

  navigate(url: string) {
    this.store.dispatch(new Navigate([url]));
  }

  launchTest() {
    // this.test$.next(Date.now().toString());
  }

}
