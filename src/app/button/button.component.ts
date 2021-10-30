import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Messages } from '../services/messages.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private messageServie: Messages) { }

  ngOnInit(): void {
  }


  displayActivatedMessage() {
    // here I should emit the event to the parent component to display the text
    this.messageServie.messageEvent.next(true);
  }
}
