import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormField } from '../Constant/form-fields';

@Injectable({
  providedIn: 'root',
})
export class DynamicformJsonService {
  constructor(private http: HttpClient) {}

  getFormFields(): Observable<FormField> {
    return this.http.get<FormField>('../../assets/formFields.json');
  }

  getCoutntry() {
    return this.http.get(' http://192.168.100.89:4002/api/country');
  }
}
