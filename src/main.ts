// Dynamically inject FLUID Web Components CSS & JS scripts
const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = 'https://fluid-backup.libertymutual.com/fluid/build/fluid.css';
document.head.appendChild(cssLink);

const script = document.createElement('script');
script.type = 'module';
script.src = 'https://fluid-backup.libertymutual.com/fluid/build/fluid.js';
document.head.appendChild(script);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

