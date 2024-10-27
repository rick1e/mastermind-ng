import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipSelectorComponent } from './pip-selector/pip-selector.component';
import { PipFeedbackComponent } from './pip-feedback/pip-feedback.component';
import { GameResultComponent } from './game-result/game-result.component';
import { PipDisplayComponent } from './pip-display/pip-display.component';
import { GuessFeedbackDisplayComponent } from './guess-feedback-display/guess-feedback-display.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    PipSelectorComponent,
    PipFeedbackComponent,
    GameResultComponent,
    PipDisplayComponent,
    GuessFeedbackDisplayComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
