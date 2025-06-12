import { Injectable } from '@angular/core';
import { config } from '../config/env';
import { AxiosService } from '../axios/axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  async getData(): Promise<
    Array<{ name: string; description: string; image: string }>
  > {
     return (await AxiosService.get(config.urls.getFood)).data
  }
}
