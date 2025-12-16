import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AapModule } from './app/aap.module';
// Set start Module
platformBrowser().bootstrapModule(AapModule)
  .catch((err) => console.error(err));
//OR for standalone true
// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));
