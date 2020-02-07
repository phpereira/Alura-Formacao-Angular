import { Component, Input } from '@angular/core';


@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    /* 
    Inbound properties, ele recebe um valor através de sua forma declarativa do componente.
    Ou seja, no app.component envia os valores declarados, e este componente envia para o photo.component.html via binding. 
    */
    @Input() description = '';
    @Input() url = '';
    /* Caso houvesse valores declarados, seria enviado diretamente para o photo.component.html via data binding */

}