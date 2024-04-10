import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-politica-privacidade',
  templateUrl: './politica-privacidade.page.html',
  styleUrls: ['./politica-privacidade.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PoliticaPrivacidadePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  showFolder(){
    this.navCtrl.navigateBack('folder/inbox') /* isso aqui é onde coloca o nome da pagina que vamos ser direcionados .  */
  }
}
