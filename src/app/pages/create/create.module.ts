import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { LoadingController, AlertController } from '@ionic/angular';
//import { FirestoreService } from '../../services/data/firestore.service';

import { IonicModule } from '@ionic/angular';

import { CreatePage } from './create.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [CreatePage]
})
export class CreatePageModule {}
