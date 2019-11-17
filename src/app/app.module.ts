import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { FormsModule } from "@angular/forms";
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AlertWarning} from './alertWarning/alertWarning.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertWarning,
    AlertSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
