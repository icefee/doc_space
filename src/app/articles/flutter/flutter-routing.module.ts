import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScaffoldMessageMaterialBannerComponent } from './scaffold-message-material-banner/scaffold-message-material-banner.component';

const routes: Routes = [
  {
    path: 'scaffold_message_material_banner',
    component: ScaffoldMessageMaterialBannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactRoutingModule {}
