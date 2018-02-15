import { Component, OnInit } from '@angular/core';
import { process, GroupDescriptor, State, aggregateBy } from '@progress/kendo-data-query';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public aggregates: any[] = [{field: 'Incidents', aggregate: 'sum'},
    {field: 'Total', aggregate: 'sum'},
    {field: 'Average', aggregate: 'sum'},
    {field: 'TotalIndexed', aggregate: 'sum'},
    {field: 'AverageIndexed', aggregate: 'sum'}];

    public stateMonth: State = {
        skip: 0,
        take: 10,
        group: [{ field: 'Month'},{ field: 'Incidents'}]
    };
// { field: 'Month'},{ field: 'Incidents'},{ field: 'Total'},{ field: 'Average'},{ field: 'TotalIndexed'},{ field: 'AverageIndexed'}
    public data = [{
        'Incidents': 1034,
        'Total': 14290751944,
        'Average': 13820843,
        'TotalIndexed':19788404687,
        'AverageIndexed': 19137722,
        'Month': 'Jan'

    }, {
        'Incidents': 224,
        'Total': 14290751944,
        'Average': 13820843,
        'TotalIndexed':19788404687,
        'AverageIndexed': 19137722,
        'Month':'Feb'
    }, {
        'Incidents': 525,
        'Total': 14290751944,
        'Average': 13820843,
        'TotalIndexed':19788404687,
        'AverageIndexed': 19137722,
        'Month':'Mar'
    }, {
        'Incidents': 889,
        'Total': 14290751944,
        'Average': 13820843,
        'TotalIndexed':19788404687,
        'AverageIndexed': 19137722,
        'Month':'Apr'
    }, {
        'Incidents': 546,
        'Total': 14290751944,
        'Average': 13820843,
        'TotalIndexed':19788404687,
        'AverageIndexed': 19137722,
        'Month':'May'
    }, {
        'Incidents': 789,
        'Total': 14290751944,
        'Average': 13820843,
        'TotalIndexed':19788404687,
        'AverageIndexed': 19137722,
        'Month':'June'
    }, {
        'Incidents': 3655,
        'Total': 14290751944,
        'Average': 13820843,
        'TotalIndexed':19788404687,
        'AverageIndexed': 19137722,
        'Month':'July'
    }, {
        'Incidents': 2011,
        'Total': 14290751944,
        'Average': 13820843,
        'TotalIndexed':19788404687,
        'AverageIndexed': 19137722,
        'Month':'Aug'
    }, {
        'Incidents': 9568,
        'Total': 14290751944,
        'Average': 13820843,
        'TotalIndexed':19788404687,
        'AverageIndexed': 19137722,
        'Month':'Sept'
    }, {
        'Incidents': 454,
        'Total': 14290751944,
        'Average': 13820843,
        'TotalIndexed':19788404687,
        'AverageIndexed': 19137722,
        'Month':'Oct'
    }, {
        'Incidents': 200,
        'Total': 14290751944,
        'Average': 13820843,
        'TotalIndexed':19788404687,
        'AverageIndexed': 19137722,
        'Month':'Nov'
    }, {
        'Incidents': 456,
        'Total': 14290751944,
        'Average': 13820843,
        'TotalIndexed':19788404687,
        'AverageIndexed': 19137722,
        'Month':'Dec'
    }]

    public gridDataMonth: any = process(this.data, this.stateMonth);
    public total: any = aggregateBy(this.data, this.aggregates);

    public dataStateChange(state: DataStateChangeEvent): void {
      if (state && state.group) {
        state.group.map(group => group.aggregates = this.aggregates);
      }

      this.stateMonth = state;

      this.gridDataMonth = process(this.data, this.stateMonth);
    }

}
