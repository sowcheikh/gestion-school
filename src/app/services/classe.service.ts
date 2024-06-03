import { Injectable } from '@angular/core';
import {Classe} from "../../models/classe";
import {Eleve} from "../../models/eleve";

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private classes: Classe[] = [
    { id: 1, nom: 'Classe A', niveau: '1ère année', eleves: [] },
    { id: 2, nom: 'Classe B', niveau: '2ème année', eleves: [] }
  ];

  private eleves: Eleve[] = [
    { id: 1, nom: 'Dupont', prenom: 'Jean', age: 7, classeId: 1 },
    { id: 2, nom: 'Durand', prenom: 'Marie', age: 8, classeId: 2 }
  ];

  constructor() {
    this.assignElevesToClasses();
  }

  private assignElevesToClasses() {
    this.classes.forEach(classe => {
      classe.eleves = this.eleves.filter(eleve => eleve.classeId === classe.id);
    });
  }

  getClasses(): Classe[] {
    return this.classes;
  }

  getEleves(): Eleve[] {
    return this.eleves;
  }

  addEleve(eleve: Eleve) {
    this.eleves.push(eleve);
    this.assignElevesToClasses();
  }

  addClasse(classe: Classe) {
    this.classes.push(classe);
    this.assignElevesToClasses();
  }
}
