console.log("hello motherfucker");


const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "and";


// Sam is going to school and to the movie theater
// Sam is going to movie theater
// Susi and Sam are going to school
// Susi and Sam are going to gym and to the movie theater
// Susi is going to school and to the movie theater


let egall = text1.slice(0, text1.indexOf("co"))

let egall2 = egall.replace("is", "are")

let egall3 = egall.replace("Sam", "Susi")

console.log(egall2);

document.write(egall.concat(text1.slice(text1.indexOf("school")))
        .concat(" ")
        .concat(text3)
        .concat(" to the movie theater")
        .concat("<br>")
        .concat(egall)
        .concat(" movie theater")
        .concat("<br>")
        .concat(text2)
        .concat(" ")
        .concat(text3)
        .concat(" ")
        .concat(egall2.concat(text1.slice(text1.indexOf("school"))))
        .concat("<br>")
        .concat(text2)
        .concat(" ")
        .concat(text3)
        .concat(" ")
        .concat(egall2)
        .concat(" gym ")
        .concat(text3)
        .concat(" to the movie theater <br>")
        .concat(egall3.concat(text1.slice(text1.indexOf("school"))))
        .concat(" ")
        .concat(text3)
        .concat(" to the movie theater ")  
)