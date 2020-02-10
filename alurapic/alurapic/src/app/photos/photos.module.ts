import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
    declarations: [//Importo os componentes para ficar disponível para todo o módulo.
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent, 
        PhotosComponent], 
    imports: [
        HttpClientModule, //Retirei o modulo de Http do módulo app.module, pois só é usado por enquanto no módulo de photos
        CommonModule
    ] 
})
export class PhotosModule {

}
