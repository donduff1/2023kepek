import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images-view',
  templateUrl: './images-view.component.html',
  styleUrls: ['./images-view.component.css']
})
export class ImagesViewComponent {
  aktIndex:any
  viewImages:any=[]

  @Input() images:any

  constructor(){
    this.aktIndex=0
  }

  selectImage(ind:any){
    this.aktIndex=ind
  }

  balra(){}
  jobbra(){}

}
