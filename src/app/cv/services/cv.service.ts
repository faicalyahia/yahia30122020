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
}
