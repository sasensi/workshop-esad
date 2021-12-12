import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
})
export class AppComponent
{
    data = [
        'https://x.app',
        'https://y.app',
        'https://z.app',
    ].sort(() => Math.random() > 0.5 ? 1 : -1);
}
