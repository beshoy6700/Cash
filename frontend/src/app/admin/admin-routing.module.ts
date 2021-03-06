import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AuthGuard} from "../core/guard/auth.guard";
import {Role} from "../core/models/role";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "regions",
    canActivate: [AuthGuard],
    data: {
      role: Role.Admin,
    },
    loadChildren: () =>
      import("./regions/regions.module").then((m) => m.RegionsModule),
  },
  {
    path: "employees",
    loadChildren: () =>
      import("./employees/employees.module").then((m) => m.EmployeesModule),
  },
  {
    path: "appointment",
    loadChildren: () =>
      import("./appointment/appointment.module").then(
        (m) => m.AppointmentModule
      ),
  },
  {
    path: "doctors",
    loadChildren: () =>
      import("./doctors/doctors.module").then((m) => m.DoctorsModule),
  },
  {
    path: "staff",
    loadChildren: () =>
      import("./staff/staff.module").then((m) => m.StaffModule),
  },
  {
    path: "patients",
    loadChildren: () =>
      import("./patients/patients.module").then((m) => m.PatientsModule),
  },
  {
    path: "payment",
    loadChildren: () =>
      import("./payment/payment.module").then((m) => m.PaymentModule),
  },
  {
    path: "room",
    loadChildren: () => import("./room/room.module").then((m) => m.RoomModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
