import {Component, OnInit} from '@angular/core';
import {Classe} from "../../models/classe";
import {ClasseService} from "../services/classe.service";

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit{
  classes: Classe[] = [];

  constructor(private classeService: ClasseService) { }

  ngOnInit(): void {
    this.classes = this.classeService.getClasses();
  }

  openModal(classe: Classe) {

  }

  deleteClasse(classe: Classe) {

  }
}
