import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CyberDefenseRoutingModule } from './cyber-defense-routing.module';
import { MapComponent } from './pages/map/map.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    CyberDefenseRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class CyberDefenseModule { }
