import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/layout/header/header.component";
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../../components/layout/sidebar/sidebar.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [HeaderComponent, RouterModule, SidebarComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
