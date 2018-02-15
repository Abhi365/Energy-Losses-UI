import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './account-management/subscription/subscription.component';
import { UserMaintenanceComponent } from './account-management/user-maintenance/user-maintenance.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { ActivityLogComponent } from './report/activity-log/activity-log.component';
import { SubscriptionRenewalComponent } from './report/subscription-renewal/subscription-renewal.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubscriptionComponent, UserMaintenanceComponent, TermsOfUseComponent, ActivityLogComponent, SubscriptionRenewalComponent, AnnouncementsComponent]
})
export class AdminModule { }
