import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironamn';
    edad  : number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`
    }

    cambiarHeroe(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}