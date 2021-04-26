import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { GridsterItem } from 'angular-gridster2';


@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: [ './area.component.css' ]
})
export class AreaComponent  {
  @Input() public unitHeight: number;
  @Input() public item: GridsterItem;
  public chart: Chart;
  public highChartsOptions: Highcharts.Options;   
  public loaded: boolean;

  constructor() {
      this.loaded = false;
      this.highChartsOptions = {

        title: {
          text: 'Average fruit consumption during one week'
       },
       subtitle : {
          style: {
             position: 'absolute',
             right: '0px',
             bottom: '10px'
          }
       },
       legend : {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: -150,
          y: 100,
          floating: true,
          borderWidth: 1,
       },
       xAxis:{
          categories: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] 
       },
       yAxis : {
          title: {
             text: 'Number of units'
          },
          labels: {
             formatter: function () {
                return this.value /1000 + 'k';
             }
          },
          min:0
       },
       tooltip : {
          formatter: function () {
             return '<b>' + this.series.name + '</b><br/>' +
                this.x + ': ' + this.y;
          }
       },
       plotOptions : {
          area: {
             fillOpacity: 0.5 
          }
       },
       credits:{
          enabled: false
       },
       series: [
          {
             name: 'John',
             type: 'area',
             data: [3, 4, 3, 5, 4, 10, 12]
          }, 
          {
             name: 'Jane',
             type: 'area',
             data: [1, 3, 4, 3, 3, 5, 4]
          } ],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

};
  }
  
  public ngOnChanges(changes: SimpleChanges) {
    if (this.loaded) {
      this.resizeChart();
    }
  }

  public ngAfterViewInit(): void {
      this.chart = new Chart(this.highChartsOptions);
      this.loaded = true;
  }

  public resizeChart(): void {
      console.log("resizeChart");
      //alert('resize linechart');
      this.highChartsOptions.chart.height = this.item.rows * (this.unitHeight - 10) + ((this.item.rows - 4) * 10);
      this.highChartsOptions.chart.width = this.item.cols * (this.unitHeight - 10) + ((this.item.cols - 4) * 10);

    if (this.chart.ref) {
        this.chart.ref.setSize(this.highChartsOptions.chart.width, this.highChartsOptions.chart.height, false);
    }
  }


}
