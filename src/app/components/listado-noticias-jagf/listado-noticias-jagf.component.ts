import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-listado-noticias-jagf',
  templateUrl: './listado-noticias-jagf.component.html',
  styleUrls: ['./listado-noticias-jagf.component.css']
})
export class ListadoNoticiasJagfComponent implements OnInit {
  @Input() listNoticias: any;
  constructor() { }

  ngOnInit(): void {
  }

}
