import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  @Output() forwardSelectedPersonne = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
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
  forwardPersonne(personne: Personne) {
    this.forwardSelectedPersonne.emit(personne);
  }
}
