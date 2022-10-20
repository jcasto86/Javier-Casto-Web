import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent } from './components/photo/photo.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
  { path: 'photo', component: PhotoComponent },
  { path: 'video', component: VideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
