import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { Messages } from './services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'remove-duplicate';
  displayMessage: boolean = false;
  timeToDisplayText: number = 0;
  subscription: Subscription;
  activatedMessage: boolean = false;
  activatedSubscription: Subscription;

  listOfNumbers: number[] = [1,2,5,5,6,3,2,1];
  customObservable : Observable<string> ;

  constructor(private messageServie: Messages){
    this.removeDuplicate2(this.listOfNumbers);
  }
  ngOnInit() {

/*      this.customObservable = Observable.create( observer => {
      setInterval(()=> {
        this.displayMessage = !this.displayMessage
      },this.timeToDisplayText)
    }) */

    this.activatedSubscription= this.messageServie.messageEvent.subscribe((value: boolean) => {
      this.activatedMessage = value;
    })
    

    this.customObservable = new Observable((obsever) => {
      setInterval(() => {
        this.displayMessage = !this.displayMessage;
      }, this.timeToDisplayText)
    });

  }

  removeDuplicate(tab: number[]) : number[] {
    if(tab.length !== 0){
      for(var i = 0; i< tab.length; i++){
        for(var j = i+1; j< tab.length; j++)
          if(tab[i] === tab[j])
            tab.splice(j,1);
      }
    }
    console.log(tab);
    return tab.sort();
  }

  removeDuplicate2(tab: number []) {
    console.log(tab.sort().filter((value,index) => value !== tab[index+1]));
    return tab.sort().filter((value,index) => value !== tab[index+1]);
  }

  showMessage() {
    this.subscription= interval(this.timeToDisplayText).subscribe(() => {
      this.displayMessage = !this.displayMessage;
    });
  }

  showMessageCustomObservable() {
    this.subscription = this.customObservable.subscribe(() => {
      console.log('the system start showing the message ') ;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.activatedSubscription.unsubscribe();
  }

}
