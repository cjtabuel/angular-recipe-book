import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// impported components
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'home', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
// tslint:disable-next-line: semicolon
export const routingComponents = [
    RecipesComponent,
    ShoppingListComponent,
    HomeComponent
]
