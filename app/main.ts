import { bootstrap }    from '@angular/platform-browser-dynamic';
import {PLATFORM_PIPES} from '@angular/core';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {HTTP_PROVIDERS, Http} from "@angular/http";
import {MessageService} from "./service/message.service";

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    {
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'app/assets/i18n', '.json'),
        deps: [Http]
    },
    // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
    TranslateService,
    MessageService,
    {provide: PLATFORM_PIPES, useValue: [TranslatePipe], multi: true}
]).catch((error: any): void => {
    console.error(error)
});
