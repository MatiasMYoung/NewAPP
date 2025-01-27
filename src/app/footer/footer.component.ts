import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class FooterComponent implements OnInit {
  fechaHora: string = '';

  constructor() {}

  ngOnInit() {
    this.actualizarFechaHora();
    setInterval(() => this.actualizarFechaHora(), 1000);
  }

  actualizarFechaHora() {
    const ahora = new Date();
    this.fechaHora = ahora.toLocaleString();
  }
}
