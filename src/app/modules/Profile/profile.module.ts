import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileMainComponent } from './components/profile-main/profile-main.component';

@NgModule({
  declarations: [ProfileMainComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
