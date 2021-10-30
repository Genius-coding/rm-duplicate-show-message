import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class Messages {
    messageEvent = new Subject<boolean>();

}