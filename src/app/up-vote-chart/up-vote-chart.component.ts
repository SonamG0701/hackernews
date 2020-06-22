import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, Chart } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-up-vote-chart',
  templateUrl: './up-vote-chart.component.html',
  styleUrls: ['./up-vote-chart.component.css']
})
export class UpVoteChartComponent implements OnInit, OnChanges {

  @Input() pageNumber;
  @Input() upVoteInc;

  //Labels shown on the x-axis
  lineChartLabels: Label[];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false
        },
        scaleLabel: {
          display: true,
          labelString: 'ID'
        },
        ticks: {
          beginAtZero: true,          
        }
      }],
      yAxes: [{        
        scaleLabel: {
          display: true,
          labelString: 'Votes'
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      }]
    }
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      borderWidth: [2]
    }
  ];

  // Set true to show legends
  lineChartLegend = false;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];
  lineChartData: ChartDataSets[]


  ngOnInit() {
  }

  ngOnChanges() {    
    let values = JSON.parse(localStorage.getItem('Votes' + this.pageNumber));    

    let upVotes = values.map(votes => {
      return votes.upVote
    });
    let storyIds = values.map(value => {
      return value.story_id
    })

    // Array of different segments in chart
    this.lineChartData = [
      { lineTension: 0, data: upVotes, borderWidth: [2], borderDashOffset:25 }  
    ];

    this.lineChartLabels = storyIds
  }

  getVotesList() {
    localStorage.getItem('Votes' + this.pageNumber);
  }




  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {    
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    
  }


}
