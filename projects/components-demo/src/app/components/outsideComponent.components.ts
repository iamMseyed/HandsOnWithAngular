import { Component } from "@angular/core";
@Component({
    selector:'outside-component',
    template:`
    <div>
        <h1>Outside Component </h1>
        <hr>
        <div>
            Component Number : {{id}} <br>
            Component Name: {{name}} <br>
            Compnonet Type: {{type}} <br>
        </div>
    </div>
    `,
    styles:["h1{color:red;text-align:center;}"]
    
})

export class OutsideComponent{
    id:Number=5;
    name:String='anyName';
    type:String='global'
}