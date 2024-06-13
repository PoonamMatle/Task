import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { Student1Component } from './student1/student1.component';
// import { StudentDetailsComponent } from './student-details/student-details.component';
// import { StudentRegistrationComponent } from './student-registration/student-registration.component';

const routes: Routes = [

  {
        path:'student',component:StudentComponent
    },
    {
      path:'employee',component:EmployeeComponent
  },
  {
    path:'product',component:ProductComponent
},



  //{
//     path:'student1',children:[

//       {
//         path:'',component:Student1Component
//       },
//       {
//         path:'stud',component:StudentDetailsComponent
//       },
//       {
//         path:'studr',component:StudentRegistrationComponent
//       }

//     ]
//   },
// //  {
// //     path:'',redirectTo:'home',pathMatch:'full'
// //   },

//   {
//     path:'home',component:HomeComponent
//   },
//   {
//     path:'about',component:AboutComponent
//   },
//   {
//     path:'contact',component:ContactComponent
//   },
//   {
//     path:'**',component:PageNotFoundComponent
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
