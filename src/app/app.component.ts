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
	
	constructor(
        public service: AppService,
	) { }
	
	ngOnInit() {
		this.obtenerTareas();
	}

	async obtenerTareas() {
		this.tareas = await this.service.obtenerTareas();
	}

	async crearTarea(identi:number,titulo: string,time:number){
		this.mensajeError = '';
		for (let i in this.tareas) {
			if(identi === this.tareas[i].id){
				this.mensajeError = 'Este Id ya fue agregado,intente con uno nuevo'
				return;
			}
		}
		
		this.tareas = await this.service.CrearTarea(identi,titulo,time);
		//console.log(titulo);
	}
}
