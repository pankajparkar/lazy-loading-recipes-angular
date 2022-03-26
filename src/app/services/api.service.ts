import { Injectable } from "@angular/core";

import { periodicElements } from './data'

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    getPeriodicElements() {
        return periodicElements;
    }
}