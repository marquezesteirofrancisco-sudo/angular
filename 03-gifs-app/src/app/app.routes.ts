import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path : 'dashboard',
        loadComponent: () => import ('./gifs/pages/dashboard-pages/dashboard-pages'),
    },


    {
        path : 'trending',
        loadComponent: () => import ('./gifs/pages/trending-page/trending-page'),
    },

    {
        path : 'search',
        loadComponent: () => import ('./gifs/pages/search-page/search-page'),
    },


    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
