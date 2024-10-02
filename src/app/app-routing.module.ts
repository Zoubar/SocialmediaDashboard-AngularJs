import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/homepage/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  {
    path: 'messages',
    loadChildren: () =>
      import('./modules/messages/messages.module').then(
        (m) => m.MessagesModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/Profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'saved',
    loadChildren: () =>
      import('./modules/saved-posts/saved-posts.module').then(
        (m) => m.SavedPostsModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
