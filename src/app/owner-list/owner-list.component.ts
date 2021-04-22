import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../shared/owner/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  owners:Array<any>;
  constructor(private ownerService:OwnerService) { }

  ngOnInit() {
    this.ownerService.getOwners().subscribe((response:any)=>{
      console.log(response)
      this.owners = response._embedded.owners;
    })    
  }

}
