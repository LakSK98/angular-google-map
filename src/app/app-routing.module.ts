import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationGoogleComponent } from './location-google/location-google.component';

const routes: Routes = [{
  path: 'location',
  component: LocationGoogleComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
