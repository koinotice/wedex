export default class AbiFunction {
    name: string;
    inputTypes: string[];
    inputs: any[];
    outputTypes: string[];
    outputs: any[];
    constant: string;
    methodAbiHash: string;
    constructor({ inputs, name, outputs, constant }: {
        inputs: any;
        name: any;
        outputs: any;
        constant: any;
    });
    /**
     * @description Returns encoded methodId and inputs
     * @param inputs Object, examples {owner:"0x000...}
     * @returns {string}
     */
    encodeInputs(inputs: any): string;
    /**
     * @description decode ethereum jsonrpc response result
     * @param outputs
     * @returns {*}
     */
    decodeOutputs(outputs: any): any;
    /**
     * @description decode encoded inputs
     * @param encoded
     * @returns {*}
     */
    decodeEncodedInputs(encoded: any): any;
    parseInputs(inputs?: {}): any[];
    parseOutputs(outputs: any): any;
}
