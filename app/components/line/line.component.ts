import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { GridsterItem } from 'angular-gridster2';
//import { Highcharts } from 'node_modules/';

@Component({
  selector: 'line',
  templateUrl: './line.component.html',
  styleUrls: [ './line.component.css' ]
})
export class LineComponent  {
  @Input() public unitHeight: number;
  @Input() public item: GridsterItem;
  public chart: Chart;
  public highChartsOptions: Highcharts.Options;   
  public loaded: boolean;

  constructor() {
      this.loaded = false;
      this.highChartsOptions = {

  title: {
    text: 'Solar Employment Growth by Sector, 2010-2016'
  },

  subtitle: {
    text: 'Source: thesolarfoundation.com'
  },

  yAxis: {
    title: {
      text: 'Number of Employees'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [
    {
    type: 'line',
    name: 'Installation',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    type: 'line',
    name: 'Manufacturing',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    type: 'line',
    name: 'Sales & Distribution',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    type: 'line',
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    type: 'line',
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
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
