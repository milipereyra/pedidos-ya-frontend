import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { GlobalStatusService } from '../../services/global-status.service';

@Component({
  selector: 'app-home-menu',
  imports: [],
  templateUrl: './home-menu.html',
  styleUrl: './home-menu.css'
})
export class HomeMenu implements OnInit {
  items: Array<{  name: string; description: string ; price: number; imageUrl: string}> = [];
  
  
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
