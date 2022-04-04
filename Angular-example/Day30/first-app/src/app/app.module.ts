import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomPipe } from './custom-pipe';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { StructuralDemoComponent } from './structural-demo/structural-demo.component';
import { JavascriptObjectActivityComponent } from './javascript-object-activity/javascript-object-activity.component';
import { StructuralDirectiveAndPipeActivityComponent } from './structural-directive-and-pipe-activity/structural-directive-and-pipe-activity.component';
import { CustomTitle } from './structural-directive-and-pipe-activity/custom-pipe-activity';

@NgModule({
  declarations: [
    AppComponent,
    PipeExampleComponent,
    CustomPipe,
    StructuralDemoComponent,
    JavascriptObjectActivityComponent,
    StructuralDirectiveAndPipeActivityComponent,
    CustomTitle
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
