import { Component, OnInit } from '@angular/core';
import { NetworkingService } from '../../networking.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private networking: NetworkingService) { }
  lista: any;

  ngOnInit() {
   this.getData();
  }

  getData(){
    this.networking.getData()
      .subscribe(data => {
        this.lista = data;
      });
  }

}
