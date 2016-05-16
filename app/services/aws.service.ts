import { Injectable } from '@angular/core';

import { CONFIG } from '../config/config';

@Injectable()
export class AwsService {    
    public Db: any;
    public Email: any;
    
    constructor() { 
        AWS.config.update({accessKeyId: CONFIG.DB.READ.ACCESS_KEY_ID, secretAccessKey: CONFIG.DB.READ.SECRET_ACCESS_KEY});
        AWS.config.region = CONFIG.DB.REGION;
        
        this.Db = new AWS.DynamoDB();
    }
}