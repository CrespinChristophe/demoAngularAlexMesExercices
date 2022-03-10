import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Plat } from 'src/app/models/plat.model';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu!: Plat[]; 
  // = [
  //   {
  //     "id": 1,
  //     "nom": "pate",
  //     "type": "plat",
  //     "prix": 8
  //   },
  //   {
  //     "id": 2,
  //     "nom": "pizza",
  //     "type": "plat",
  //     "prix": 10
  //   },
  //   {
  //     "id": 3,
  //     "nom": "croquettes",
  //     "type": "entree",
  //     "prix": 6
  //   },
  //   {
  //     "id": 4,
  //     "nom": "glace",
  //     "type": "dessert",
  //     "prix": 4
  //   }
  // ];

  constructor(private service: PanierService, private client: HttpClient) { 
    client.get<Plat[]>("http://localhost:3000/plats")
      .subscribe(plats => this.menu = plats);
  }

 addPlatForm: FormGroup = new FormGroup({
   "nom": new FormControl(),
   "type": new FormControl(),
   "prix": new FormControl()
 })

 newPlat!: Plat;

  ngOnInit(): void {
  }

  onAdd(plat: Plat){
    this.service.addToCart(plat);
  }

  send(){
    this.newPlat = this.addPlatForm.value;
    this.client.post("http://localhost:3000/plats",this.newPlat).subscribe();
  }


}
