import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/formateur/formateur.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent {
  /**users = [
    { name: 'mohamed', id: 1, color: 'white' },
    { name: 'ahmed', id: 2, color: 'green' },
    { name: 'omar', id: 3, color: 'red' },
    { name: 'sami', id: 4, color: 'blue' },
    { name: 'salem', id: 5, color: 'grey' },
  ];**/
  users: any;
  iduser: number = 0;
  show: boolean = false;
  msg: string = '';
  onDelete(id: any) {
    this.iduser = id;
    this.show = true;
    console.log('id', id);
  }
  onClose() {
    this.show = false;
  }
  constructor(private userService: FormateurService) {}
  ngOnInit(): void {
    this.userService.getListUSers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
}
