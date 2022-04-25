import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeUser } from 'src/app/@logi-store/actions/user.action';
import { UserDTO } from 'src/app/@logi-store/models/UserDTO';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userDatasource:UserDTO[]=[];
  constructor(    private store: Store
    ) { }
  ngOnInit() {
    this.userDatasource.push({
      id:"1",
      name:'enes'
    })
    this.userDatasource.push({
      id:"2",
      name:'Burak'
    })
    this.userDatasource.push({
      id:"3",
      name:'Emre'
    })
    this.userDatasource.push({
      id:"4",
      name:'Taylan'
    })

  }
  getUser(dataItem:UserDTO){
    this.store.dispatch(changeUser({user:dataItem}))
  }

}
