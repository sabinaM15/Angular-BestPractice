import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { CatalogRepositoryService } from "./catalog-repository.service";
import { CatalogComponent } from "./catalog.component";
import { FilterClassesService } from "./filter-classes.service";
import { OrderByPipe } from "./order-by.pipe";

@NgModule({
  imports: [ CommonModule, RouterModule, SharedModule],
  declarations: [ CatalogComponent, OrderByPipe ],
  exports: [ CatalogComponent ],
  providers: [ CatalogRepositoryService, FilterClassesService ]
})
export class CatalogModule{

};
