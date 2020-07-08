import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { LineComponent } from './charts/line/line.component';
import { PieComponent } from './charts/pie/pie.component';
import { BarComponent } from './charts/bar/bar.component';
import { DoughnutComponent } from './charts/doughnut/doughnut.component';
import { RadarComponent } from './charts/radar/radar.component';
import { PolarAreaComponent } from './charts/polar-area/polar-area.component';
import { BubbleComponent } from './charts/bubble/bubble.component';
import { ScatterComponent } from './charts/scatter/scatter.component';

@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    PieComponent,
    BarComponent,
    DoughnutComponent,
    RadarComponent,
    PolarAreaComponent,
    BubbleComponent,
    ScatterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
