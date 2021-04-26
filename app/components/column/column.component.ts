import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { GridsterItem } from 'angular-gridster2';


@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: [ './column.component.css' ]
})
export class ColumnComponent  {
  @Input() public unitHeight: number;
  @Input() public item: GridsterItem;
  public chart: Chart;
  public highChartsOptions: Highcharts.Options;   
  public loaded: boolean;

  constructor() {
      this.loaded = false;
      this.highChartsOptions = {

        title: {
          text: 'Monthly Average Rainfall'
        },
        subtitle: {
          text: 'Source: WorldClimate.com'
        },
        xAxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Rainfal (mm)'
          }
        },
        legend: {
          layout: 'vertical',
          backgroundColor: '#FFFFFF',
          align: 'left',
          verticalAlign: 'top',
          x: 100,
          y: 70,
          floating: true,
          shadow: true
        },
        tooltip: {
          formatter: function () {
            return '' +
              this.x + ': ' + this.y;
          }
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [{
          name: 'Delhi',
          type: 'column',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1]
    
        }, {
          name: 'Mumbai',
          type: 'column',
          data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5]
    
        }, {
          name: 'Hyderabad',
          type: 'column',
          data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2]
    
        }, {
          name: 'Chennai',
          type: 'column',
          data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1]
        }],
      
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
