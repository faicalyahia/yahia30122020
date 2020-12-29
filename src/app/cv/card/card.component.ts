import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { EmbaucheService } from './../services/embauche.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(
    private embaucheService: EmbaucheService
  ) {}

  ngOnInit(): void {}
  embaucher() {
    if (! this.embaucheService.embaucher(this.personne)) {
      alert(`
        ${this.personne.name} est déjà sélectionnée
      `);
    }
  }
}
