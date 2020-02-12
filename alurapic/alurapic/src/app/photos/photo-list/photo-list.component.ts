import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  //Lettable Operator para ficar escutando keyup do component e podermos otimizar as operações deste evento keyup.

  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PhotoService) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce
      .pipe(debounceTime(300)) //Limita as operações para só chamar depois de 300ms
      .subscribe(filter => this.filter = filter) //Só realiza o subscribe depois de passado os 300ms do último keyup chamado.
  }

  load() {
    this.service
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if(!photos.length) this.hasMore = false;
      })
  }


  ngOnDestroy(): void {
    this.debounce.unsubscribe();
    //Por ser uma alocação em memória que nunca completa, caso não façamos o unsubscribe,
    //continuará alocando memória mesmo que troque de paǵina.
  }


}
