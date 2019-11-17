import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreation = 'No Server was created';
serverName = '';
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreation = " Server was created";

  }
  onUpdateServerName(event: any){
    console.log(event); //checking at the console the object
    this.serverName = (<HTMLInputElement>event.target).value; // getting into the event
  }
}
