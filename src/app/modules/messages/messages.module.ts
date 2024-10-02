import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesMainComponent } from './components/messages-main/messages-main.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MessagesMainComponent],
  imports: [CommonModule, MessagesRoutingModule, HttpClientModule],
})
export class MessagesModule {}
