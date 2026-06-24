import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.html',
    styleUrls: ['./hero-page.css'],

    imports: [UpperCasePipe]
})

export class HeroPage {
    
    name = signal('Ironman');
    age = signal(24);

    heroDescription = computed(()=> {

        const description = `${this.name()} - ${this.age()}`;
        return description;
    })

    capitalizeName = computed( ()=> this.name().toUpperCase() );

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeHero() {
        // this.name.update((current) =>  current = 'Spiderman' );
        // this.age.update((current) => current = 22);

        this.name.set('Spiderman');
        this.age.set(22);
    }

    changeAge() {
        //this.age.update((current) => current = 60);
        this.age.set(60);
    }

    getHeroDescription() {
        return `Name: ${this.name()}, Age: ${this.age()}`;
    }


}