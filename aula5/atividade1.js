function soma(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

console.log(soma(2)(3)(4))