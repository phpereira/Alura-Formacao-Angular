import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [PhotoComponent], //Importo o componente para ficar disponível para todo o módulo.
    exports: [PhotoComponent], //Exporto o componente para disponível para outros módulos.
    imports: [HttpClientModule] //Retirei o modulo de Http do módulo app.module, pois só é usado por enquanto no módulo de photos
})
export class PhotosModule {

}
