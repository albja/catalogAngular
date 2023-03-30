import { Component } from '@angular/core';
import { Products } from 'src/model/product'
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  model: Products[] = [
    new Products(1, "Vin", 5, false),
    new Products(2, "Tracteur", 45000, true),
    new Products(3, "Boucle d'oreille", 0, false),
    new Products(4, "Briquet", 0, false),
    new Products(5, "Torchon", 2, true),
    new Products(6, "Souris", 15, false),
    new Products(7, "Moi", 1, false),
    new Products(8, "Crayon", 0, false),
    new Products(9, "Billard", 500, false),
    new Products(10, "moto", 2700, true),
    new Products(11, "Clavier", 22, false),
    new Products(12, "Chèvre", 0, false),
  ]

  constructor() { }
}
