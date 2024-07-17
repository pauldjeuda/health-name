import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  addMarker(currentLocation: { latitude: number; longitude: number; }, arg1: string) {
    throw new Error('Method not implemented.');
  }
  centerMap(currentLocation: { latitude: number; longitude: number; }) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
