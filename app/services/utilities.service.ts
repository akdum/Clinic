import { Injectable } from 'angular2/core';

@Injectable()
export class UtilitiesService {

    prepareRows(list, rows) {
        let count = Math.floor(list.length/3);
        let reminder = list.length%3;
        if (count && count > 0) {                 
            for (let index = 0; index < count; index++) {
                let row = [];
                for(let j = 0; j < 3; j++) {
                    row.push(list[index*3 + j]);
                }
                rows.push(row);
            }
        }
        if (reminder && reminder > 0) {
            let row = [];
            for (let index = reminder-1; index >= 0; index--) {
                row.push(list[list.length-index]);
            }
            rows.push(row);
        }
        
        return rows;
    }

}