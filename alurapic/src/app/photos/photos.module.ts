import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
    declarations: [PhotoComponent], //Importo o componente para ficar disponível para todo o módulo.
    exports: [PhotoComponent] //Exporto o componente para disponível para outros módulos.
})
export class PhotosModule {

}
