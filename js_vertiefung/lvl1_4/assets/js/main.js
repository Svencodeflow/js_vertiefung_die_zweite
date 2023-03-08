console.log("Hello");

const A = 'Susi is going to codingschool';

document.write(A.slice(0, A.indexOf("is"))
    .concat("<br>")
    .concat(A.slice(A.indexOf("is"), A.indexOf("g")))
    .concat("<br>")
    .concat(A.slice(A.indexOf("is"), A.indexOf("c")).concat(A.slice(A.indexOf("scho"))))
    .concat("<br>")
    .concat(A.slice(A.indexOf("scho")))
    .concat("<br>")
    .concat(A.slice(0, A.indexOf("going")).concat(A.slice(A.indexOf("scho"))))
    .concat("<br>")
)



const susi = A.slice(0, A.indexOf("is"))
const is = A.slice(A.indexOf("is"), A.indexOf("g"))
const isGoing = A.slice(A.indexOf("is"), A.indexOf("c")).concat(A.slice(A.indexOf("scho")))
const school  = A.slice(A.indexOf("scho"))

//muss nicht ist nice braucht keiner 
const susiIs = A.slice(0, A.indexOf("going")).concat(A.slice(A.indexOf("scho")))
const br = "<br>"


document.write(susi+br+is+br+isGoing+br+school+br+susiIs)