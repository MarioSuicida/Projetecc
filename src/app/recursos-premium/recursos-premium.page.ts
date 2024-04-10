import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recursos-premium',
  templateUrl: './recursos-premium.page.html',
  styleUrls: ['./recursos-premium.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RecursosPremiumPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
   
  showFolder(){
    this.navCtrl.navigateBack('folder/inbox') /* isso aqui é onde coloca o nome da pagina que vamos ser direcionados .  */
  }
}
