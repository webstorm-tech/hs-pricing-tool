import { NgModule } from '@angular/core';

/** Components **/
import { ProductsListComponent } from './products/products-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SetupComponent } from './config/setup.component';
import { SummaryComponent } from './home/summary.component';

/** Guards **/
import { ConfiguredGuard } from './shared/configured.guard';

const routes: Routes = [
    { path: 'products', component: ProductsListComponent, canActivate: [ConfiguredGuard] },
    { path: 'config/setup', component: SetupComponent },
    { path: 'home', component:SummaryComponent},
    { path: '**', component:SummaryComponent, canActivate: [ConfiguredGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
