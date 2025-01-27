import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-aasignaturas',
  templateUrl: './aasignaturas.page.html',
  styleUrls: ['./aasignaturas.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})
export class AAsignaturasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
