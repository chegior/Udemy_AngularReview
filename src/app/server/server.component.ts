import {Component} from '@angular/core';
 
@Component({ 
    selector:'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent {
    serverID: number = 10; //the CAST is not required
    serverStatus: string = 'offline'

    getServerStatus(){
        return this.serverStatus; //return a string
    }

}