import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: '**', component: PageNotFoundComponent },//404頁面
];

///*https://dev.to/bytebantz/mastering-angular-17-routing-2mf2*/
