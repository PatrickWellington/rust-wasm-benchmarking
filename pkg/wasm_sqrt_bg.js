import * as wasm from './wasm_sqrt_bg.wasm';

/**
* @param {number} operand
* @returns {number}
*/
export function my_sqrt(operand) {
    const ret = wasm.my_sqrt(operand);
    return ret;
}

