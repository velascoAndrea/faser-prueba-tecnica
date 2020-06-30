import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Tarea } from './tarea';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	tareas: Tarea[];
	mensajeError: string;
	color :"black"
	constructor(
        public service: AppService,
	) { 

	}
	
	ngOnInit() {
		this.obtenerTareas();
	}

	async obtenerTareas() {
		this.tareas = await this.service.obtenerTareas();
	}

	async crearTarea(identi:number,titulo: string,time:number){
		this.mensajeError = '';

		if(identi===undefined || titulo==="" || time === undefined){
			this.mensajeError = 'No se llenaron todos los campos';
			return;
		}

		for (let i in this.tareas) {
			if(identi === this.tareas[i].id || identi.toString() === this.tareas[i].id.toString()){
				this.mensajeError = 'Este Id ya fue agregado,intente con uno nuevoi'
				return;
			}
		}
		//Comprueba que exista el ID anted de agregarlo luego se envia por parametro los datos para guardar 
		
		this.tareas = await this.service.CrearTarea(identi,titulo,time);
	}

	Borrar(identi:number){
		var i;
		//Compronar el id del parametro para encontrarlo y borrar
		for (i = 0; i < this.tareas.length; i++) {
			if(identi === this.tareas[i].id || identi.toString() === this.tareas[i].id.toString()){
				this.tareas.splice(i,1);
				this.service.Borrar(this.tareas);
				return;
			}
		}
		
	}

	Ordenar(){
		//Algoritmo De Ordenamiento Burbuja
		var n, i, k, aux;
    	n = this.tareas.length
		for (k = 1; k < n; k++) {
			for (i = 0; i < (n - k); i++) {
				if (this.tareas[i].minutos > this.tareas[i + 1].minutos) {
					aux = this.tareas[i];
					this.tareas[i] = this.tareas[i + 1];
					this.tareas[i + 1] = aux;
				}
			}
		}
	}

	
	Marcar(id:number){
		// se llama directamente a la fila, cada fila tiene un ID diferente es por eso que cambia
		var fila = document.getElementById(id.toString()).style.backgroundColor = "lightblue";;
		
	}

	DesMarcar(id:number){
		var fila = document.getElementById(id.toString()).style.backgroundColor = "white";;
		
	}




	
}
