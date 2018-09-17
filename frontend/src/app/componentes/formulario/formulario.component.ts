import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../servicios/post';
import { NetworkingService } from '../../networking.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  post = new Post();
  @Input()
  lista: ListComponent;

  constructor(private networking: NetworkingService) { }


  ngOnInit() {
  }

  guardar() {
    this.networking.guardar(this.post)
      .subscribe(data => {
        console.log(data);
        this.lista.getData();
      });
  }

}
