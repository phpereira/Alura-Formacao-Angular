import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        PhotoComponent
    ],
    imports: [ 
        CommonModule,
        HttpClientModule //Retirei o modulo de Http do módulo app.module, pois só é usado por enquanto no módulo de photos
    ],
    exports: [
        PhotoComponent
    ]
})
export class PhotoModule {

}