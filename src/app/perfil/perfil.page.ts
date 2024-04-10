import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular/standalone'; /* isso que permite a navegação entr e paginas */ 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonHeader, IonButton ,IonNav} from '@ionic/angular/standalone';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, cashOutline, cardOutline, diamondOutline,personCircleOutline,settingsOutline} from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet,IonHeader,IonButton,IonNav]
})
export class PerfilPage implements OnInit {

  constructor(private navCtrl:NavController) {  /*coloque aqui o coiso para navegar */ 
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, cashOutline , cardOutline, diamondOutline,personCircleOutline,settingsOutline});
  }

  ngOnInit() {
  }

  showFolder(){
    this.navCtrl.navigateBack('folder/inbox') /* isso aqui é onde coloca o nome da pagina que vamos ser direcionados .  */
  }
}


