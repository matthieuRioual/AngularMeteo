import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {


  infos: string[] = [];
  errors:string[]=[];
  warnings:string[]=[];


  warning(message: string) {
    this.warnings.push(message);
  }

  info(message:string){
    this.infos.push(message)
  }

  error(message:string){
    this.errors.push(message)
  }

}
