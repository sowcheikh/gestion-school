// src/app/models/classe.ts

import { Eleve } from './eleve';

export interface Classe {
  id: number;
  nom: string;
  niveau: string;
  eleves?: Eleve[]; // List of students belonging to this class
}

