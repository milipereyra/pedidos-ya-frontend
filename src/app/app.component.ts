import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateComponent } from "./pages/template/template.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pedidos-ya';
}
