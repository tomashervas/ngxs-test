import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosPageComponent } from './todos-page/todos-page.component';
import { FormsModule } from '@angular/forms';
import { TodosRoutingModule } from './todos-routing.module';



@NgModule({
  declarations: [
    TodosPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
