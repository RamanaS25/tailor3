import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tailors',
  templateUrl: './tailors.page.html',
  styleUrls: ['./tailors.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TailorsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
