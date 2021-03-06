import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeService} from './shared/employee.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule} from "@angular/fire/firestore";
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
