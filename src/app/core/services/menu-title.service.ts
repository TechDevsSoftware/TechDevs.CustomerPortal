import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class MenuTitleService {

    // Observable string sources
    private titleSource = new Subject<string>();

    // Observable string streams
    title$ = this.titleSource.asObservable();

    updateTitle(title: string) {
        this.titleSource.next(title);
    }
}