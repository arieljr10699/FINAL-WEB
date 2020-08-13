import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-desc',
  templateUrl: './user-desc.component.html',
  styleUrls: ['./user-desc.component.scss']
})
export class UserDescComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private httpClient:HttpClient) { }
  contactId = this.activatedRoute.snapshot.paramMap.get("id");
  contact :any;

  ngOnInit() {
    this.getContact();
  }

  getContact(){
      this.httpClient.get(`https://final-web-e2e70.firebaseio.com/users/${this.contactId}.json`).subscribe(result=>{
          this.contact = result;
          console.log(result);
      }, error=>{

      })
  }

  sendMessage(){
    console.log('ready')
    this.router.navigateByUrl('/mail/'+this.contactId);
 
  }

  updateContact(){
    this.httpClient.put(`https://final-web-e2e70.firebaseio.com/users/${this.contactId}.json`, this.contact).subscribe(result=>{
      this.contact = result;
      console.log(result);
  }, error=>{

  })
  
    
  }

  

  goBack(){
    this.router.navigateByUrl('/home')
  }
  

}