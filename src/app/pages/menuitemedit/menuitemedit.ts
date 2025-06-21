import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { GlobalStatusService } from '../../services/global-status.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
@Component({
  selector: 'app-menuitemedit',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './menuitemedit.html',
  styleUrl: './menuitemedit.css'
})
export class Menuitemedit {
  items: Array<{ name: string; description: string; price: number; imageUrl: string }> = [];
  

  constructor(
    private readonly apiService: ApiService,
    private readonly globalStatusService: GlobalStatusService
  ) {}

  ngOnInit(): void {
    this.initialization();
  }

  async initialization(): Promise<void> {
    this.globalStatusService.setLoading(true);
    const data = await this.apiService.getData();
    this.items = data;
    this.globalStatusService.setLoading(false);
  }

 
  
}
