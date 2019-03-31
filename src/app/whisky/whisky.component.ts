import {Component, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {WhiskyDetailsModel} from './whisky-model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {map, takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-whisky',
  templateUrl: './whisky.component.html',
  styleUrls: ['./whisky.component.scss']
})
export class WhiskyComponent implements OnInit, OnDestroy {
  whiskyForm: FormGroup;
  destroy$ = new Subject();
  iD: number;
  iDs: number[] = [];

  whiskys: WhiskyDetailsModel[] =
    [{'id': 1, 'name': 'Jack Daniels'},
      {'id': 2, 'name': 'Jameson'},
      {'id': 3, 'name': 'Teeling '},
      {'id': 4, 'name': 'Tachers'},
      {'id': 5, 'name': 'Locke'},
      {'id': 6, 'name': 'Glenfiddich'},
      {'id': 7, 'name': 'Redbreast'},
      {'id': 8, 'name': 'Bushmills'}]
  ;

  constructor(private formBuild: FormBuilder) {
  }

  ngOnInit(): void {
    this.whiskyForm = this.formBuild.group({
      whisky: 3
    });

    this.whiskyForm.get('whisky').valueChanges.pipe(
      map((data) => this.iD = data),
      map(() => this.iDs.push(this.iD)),
      tap(() => console.log(this.iDs)),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}


