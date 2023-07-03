import *as fs from 'fs'
import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

export class RequestPipe implements PipeTransform<any>{
    transform(value: any, metadata: ArgumentMetadata) {
        fs.writeFile('./logs.txt', '\n fetched', () => { })
        return value
    }
}