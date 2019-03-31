import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {WhiskyDetailsModel} from '../../../whisky/whisky-model';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true
    }
  ]
})
export class MultiSelectComponent implements ControlValueAccessor, OnInit {
  @Input() disable = false;
  @Input() value: number;
  @Input() selectItems: WhiskyDetailsModel[];


  onMultiChange = (_: number) => {
  }

  onMultiTouch = () => {

  }

  registerOnChange(fn: any): void {
    this.onMultiChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onMultiTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disable = !isDisabled;
  }

  writeValue(val: number): void {
    this.value = val ? val : null;

  }

  ngOnInit(): void {
    this.onMultiChange(this.value);
  }


}
