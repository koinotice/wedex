export default class Contract {
    abiFunctions: any;
    constructor(abi: any);
    /**
     * @description Encodes inputs data according to  ethereum abi
     * @param method string can be full method or just method name, examples: 'balanceOf' or balanceOf(address)
     * @param inputs array
     * @returns {*|string}
     */
    encodeInputs(method: any, inputs: any): any;
    /**
     * @description Decodes outputs
     * @param method string can be full method or just method name, examples: 'balanceOf' or balanceOf(address)
     * @param outputs string
     * @returns {*}
     */
    decodeOutputs(method: any, outputs: any): any;
    /**
     * @description Decode encoded method and inputs
     * @param encode string | Buffer
     * @returns {*}
     */
    decodeEncodeInputs(encode: any): any;
}
