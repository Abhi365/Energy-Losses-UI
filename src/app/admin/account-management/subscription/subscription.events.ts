import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class SubscriptionEventEmiter {
    EnergyLossesEvent: EventEmitter<any> = new EventEmitter()
}