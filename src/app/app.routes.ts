import { Routes } from '@angular/router';
import { DashboardPageComponent } from './gifs/pages/dashboard-page/dashboard-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadComponent: () => import("./gifs/pages/dashboard-page/dashboard-page.component").then((m) => m.DashboardPageComponent),
        children:[
            {
                 path:"search",
                 loadComponent:()=>import("./gifs/pages/search-page/search-page.component").then((m) => m.SearchPageComponent)
            },
            {
                 path:"trending",
                 loadComponent:()=>import("./gifs/pages/trendig-page/trendig-page.component").then((m) => m.TrendigPageComponent)
            }

        ]
    }
];
