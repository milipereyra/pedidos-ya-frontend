import { Injectable } from '@angular/core';
import axios from 'axios';
import { config } from '../config/env';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  async getData(): Promise<
    Array<{ name: string; description: string; price:number; imageUrl: string }>
  > {
      //return (await axios.get('/api/food')).data
     return (await axios.get(config.urls.getFood)).data
  }
}
