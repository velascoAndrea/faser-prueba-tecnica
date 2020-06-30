import { Injectable } from '@angular/core';
import { Tarea } from './tarea';

@Injectable()
export class AppService { 
    tareas: Tarea[] = [];
    constructor(
        
    ) { }

    public async obtenerTareas() {
        try {
            
            this.tareas.push(new Tarea(1, 'Sacar a pasear al perro', 15));
            this.tareas.push(new Tarea(2, 'Sacar la basura', 5));
            this.tareas.push(new Tarea(3, 'Cocinar la cena', 30));
            this.tareas.push(new Tarea(4, 'Lavar la ropa', 50));
            this.tareas.push(new Tarea(5, 'Regar las plantas', 20));
            return this.tareas;
        } catch (error) {
            return null;
        }
    }

    public async CrearTarea(id:number,titulo:string,minutos:number){
        this.tareas.push(new Tarea(id, titulo, minutos));
        return this.tareas;
    }

    public Borrar(tarea){
        this.tareas = tarea;
        return this.tareas;
    }
}