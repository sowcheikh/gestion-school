// src/app/models/eleve.ts

export interface Eleve {
  id: number;
  nom: string;
  prenom: string;
  age: number;
  classeId: number; // Foreign key to relate to a class
}

