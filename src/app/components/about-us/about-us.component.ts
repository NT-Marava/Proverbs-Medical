import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private request: RequestService) { }
  services: Array<any>;
  ngOnInit(): void {

    this.getServices();
  }


  getServices() {
    this.request.getServices().subscribe(
      result => {
        this.services = result;
      });
  }



}
