import { Component, OnInit } from '@angular/core';
import { PageComponent } from 'src/app/page/page.component';

@Component({
  selector: 'app-react-native-tvos-event-handler',
  templateUrl: './react-native-tvos-event-handler.component.html',
  styleUrls: ['./react-native-tvos-event-handler.component.css']
})
export class ReactNativeTvosEventHandlerComponent extends PageComponent implements OnInit {

  public event_handler_tsx = '';
  public focus_state_tsx = '';
  public focus_store_tsx = '';

  async ngOnInit(): Promise<void> {
    const [event_handler_tsx, focus_state_tsx, focus_store_tsx] = await this.loadCodes(
      [
        'react/react-native-tvos-event-handler/event_handler_tsx.pre',
        'react/react-native-tvos-event-handler/focus_state_tsx.pre',
        'react/react-native-tvos-event-handler/focus_store_tsx.pre'
      ]
    );
    this.event_handler_tsx = event_handler_tsx;
    this.focus_state_tsx = focus_state_tsx;
    this.focus_store_tsx = focus_store_tsx;
    setTimeout(this.initHljs, 0);
  }

}
