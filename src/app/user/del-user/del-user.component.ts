import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-del-user',
  templateUrl: './del-user.component.html',
  styleUrls: ['./del-user.component.css'],
})
export class DelUserComponent implements OnInit {
  @Input('userId') userId: any;
  @Output() close = new EventEmitter();
  @Output() save = new EventEmitter();
  ngOnInit(): void {
    this.onDelete();
  }
  onDelete() {
    console.log('userID', this.userId);
  }
  CloseAction() {
    this.close.emit(true);
  }
}
