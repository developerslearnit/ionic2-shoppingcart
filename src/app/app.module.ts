import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductService } from '../providers/product-service';
import { ShrinkHeader } from '../components/shrink-header/shrink-header';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShrinkHeader
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  ProductService]
})
export class AppModule {}
