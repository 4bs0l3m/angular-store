import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserDTO } from '../@logi-store/models/UserDTO';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private store: Store) { }
  user:UserDTO=new UserDTO();
  ngOnInit() {
    this.store.subscribe((res:any)=>{
      let user=<UserDTO>res.user;
      console.log('res :', user);
      this.user=user;
      console.log('this.store :', this.store);
    })
  }
  

}
