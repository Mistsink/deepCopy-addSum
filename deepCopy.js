function deepCopy(target, map = new Map()) { //map结构存储记录拷贝的目标对象，严禁套娃
    const type = typeof (target);
    let result;
    if (type === 'object') {
        if (map.get(target)) return map.get(target); //严禁套娃，直接返回map中的值
        map.set(target, result); //在map记录拷贝的内容
        const isArray = Array.isArray(target);
        result = isArray ? [] : {};

        const keys = isArray ? null : Object.keys(target);
        let length = keys ? keys.length : target.length;

        for (let i = 0; i < length; i++) {
            let key = keys ? keys[i] : i;
            result[key] = deepCopy(target[key], map)
        } //考虑到for比 for in 性能好, while的话可能最好重新封装一个函数，否则显得臃肿

        return result;
    } else {
        return target;
    }
}

let target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = deepCopy(target);
console.log(target)