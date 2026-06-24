import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter-page.html',
    styleUrls: ['./counter-page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})



export class CounterPage {



    constructor() { 
        setInterval(() => {
                this.counter += 1;
                //this.counterSignal.update((current) => current + 1);
                console.log("Tick");
            } , 2000  );
        }
 
    counter = 10;

    counterSignal = signal(10);

    increaseBy(value: number) {
        this.counter += value;
        this.counterSignal.update((current) => current + value);
    }

    resetCounter(value: number) {
        this.counter = value;

        this.counterSignal.set(value);
    }
}