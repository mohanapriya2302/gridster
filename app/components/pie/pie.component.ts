import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html',
  styleUrls: [ './pie.component.css' ]
})
export class PieComponent  {
  @Input() public unitHeight: number;
  @Input() public item: GridsterItem;
  public chart: Chart;
  public highChartsOptions: Highcharts.Options;   
  public loaded: boolean;

  constructor() {
      this.loaded = false;
      this.highChartsOptions = {
        chart: {
            type: "pie"
        },
        title: {
            text: "Browser Market Shares"
        },
        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
          type: 'pie',
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }]
  }]
      };
  }
  
  public ngOnChanges(changes: SimpleChanges) {
    //alert('pie')
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
      this.highChartsOptions.chart.height = this.item.rows * (this.unitHeight - 10) + ((this.item.rows - 4) * 10);
      this.highChartsOptions.chart.width = this.item.cols * (this.unitHeight - 10) + ((this.item.cols - 4) * 10);

    if (this.chart.ref) {
        //alert(this.highChartsOptions.chart.width + '-' + this.highChartsOptions.chart.height);
        this.chart.ref.setSize(this.highChartsOptions.chart.width, this.highChartsOptions.chart.height, false);
    }
  }
}
