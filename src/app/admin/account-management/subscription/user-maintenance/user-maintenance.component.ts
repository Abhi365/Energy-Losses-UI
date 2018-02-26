import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-maintenance',
  templateUrl: './user-maintenance.component.html',
  styleUrls: ['./user-maintenance.component.css']
})
export class UserMaintenanceComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  navigateToEnergyLossesInfo() {
    this._router.navigateByUrl('/subscription/energyLossesInfo');
  }

}
