import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  contactId = this.activatedRoute.snapshot.paramMap.get("id");
  contact :any ;
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private httpClient:HttpClient) { }

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


goBack(){
  this.router.navigateByUrl('/home');
}



}