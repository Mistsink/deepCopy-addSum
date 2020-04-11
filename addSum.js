function addSum(...args){
    let  _args = args;
    let _addSum = function(...args){
        _args.push(...args);
        return _addSum
    }

    _addSum.toString = ()=>{
        return _args.reduce((p, n)=>p+n)
    }
    
    return _addSum
}