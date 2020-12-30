import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(
        1,
        'sellaouti',
        'aymen',
        'teacher',
        '',
        38,
        2145
      ),
      new Personne(
        2,
        'Bouzid',
        'Badreddine',
        'Analyste',
        'rotating_card_profile2.png',
        41,
        7524
      ),
      new Personne(
        3,
        'Bouzid',
        'Badreddine',
        'Analyste',
        '                ',
        41,
        7524
      ),
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }

  findPersonneById(id: number): Personne {
    return this.personnes.find(
      (personne) => personne.id === id
    );
  }

  deletePersonne(personne: Personne): boolean {
    const index = this.personnes.indexOf(personne);
    if (index === -1) {
      return false;
    } else {
      this.personnes.splice(index, 1);
      return true;
    }
  }
}
