import { Component, OnDestroy, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

    @Output() onTyping = new EventEmitter<string>(); //Envia um evento para o componente pai.
    @Input() value: string = ''; //Recebe um inbound property
    debounce: Subject<string> = new Subject<string>();
    //Lettable Operator para ficar escutando keyup do component e podermos otimizar as operações deste evento keyup.


    ngOnInit(): void {
        this.debounce
            .pipe(debounceTime(300)) //Limita as operações para só chamar depois de 300ms
        .subscribe(filter => this.onTyping.emit(filter)); //Só realiza o subscribe depois de passado os 300ms do último keyup chamado. 
    }


    ngOnDestroy(): void {
        this.debounce.unsubscribe();
        //Por ser uma alocação em memória que nunca completa, caso não façamos o unsubscribe,
        //continuará alocando memória mesmo que troque de paǵina.
    }


}