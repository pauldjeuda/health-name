declare namespace google {
    export namespace maps {
      export class Geocoder {
        geocode(request: GeocoderRequest, callback: (results: GeocoderResult[], status: GeocoderStatus) => void): void;
      }
  
      export interface GeocoderRequest {
        location?: LatLng | LatLngLiteral;
        address?: string;
      }
  
      export interface GeocoderResult {
        formatted_address: string;
        // Ajoutez d'autres propriétés si nécessaire
      }
  
      export enum GeocoderStatus {
        OK = 'OK',
        // Ajoutez d'autres statuts si nécessaire
      }
  
      export interface LatLng {
        lat(): number;
        lng(): number;
      }
  
      export interface LatLngLiteral {
        lat: number;
        lng: number;
      }
    }
  }
  