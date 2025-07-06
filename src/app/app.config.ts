import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpFeature, HttpFeatureKind, withFetch, provideHttpClient } from '@angular/common/http'; // ✅ importar aquí

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()) // ✅ ahora ya no da error
  ],
};
