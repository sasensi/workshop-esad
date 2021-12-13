import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
})
export class AppComponent
{
    data = [
        { url: 'https://csb-xtjf0-ieo9rpqb1-sasensi.vercel.app/', name: '' },
        { url: 'https://csb-xtjf0-ieo9rpqb1-sasensi.vercel.app/', name: '' },
        { url: 'https://csb-xtjf0-ieo9rpqb1-sasensi.vercel.app/', name: '' },
    ]
        .map(( { url, name } ) => ({ url: this.domSanitizer.bypassSecurityTrustResourceUrl(url), name }))
        .sort(() => Math.random() > 0.5 ? 1 : -1);

    constructor ( private domSanitizer: DomSanitizer )
    {
    }
}
