import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './layouts/unauth-layout/login/login.component';
import { UnauthLayoutComponent } from './layouts/unauth-layout/unauth-layout.component';
import { OverviewComponent } from './layouts/auth-layout/overview/overview.component';
import { authGuard } from './gaurds/auth.guard';
import { CallingComponent } from './layouts/auth-layout/calling/calling.component';

export const routes: Routes = [
    // Authenticated Layout
    {
        path: '',
        component: AuthLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                component: OverviewComponent
            },
            {
                path: 'calling',
                component: CallingComponent
            }
        ]
    },
    // Un-Authencated Layout
    {
        path: '',
        component: UnauthLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }
];
