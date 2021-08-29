import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  protected getItem(item: string): string | null {
    return localStorage.getItem(item);
  }

  setItem(key: string, item: string): void {
    return localStorage.setItem(key, item);
  }

}
