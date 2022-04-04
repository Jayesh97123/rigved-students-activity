import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'title'
})

export class CustomTitle implements PipeTransform{
    transform(value: string, args: string) {
        switch(args){
            case 'Male':
                return `Mr. ${value}`
            case 'Female':
                return `Ms. ${value}`
            default:
                return `Select proper gender`
        }
    }
}