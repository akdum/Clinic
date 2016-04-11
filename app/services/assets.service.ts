import {Injectable} from 'angular2/core';

@Injectable()
export class AssetsService {
    getLogo() {
        return "../assets/logo.jpg";
    }
    getCarousel() {
        let images: string[] = [
          "../assets/example1.jpg",
          "../assets/example2.jpg",
          "../assets/example3.jpg",
          "../assets/example4.jpg"
        ];
        return images;
    }
    getUrlByName(filename: string) {
        return "../assets/" + filename;
    }
}