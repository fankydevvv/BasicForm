import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, NgForm, NgModelGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  myForm: FormGroup | any;

  vietnamData = [
    // your data here
  ];
  districts: string[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
        phoneNumber: ['', Validators.required,],
        email: ['', [Validators.required, Validators.email]],
        city: ['', Validators.required],
        district: ['', Validators.required]
    });
  }

  changeCity(event: Event) {
    const selectedCity = (event.target as HTMLSelectElement).value;
    // @ts-ignore
    const selectedCityData = this.vietnamData.find(data => data.city === selectedCity);
    // @ts-ignore
    this.districts = selectedCityData ? selectedCityData.districts : [];
  }

  onSubmit() {
    // Handle form submission logic here
    console.log(this.myForm.value);
  }
  get phoneNumber() {
    return this.myForm.get('phoneNumber');
  }
  get email() {
    return this.myForm.get('email');
  }
  get city() {
    return this.myForm.get('city');
  }
  get district() {
    return this.myForm.get('district');
  }
}




