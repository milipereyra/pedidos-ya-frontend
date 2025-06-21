import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menuitemedit } from "./pages/menuitemedit/menuitemedit";
import { Crearmenu } from "./pages/crearmenu/crearmenu";
import { LoginComponent } from "./pages/login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menuitemedit, Crearmenu, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pedidos-ya';
}
