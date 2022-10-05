import { Component, Input, OnInit } from '@angular/core';

import { IItemCard } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  item!: IItemCard;
  //  = {
  //   title: 'sem titulo',
  //   description: 'sem decrição',
  //   label_button: 'sem label para o botão',
  // };

  ngOnInit(): void {
    console.log(this.item);
  }
}
