import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PasswordValidation } from './password.validation';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
  ]
})

export class FormComponent implements OnInit {

  eventForm: FormGroup;

  formData: any;

  showError = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      subscriptions: ['Advance', [Validators.required]],
      password: ['', [Validators.required]]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

  public submit() {
    this.formData = this.eventForm.value;
    if ((this.eventForm.get('password').touched || this.eventForm.get('password').dirty) && this.eventForm.get('password').errors
    || (this.eventForm.get('email').touched || this.eventForm.get('email').dirty) && this.eventForm.get('email').errors) {
      this.showError = true;
    } else {
      this.dataService.setData(this.formData);
      this.router.navigate([`/message/${this.formData.email}`]);
    }
  }

  public clear() {
    if (this.eventForm.get('password').touched || this.eventForm.get('subscriptions').touched || this.eventForm.get('email').touched) {
      if (confirm('Are you sure to Discard the Changes ?')) {
        this.eventForm.reset({subscriptions: 'Advance'});
      }
    }
  }

}
