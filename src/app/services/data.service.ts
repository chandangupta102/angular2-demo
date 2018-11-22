import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class DataService {
    private formData: object;
    constructor() {
        this.formData = {
            email: '',
            subscripstion: '',
            password: ''
        };
    }

    setData(formData: object) {
      this.formData = formData;
    }

    getData() {
        return this.formData;
    }
}
