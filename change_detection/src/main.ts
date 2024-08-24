import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// ### Change detection in (( Zone.js )) ###
// By default anugular uses ( zone.js ) library, which handle the change detection in the whole angular project. ( when 1-event 2-change  happens )
// this zone.js library ( looks in {{ all }} components, when a ( 1-change 2-event ) made {{ in any }} component in the app and check { 1-string interpullations 2-Template bindings }. )
// المكتبة دي بتبص علي كل المشروع تاني جزء جزء لو حصل تغيير بس في اي مكان
// And of course that will leed to (performance issues) in complex apps.
// note: the change made ((( twice ))) in dev and ((( once ))) in production.
// (if there is a console.log() will print twice in dev mode and only one in production)

// ### Optimization 1 ###
// Avoid using complext functions in (Template bindings), because that will lead to be reexcuted where any change happens in any where in the app.
// not good (avoid doing this) ex:-  in (ts file):[[ get debugOutput(){... complex logic} ]], in (html file): [[ <p>{{ debugOutput }}</p> ]]
// If you avoided the latest code is a kind of (optimisation)

// ### Optimization 2 ###
// By using in (ts file): [ private zone = inject(NgZone); this.zone.runOutsideAngular(() => {})] =====> here change detection is not trigered for this (event)
