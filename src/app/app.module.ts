import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { MathComponent } from './math/math.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { ModelCompComponent } from './model-comp/model-comp.component';
import { FormsModule } from '@angular/forms';
import { Home1Component } from './home1/home1.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Student1Component } from './student1/student1.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AcompComponent } from './acomp/acomp.component';
import { ProductComponent } from './product/product.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { PowerPipe } from './power.pipe';
import { GenPipePipe } from './gen-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StudentComponent,
    CourseComponent,
    MathComponent,
    HelpComponent,
    LoginComponent,
    EmployeeComponent,
    ModelCompComponent,
    Home1Component,
    ContactComponent,
    PageNotFoundComponent,
    Student1Component,
    StudentDetailsComponent,
    StudentRegistrationComponent,
    AcompComponent,
    ProductComponent,
    PipeExampleComponent,
    PowerPipe,
    GenPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
