import * as fs from 'fs'
import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { resolve } from 'path';

@Injectable()
export class RequestPipe implements PipeTransform<any>{
    async transform(value: any, metadata: ArgumentMetadata) {
        let data = new Uint8Array(Buffer.from(`\n ${value} ${metadata}`))
        fs.writeFile(resolve(__dirname, '../../logs.txt'), data, { flag: 'a+' }, (cb) => {
        })
        return value
    }
}