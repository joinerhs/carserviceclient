import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OwnerService } from '../shared/owner/owner.service'

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit {

  sub: Subscription;
  public owner:any={};
  constructor(private ownerService:OwnerService, private route:Router, private activeRouter:ActivatedRoute) { }
  
  ngOnInit() {
    this.sub = this.activeRouter.params.subscribe(params =>{
      const id = params['id'];
      if (id) {
        this.ownerService.getOwner(id).subscribe((resp: any) => {
          console.log(resp);
          if (resp) {
            this.owner = resp._embedded.owners[0];
            this.owner.href = resp._embedded.owners[0]._links.self.href;
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.redirect();
          }
        });
      }
      /* this.ownerService.getOwner(id).subscribe(response =>{
        this.owner = response; */
       
    })
  }

  redirect(){
    this.route.navigate(['/owner-list'])
  }

  save(form: NgForm) {
    console.log(form);
    this.ownerService.save(form).subscribe(result => {
      this.redirect();
    }, error => console.error(error));
  }

  remove(href:string){
    this.ownerService.remove(href).subscribe(result => {
      this.redirect();
    }, error => console.error(error));
  }

}
