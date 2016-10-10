import { Component, AfterViewInit,trigger,state,style,transition,animate,OnChanges,Input } from '@angular/core';


//declare var $:JQueryStatic;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
  trigger('visibilityChanged', [
    state('shown' , style({ opacity: 1 })),
    state('hidden', style({ opacity: 0 })),
    transition('* => *', animate('.5s'))
  ])
 ]


})
export class HomeComponent implements AfterViewInit {

	 	 isVisible : boolean = true;
	    visibility = 'shown';


	 homeText:string [] = [
                   'we are a solution to your digital needs','We are a creative mashup of millennials','we make the graphics speak','Get in touch'
                ];
  constructor() {

   }

  ngAfterViewInit() {
  }

/*
  function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;
  $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct])
              .fadeIn().delay(2000).fadeOut(200, rotateTerm);
}

*/


  toggle(){

  	this.visibility = this.isVisible ? 'shown' : 'hidden';

  	this.isVisible = !this.isVisible;
  	console.log(this.isVisible);
  }

}
