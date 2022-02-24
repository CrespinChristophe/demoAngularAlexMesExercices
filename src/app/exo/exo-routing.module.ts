import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { ExoBindingComponent } from './components/exo-binding/exo-binding.component';
import { ExoComponent } from './exo.component';
import { ExoParentComponent } from './components/exo-parent/exo-parent.component';
import { CustomDirComponent } from './components/custom-dir/custom-dir.component';
import { FormsComponent } from './components/forms/forms.component';
import { GestionTachesComponent } from './components/gestion-taches/gestion-taches.component';

const routes: Routes = [
    { path: "", component: ExoComponent, children: [
        { path:"binding", component:ExoBindingComponent },
        { path:"chrono", component:ExoChronoComponent },
        { path:"products", component: DisplayProductsComponent },
        { path:"commu", component: ExoParentComponent },
        { path:"custom-dir", component: CustomDirComponent},
        { path:"forms", component: FormsComponent},
        { path:"tache", component: GestionTachesComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
