import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboards',
      status: false
    },
    children: [
      {
        path: 'buttons-icons',
        loadChildren: () => import('./icon/icon.module').then(m => m.ButtonIconsModule)
      },
      {
        path: 'buttons-pills',
        loadChildren: () => import('./pills/pills.module').then(m => m.PillsModule)
      },
      {
        path: 'buttons-shadow',
        loadChildren: () => import('./shadow/shadow.module').then(m => m.ShadowModule)
      },
      {
        path: 'buttons-square',
        loadChildren: () => import('./square/square.module').then(m => m.SquareModule)
      },
      {
        path: 'buttons-standard',
        loadChildren: () => import('./standard/standard.module').then(m => m.StandardModule)
      },
      {
        path: 'dropdowns',
        loadChildren: () => import('./dropdowns/dropdowns.module').then(m => m.DropdownsModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'badges-labels',
        loadChildren: () => import('./badges/badges.module').then(m => m.BadgesModule)
      },
      {
        path: 'cards',
        loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule)
      },
      {
        path: 'loaders',
        loadChildren: () => import('./loading-indicators/loading-indicators.module').then(m => m.LoadingIndicatorsModule)
      },
      {
        path: 'list-group',
        loadChildren: () => import('./list-groups/list-groups.module').then(m => m.ListGroupsModule)
      },
      {
        path: 'navigation-menu',
        loadChildren: () => import('./navigation-menus/navigation-menus.module').then(m => m.NavigationMenusModule)
      },
      {
        path: 'timeline',
        loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule)
      },
      {
        path: 'utilities',
        loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
