import { Component, OnInit } from '@angular/core';
import * as formFields from '../assets/formFields.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Building-Dynamic-Forms';
  datas = formFields;

  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.httpService.get('../assets/formFields.json').subscribe((res: any) => {
      // console.log(res.data);
    });
  }
}
