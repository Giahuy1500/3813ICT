import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { GroupComponent } from './component/group/group.component';
import { AddMemberModalComponent } from './component/modal/add-member-modal/add-member-modal.component';
export const routes: Routes = [
    {path: '', redirectTo:'/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {
        path: 'sidebar', 
        component:SidebarComponent,
        children: [
            { 
                path: 'group',
                loadComponent: ()=> import('./component/group/group.component').then(m=>m.GroupComponent)
            },
            {
                path: 'user-management',
                loadComponent: ()=> import('./component/user-management/user-management.component').then(m=>m.UserManagementComponent),
                children: [
                    {
                        path: '',
                        component:  AddMemberModalComponent
                    }

                ]
            },
            {
                path: 'group-management',
                loadComponent: ()=> import('./component/group-management/group-management.component').then(m=>m.GroupManagementComponent)
            }
        ]
    },
    
];
