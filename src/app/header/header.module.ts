import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    MenubarModule
  ]
})
export class HeaderModule {}
