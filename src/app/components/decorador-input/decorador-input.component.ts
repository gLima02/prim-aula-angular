import { CompartilharInputComponent } from './../compartilhar-input/compartilhar-input.component';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decorador-input',
  standalone: true,
  imports: [CompartilharInputComponent, CommonModule],
  templateUrl: './decorador-input.component.html',
  styleUrl: './decorador-input.component.css'
})
export class DecoradorInputComponent {
  nome:string = "Guilherme Lima"
  frutas = ["Maçã", "banana", "abacaxi"]

  cadastro = [
    {nome: "Antonio", idade:30, email: "antonio@email.com"},
    {nome:"Maria", idade:25, email: "maria@email.com"},
    {nome: "André", idade:50, email: "adnre@email.com"}
  ];
}
