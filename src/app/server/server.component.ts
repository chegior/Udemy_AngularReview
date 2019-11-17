import {Component} from '@angular/core';
 
@Component({ 
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})

export class ServerComponent {
    serverID: number = 10; //the CAST is not required
    serverStatus: string = 'offline'
    
    constructor(){
        this.serverStatus = Math.random()>0.5? 'online' : 'offline';    
    }

    getColor(){
        return this.serverStatus === 'online' ? 'lightgreen' : 'mistyrose'
    }
    getServerStatus(){
        return this.serverStatus; //return a string
    }
    

}