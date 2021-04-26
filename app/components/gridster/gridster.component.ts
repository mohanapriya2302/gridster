

import { Component, SimpleChanges, ViewChild } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterItemComponent, GridsterItemComponentInterface } from 'angular-gridster2';


@Component({
  selector: 'app-gridster',
  templateUrl: './gridster.component.html',
  styleUrls: ['./gridster.component.css']
})
export class GridsterComponent {

  @ViewChild('gridsterItem') gridItem: GridsterItemComponent;
 
  public options: GridsterConfig;
  public unitHeight: number;
  public item1: GridsterItem;
  public item2: GridsterItem;
  public item3: GridsterItem;
  public item4: GridsterItem;
  public item5: GridsterItem;
  public item6: GridsterItem;

  constructor() {
    this.unitHeight = 0;
    this.item1 = { x: 0, y: 0, rows: 2, cols: 2 };
    this.item2 = { x: 2, y: 0, rows: 4, cols: 4 };
    this.item3 = { x: 4, y: 0, rows: 2, cols: 2 };
    this.item4 = { x: 0, y: 2, rows: 3, cols: 4 };
    this.item5 = { x: 4, y: 0, rows: 3, cols: 4 };
    this.item6 = { x: 5, y: 3, rows: 3, cols: 4 };

    this.options = {
      itemResizeCallback: this.itemResize.bind(this),
      pushItems: true,
      minCols: 12,
      maxCols: 12,
      minRows: 5,
      fixedRowHeight: 120,
      gridType: 'scrollVertical',
      resizable: {
        enabled: true
      },
      draggable: {
        enabled: true
      }
    };
  }
  public itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    console.log('update', item);

    if (itemComponent.gridster.curRowHeight > 1) {
      //alert(this.unitHeight)
      this.unitHeight = itemComponent.gridster.curRowHeight;
      //alert(this.unitHeight)
    }
    // console.log(itemComponent);
    itemComponent.gridster.curRowHeight += (item.cols * 100 - item.rows) / 10000;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    
    // if (this.options.api) {
    //   this.options.api.optionsChanged();
    // }
    // if (this.gridItem && this.gridItem.gridster.curRowHeight > 1) {
    //   this.unitHeight = this.gridItem.gridster.curRowHeight;
    // }

  }


  }
