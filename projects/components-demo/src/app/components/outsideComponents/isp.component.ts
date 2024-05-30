import { Component } from "@angular/core";

@Component({
    selector:'isp-component',
    templateUrl:'./isp.component.html',
    styleUrls:['./isp.component.css']
})


export class ISPComponent{
    ispID:Number=1;
    ispName:String='Airtel';
    ispType:String='Cellular'
}