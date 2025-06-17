import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResumeFormatComponent } from './resume-format/resume-format.component';
import { ResumeTemplateComponent } from './resume-format/resume-template/resume-template.component';
export const routes: Routes = [
    {path:'', component: LandingPageComponent},
    {path:'resume', component: ResumeFormatComponent},
    {path: 'resume-template', component: ResumeTemplateComponent},
    {path: '**', component: PageNotFoundComponent}
];
