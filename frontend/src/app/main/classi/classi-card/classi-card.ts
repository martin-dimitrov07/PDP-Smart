import { Component, Input } from '@angular/core';
import { Classe } from '../../../models/classe';

@Component({
  selector: 'app-classi-card',
  imports: [],
  templateUrl: './classi-card.html',
  styleUrl: './classi-card.css',
})
export class ClassiCard {
    @Input() classe: Classe = {} as Classe;
}
