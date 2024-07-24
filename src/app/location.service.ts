import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() {}

  async getCurrentPosition(): Promise<{ latitude: number, longitude: number, address: string }> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const address = await this.reverseGeocode(latitude, longitude);
          resolve({
            latitude,
            longitude,
            address
          });
        },
        error => {
          reject(error);
        },
        { enableHighAccuracy: true }
      );
    });
  }

  private async reverseGeocode(latitude: number, longitude: number): Promise<string> {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch address');
    }

    const data = await response.json();
    return data.display_name || 'Adresse non trouvée';
  }
}
