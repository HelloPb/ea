import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarsService } from './cars.service';
import { Subscription } from 'rxjs';
import { Cars, Make } from './cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, OnDestroy {

  public cars: Cars[];
  public make: Make[] = [];

  private subscriptions: Subscription[] = [];

  constructor(private carService: CarsService) { }

  private transform(cars: Cars[]): void {

    if (cars != null && cars !== undefined && cars instanceof Array) {

      cars.forEach(show => {

        show.cars.forEach(car => {

          const make = this.make.find(x => x.name === car.make);
          if (make) {
            const model = make.model.find(m => m.name === car.model);
            if (model) {
              if (model.show.find(s => s.name === show.name) === undefined) {
                model.show.push({ name: show.name });
              }
            } else {
              make.model.push({ name: car.model, show: [{ name: show.name }] });
            }

          } else {
            this.make.push({ name: car.make, model: [{ name: car.model, show: [{ name: show.name }] }] });
          }
        });

      });
    }

  }

  public ngOnInit(): void {
    this.subscriptions.push(this.carService.get().subscribe(x => {
      this.transform(x);
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}
