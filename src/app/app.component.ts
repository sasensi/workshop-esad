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
        { url: 'https://csb-olttg-2lfpb81jc-sasensi.vercel.app/', name: 'thomas' },
        { url: 'https://csb-m9ju5-3w6ti6k9f-sasensi.vercel.app/', name: 'isaure' },
        { url: 'https://csb-z6z8r-o5ad88ye8-sasensi.vercel.app/', name: 'david' },
        { url: 'https://csb-vetk5-jb4uc8xw9-sasensi.vercel.app/', name: 'morganne' },
        { url: 'https://csb-7pmhz-ccobadmiz-sasensi.vercel.app/', name: 'marjorie' },
        { url: 'https://csb-10rxj-1u975er62-sasensi.vercel.app/', name: 'heloïse' },
        { url: 'https://csb-3g282-bqpfwqht0-sasensi.vercel.app/', name: 'kassandra' },
        { url: 'https://csb-d8h45-bn5r22pms-sasensi.vercel.app/', name: 'maggie' },
    ]
        .map(( { url, name } ) => ({ url: this.domSanitizer.bypassSecurityTrustResourceUrl(url), name }))
        .sort(() => Math.random() > 0.5 ? 1 : -1);

    constructor ( private domSanitizer: DomSanitizer )
    {
    }
}
