import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  constructor() {}

  public fromKilometersToMiles = kilometers => kilometers * 0.621;
}
