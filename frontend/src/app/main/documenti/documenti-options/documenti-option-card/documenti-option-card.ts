import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-documenti-option-card',
  imports: [NgClass, RouterLink],
  templateUrl: './documenti-option-card.html',
  styleUrl: './documenti-option-card.css',
})
export class DocumentiOptionCard {
    private _option: any;

    @Input() set option(value: any) {
        this._option = value;
    }

    get option(): any {
        return this._option;
    }
}
