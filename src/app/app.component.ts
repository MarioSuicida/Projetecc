import { NavController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonHeader, IonButton ,IonNav} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, cashOutline, cardOutline, diamondOutline,personCircleOutline,settingsOutline} from 'ionicons/icons';
import { FolderPage } from './folder/folder.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet,IonHeader,IonButton,IonNav],
})
export class AppComponent {

  component = FolderPage;

  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
 
  constructor(private navCtrl: NavController) {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, cashOutline , cardOutline, diamondOutline,personCircleOutline,settingsOutline});
  }

  showPerfil() {

    this.navCtrl.navigateForward('perfil')

  }

  showPremium(){

    this.navCtrl.navigateForward('recursos-premium')
  }

  showCentralAjuda(){

    this.navCtrl.navigateForward('central-ajuda')
  }

  showPolitica(){

    this.navCtrl.navigateForward('politica-privacidade')
  }
  showSobre(){

    this.navCtrl.navigateForward('sobre')
  }
}
