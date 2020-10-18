import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable({
  providedIn: 'root'
})
export class LocalSaveService {

  constructor(
    private storage: LocalStorageService) { }

  set(key: string, value: string): void {
    this.storage.set(key, value);
  }

  get(key: string): string {
    return this.storage.get(key);
  }

}
