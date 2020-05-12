// 获取prototype链
// 获取当前类的所有prototype链
export default function getProtoList(Func) {
    let prototypes = {};
    let result = prototypes;
    let __proto = [Func.prototype];

    while(__proto.length > 0) {
        let proto = __proto.shift();

        // prototypes.__proto__ = proto;
        Object.setPrototypeOf(prototypes, proto);

        // 首先检测proto的__proto__属性是不是Object
        let cProto = Object.getPrototypeOf(proto);
        
        if(cProto) {
        // if(proto.__proto__) {
            // __proto.push(proto.__proto__);
            __proto.push(cProto);
            let prototypesProto = Object.getPrototypeOf(prototypes);
            // prototypes = prototypes.__proto__;
            prototypes = prototypesProto;
        }
    }

    return {
        result: result,
        prototypes: prototypes
    };
}