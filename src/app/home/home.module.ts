import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EmailsComponent } from '@app/emails/emails/emails.component';
import { ContactsComponent } from '@app/contacts/contacts/contacts.component';
import { AddContactComponent } from '@app/contacts/add-contact/add-contact.component';
import { AddEmailComponent } from '@app/emails/add-email/add-email.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateContactComponent } from '@app/contacts/update-contact/update-contact.component';
import { UpdateEmailComponent } from '@app/emails/update-email/update-email.component';
import { ShellModule } from '@app/shell/shell.module';

const appRoutes: Routes = [
  { path: 'add-email', component: AddEmailComponent },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'update-contact', component: UpdateContactComponent },
  { path: 'update-email', component: UpdateEmailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ShellModule,
    TranslateModule,
    SharedModule,
    HomeRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    HomeComponent,
    EmailsComponent,
    ContactsComponent,
    AddContactComponent,
    AddEmailComponent,
    UpdateContactComponent,
    UpdateEmailComponent,
  ],
  exports: [EmailsComponent, ContactsComponent, AddContactComponent, AddEmailComponent],
})
export class HomeModule {}
