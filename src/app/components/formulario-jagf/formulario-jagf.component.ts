import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-formulario-jagf',
  templateUrl: './formulario-jagf.component.html',
  styleUrls: ['./formulario-jagf.component.css']
})
export class FormularioJagfComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>()

  categoriaSeleccionada='general';
  paisSeleccionado='mx';


  categorias :any []=[
    {value:'general',nombre: 'General'},
    {value:'business',nombre: 'Negocios'},
    {value:'entertaiment',nombre: 'Entretenimiento'},
    {value:'health',nombre: 'Salud'},
    {value:'science',nombre: 'Ciencia'},
    {value:'sports',nombre: 'Deportes'},
    {value:'technology',nombre: 'Tecnología'},
  ];
  paises :any []=[
    {value:'mx',nombre: 'México'},
    {value:'ar',nombre: 'Argentina'},
    {value:'br',nombre: 'Brasil'},
    {value:'fr',nombre: 'Francia'},
    {value:'hu',nombre: 'Hungría'},
    {value:'gb',nombre: 'Reino Unido'},
    {value:'ru', nombre: 'Rusia'},
    {value:'jp', nombre: 'Japón'},
    {value:'se', nombre: 'Suecia'},
    {value:'si', nombre: 'Slovenia'},
    {value:'id', nombre: 'Indonesia'},
    {value:'in', nombre: 'India'},
    {value:'nz', nombre: 'Nueva Zelanda'},
    {value:'gr', nombre: 'Grecia'},
    {value:'co', nombre: 'Colombia'},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    
  this.parametrosSeleccionados.emit(PARAMETROS)
  }

}
