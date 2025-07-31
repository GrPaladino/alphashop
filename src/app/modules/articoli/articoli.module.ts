import { ArticoliCardComponent } from './components/articoli-card/articoli-card.component';
import { ArticoliComponent } from './pages/articoli/articoli.component';
import { ColorChangeDirective } from 'src/app/shared/directives/color-change.directive';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ArticoliComponent,
    GridArticoliComponent,
    ArticoliCardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    SharedModule
  ]
})
export class ArticoliModule { }
