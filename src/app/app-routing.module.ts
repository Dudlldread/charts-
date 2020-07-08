import { ScatterComponent } from './charts/scatter/scatter.component';
import { BubbleComponent } from './charts/bubble/bubble.component';
import { PolarAreaComponent } from './charts/polar-area/polar-area.component';
import { RadarComponent } from './charts/radar/radar.component';
import { DoughnutComponent } from './charts/doughnut/doughnut.component';
import { BarComponent } from './charts/bar/bar.component';
import { PieComponent } from './charts/pie/pie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineComponent } from './charts/line/line.component';

const routes: Routes = [
  {path: 'line', component: LineComponent},
  {path: 'pie', component: PieComponent},
  {path: 'bar', component: BarComponent},
  {path: 'doughnut', component: DoughnutComponent},
  {path: 'radar', component: RadarComponent},
  {path: 'polar', component: PolarAreaComponent},
  {path: 'bubble', component: BubbleComponent},
  {path: 'scatter', component: ScatterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
