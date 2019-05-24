import {Component, OnInit} from '@angular/core';
import {KontactService} from '../../kontact.service';

@Component({
  selector: 'app-kontact',
  templateUrl: './kontact.component.html',
  styleUrls: ['./kontact.component.css']
})
export class KontactComponent implements OnInit {

  constructor(
    private kontactService: KontactService
  ) {
  }

  ngOnInit() {
  }

  kontact() {
    this.kontactService.sendMail('andreas@sapioweb.com', 'just a test', 'I am testing')
      .subscribe(
        mail => console.log(mail),
        err => console.log(err)
      );
  }
}
