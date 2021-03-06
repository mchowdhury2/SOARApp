import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { from } from 'rxjs';
import { MatCheckboxModule } from '@angular/material/checkbox'
import {Component} from '@angular/core';

const MaterialComponents = [
   MatMenuModule,
  MatCheckboxModule
]

@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
