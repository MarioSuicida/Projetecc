import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'recursos-premium',
    loadComponent: () => import('./recursos-premium/recursos-premium.page').then( m => m.RecursosPremiumPage)
  },
  {
    path: 'central-ajuda',
    loadComponent: () => import('./central-ajuda/central-ajuda.page').then( m => m.CentralAjudaPage)
  },
  {
    path: 'politica-privacidade',
    loadComponent: () => import('./politica-privacidade/politica-privacidade.page').then( m => m.PoliticaPrivacidadePage)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./sobre/sobre.page').then( m => m.SobrePage)
  },


];
