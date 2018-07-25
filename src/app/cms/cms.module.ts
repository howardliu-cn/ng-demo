import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelComponent } from './channel/channel.component';

import { cmsRoutes } from './cms.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cmsRoutes)
  ],
  declarations: [ChannelComponent]
})
export class CmsModule { }
