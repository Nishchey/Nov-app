import { Recipie } from './recipie.model';
import { RecipieService } from './recipie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipie',
  templateUrl: './recipie.component.html',
  styleUrls: ['./recipie.component.css'],
  providers: [RecipieService]
})
export class RecipieComponent implements OnInit {
// selectedRecipie: Recipie;
  constructor(private  _recipieService: RecipieService) { }

  ngOnInit() {
  //   this._recipieService.recipieSelected.subscribe(
  //     (recipie: Recipie) => {
  //     this.selectedRecipie = recipie;
  //   console.log('ngOnInit.this._recipieService.recipieSelected.subscribe()');
  //  }
  //   );
  }

}
