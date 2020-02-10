import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {
  //Inbound Property, com os dados vindo do photo-list.component.html
  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  /* 
  ngOnChanges foi usado para verificar se houve alteração no Inbound Property 
  Caso fosse usado ngOnInit, não carregaria por ser assincrono.
  */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos)
      this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]): any {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }

}
