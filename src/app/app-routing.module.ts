import { NgModule } from '@angular/core';
import { FadeComponent } from './fade/fade.component';
import { SlideComponent } from './slide/slide.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ParallaxComponent
  },
  {
    path: 'parallax',
    component: ParallaxComponent
  },
  {
    path: 'slide',
    component: SlideComponent
  },
  {
    path: 'fade',
    component: FadeComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
