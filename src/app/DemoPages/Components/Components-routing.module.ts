import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Charts',
      status: false
    },
    children: [
      {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)
      },
      {
        path: 'accordions',
        loadChildren: () => import('./accordions/accordions.module').then(m => m.AccordionsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'modals',
        loadChildren: () => import('./modals/modals.module').then(m => m.ModalsModule)
      },
      {
        path: 'progress-bar',
        loadChildren: () => import('./progress-bar/progress-bar.module').then(m => m.ProgressBarModule)
      },
      {
        path: 'tooltips-popovers',
        loadChildren: () => import('./tooltips-popovers/tooltips-popovers.module').then(m => m.TooltipsPopoversModule)
      },
      {
        path: 'carousel',
        loadChildren: () => import('./carousel/carousel.module').then(m => m.CarouselModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarsModule)
      },
      {
        path: 'pagination',
        loadChildren: () => import('./pagination/pagination.module').then(m => m.PaginationModule)
      },
      {
        path: 'count-up',
        loadChildren: () => import('./count-up/count-up.module').then(m => m.CountUpModules)
      },
      {
        path: 'scrollable-elements',
        loadChildren: () => import('./scrollable/scrollable.module').then(m => m.ScrollableModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)
      },
      {
        path: 'ratings',
        loadChildren: () => import('./ratings/ratings.module').then(m => m.RatingsModule)
      },
      {
        path: 'image-crop',
        loadChildren: () => import('./image-crop/image-crop.module').then(m => m.ImageCropModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
