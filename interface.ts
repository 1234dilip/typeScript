interface user {
    email:string,
    password:string,
    name:string,
    userid: number,
    startTrail():string,
    getCoopnes(name:string,value:number):string

}
let hitesh:user = {
    email: "dilip@gmail.com", password: "asdnmasd",
    name: "",
    userid: 0,
    startTrail: () => {
        return "2"
    },
    getCoopnes:(name:"dilip",value:20) => {
        return "what is your namename"
    }

}
hitesh.email ="kqdqkw@gmail.com"
console.log(hitesh.startTrail())