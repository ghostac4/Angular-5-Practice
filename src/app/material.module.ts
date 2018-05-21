import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule,MatCardModule,MatExpansionModule,MatListModule,MatSelectModule} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule,MatCardModule,MatExpansionModule,MatListModule,MatSelectModule],
  exports:[MatToolbarModule,MatCardModule,MatExpansionModule,MatListModule,MatSelectModule]
})
export class MaterialModule { }
