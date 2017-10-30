import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
