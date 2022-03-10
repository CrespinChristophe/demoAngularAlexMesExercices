import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoBindingComponent } from './components/exo-binding/exo-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { SharedModule } from '../shared/shared.module';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { SortProduitPipe } from './pipes/filter-produit.pipe';
import { ExoParentComponent } from './components/exo-parent/exo-parent.component';
import { ExoEnfantComponent } from './components/exo-parent/exo-enfant/exo-enfant.component';
import { ExoEnfantDeuxComponent } from './components/exo-parent/exo-enfant-deux/exo-enfant-deux.component';
import { ChildTextDirective } from './directives/child-text.directive';
import { CustomDirComponent } from './components/custom-dir/custom-dir.component';
import { NavComponent } from './components/nav/nav.component';
import { CompoInputComponent } from './components/compo-input/compo-input.component';
import { FormsComponent } from './components/forms/forms.component';
import { GestionTachesComponent } from './components/gestion-taches/gestion-taches.component';
import { CreerTacheComponent } from './components/gestion-taches/creer-tache/creer-tache.component';
import { TacheItemComponent } from './components/gestion-taches/tache-item/tache-item.component';
import { PanierComponent } from './components/panier/panier.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { PanierItemComponent } from './components/panier/panier-item/panier-item.component';
import { ObjectifComponent } from './components/objectif/objectif.component';




@NgModule({
  declarations: [
    ExoBindingComponent,
    ExoComponent,
    ExoChronoComponent,
    DisplayProductsComponent,
    SortProduitPipe,
    ExoParentComponent,
    ExoEnfantComponent,
    ExoEnfantDeuxComponent,
    ChildTextDirective,
    CustomDirComponent,
    NavComponent,
    CompoInputComponent,
    FormsComponent,
    GestionTachesComponent,
    CreerTacheComponent,
    TacheItemComponent,
    PanierComponent,
    MenuComponent,
    MenuItemComponent,
    PanierItemComponent,
    ObjectifComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    SharedModule,
    ReactiveFormsModule,  ]
})
export class ExoModule { }
