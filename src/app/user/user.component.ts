import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users = [
    { name: 'salem', id: 1, color: 'white' },
    { name: 'ahmed', id: 2, color: 'green' },
    { name: 'omar', id: 3, color: 'red' },
  ];
}
