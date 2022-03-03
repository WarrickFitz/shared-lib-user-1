import { SharedHelpers } from './helpers'


// This is all we need to export from the shared library
export declare enum ChainEntityNameBrand {
    _ = ""
}
export declare type ChainEntityName = string & ChainEntityNameBrand;
function toChainEntityName2(value: any) : ChainEntityName {
    return value as ChainEntityNameBrand;
}


// This is what we're currently doing 
let x : ChainEntityName = SharedHelpers.toChainEntityName('wozzawozza22')
console.log(x);

let y : ChainEntityName = toChainEntityName2("wozzawozza22");
console.log(y);

// This will fail the compiler check
//let z : ChainEntityName = "wozzawozza22";
//console.log(z);

let message: string = 'Hello, World!';
console.log(message);



