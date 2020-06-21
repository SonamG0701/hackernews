import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-up-vote-chart',
  templateUrl: './up-vote-chart.component.html',
  styleUrls: ['./up-vote-chart.component.css']
})
export class UpVoteChartComponent implements OnInit, OnChanges {

  @Input() pageNumber;

  ngOnInit() {
    
  }

  ngOnChanges() {
    console.log('pp' + this.pageNumber);
  }

  getVotesList() {
    localStorage.getItem('Votes' + this.pageNumber);
  }
  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { lineTension: 0, data: [65, 59, 80, 81, 56, 55, 40], label: 'Product A' },
    // { lineTension: 0, data: [28, 48, 40, 19, 86, 27, 90], label: 'Product B' }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true    
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
