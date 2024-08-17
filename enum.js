var carSheat;
(function (carSheat) {
    carSheat[carSheat["Frist"] = 10] = "Frist";
    carSheat[carSheat["Second"] = 11] = "Second";
    carSheat[carSheat["Third"] = 12] = "Third";
    carSheat[carSheat["Fourth"] = 13] = "Fourth";
})(carSheat || (carSheat = {}));
var details = carSheat.Fourth;
console.log(details);
