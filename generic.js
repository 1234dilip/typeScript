var score = [];
var name2 = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
function ideFour(val) {
    return val;
}
function getSearchProducts(product) {
    return product[3];
}
var getMoreSearchProduct = function (product) {
    var myIndex = 5;
    return product[myIndex];
};
function another(valueOne, valueTwo, valueThree) {
    console.log("================", valueOne, valueTwo, valueThree);
    return {
        valueOne: valueOne,
        valueTwo: valueTwo, valueThree: valueThree
    };
}
another(3, "dilip", { connection: "dsfsdfsdf", username: "askdaksdas", password: "kasdasdkakdssa" });
