import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { NewPageComponent } from './new-page/new-page.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'welcome/:name', component: WelcomeComponent },
  // { path: 'welcome', component: WelcomeComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'newPage', component: NewPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'todos', component: TodoListComponent},
  { path: 'logout', component: LogoutComponent},

  { path: '**', component: ErrorComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
