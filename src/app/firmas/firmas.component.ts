import { Component } from '@angular/core';

@Component({
  selector: 'app-firmas',
  templateUrl: './firmas.component.html',
  styleUrl: './firmas.component.css'
})
export class FirmasComponent {

constructor() {
    console.log('FirmasComponent constructor called');
}
ngOnInit() {
    console.log('FirmasComponent initialized');
 
}

}