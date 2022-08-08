import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnackbarHookComponent } from './snackbar-hook/snackbar-hook.component';
import { ReactNativeTvosEventHandlerComponent } from './react-native-tvos-event-handler/react-native-tvos-event-handler.component';

const routes: Routes = [
  {
    path: 'snackbar_hook',
    component: SnackbarHookComponent
  },
  {
    path: 'react_native_tvos_event_handler',
    component: ReactNativeTvosEventHandlerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactRoutingModule {}
