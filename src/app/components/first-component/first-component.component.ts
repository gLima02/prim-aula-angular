import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
nome:string = "Guilherme"
idade:number = 19
trabalho:string = "Analista"
hobbies = ["Futebol", "Academia"]
carro = {marca: "Honda", modelo: "Civic"}
}
