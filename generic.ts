const score:Array<number>= []
const name2:Array<string> = []
function identityOne(val:boolean|number):boolean | number{
return val
}

function identityTwo(val:any):any{
    return val
}

function identityThree<Type>(val:Type):Type{
    return val
}

identityThree(true)


function ideFour<T>(val:T):T{
return val
}

interface Bootel{
    brand:string,
    type:number
}

function getSearchProducts<T>(product:T[]):T{
    return product[3]
}

const getMoreSearchProduct = <T>(product:T[]) :T => {
const myIndex = 5
return product[myIndex]
}
interface database{
    connection:string,
    username:string,
    password:string
}
function another<T,U,database>(valueOne:T,valueTwo:U,valueThree:database):object{
    console.log("================", valueOne,  
        valueTwo,valueThree)
    return{
        valueOne,  
        valueTwo,valueThree
    }
}

another(3,"dilip",{connection:"dsfsdfsdf",username:"askdaksdas",password:"kasdasdkakdssa" })

