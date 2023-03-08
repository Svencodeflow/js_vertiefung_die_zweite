const text = "Sam is going to codingschool";

let upper = text.slice(text.indexOf("S"),text.indexOf("cod")).concat(text.slice(text.indexOf("school")))
upper = upper.toUpperCase()

let under = upper
under = under.toLowerCase()

let samSchool = text.slice(text.indexOf("S"), text.indexOf("i"))
samSchool = samSchool.toUpperCase()
samSchool += text.slice(text.indexOf("is"), text.indexOf("c"))
samSchool += text.slice(text.indexOf("sch")).toUpperCase()

let isGoing = text.slice(text.indexOf("S"), text.indexOf("i")).toLowerCase()
isGoing += text.slice(text.indexOf("i"), text.indexOf("c")).toUpperCase()
isGoing += text.slice(text.indexOf("scho"))

let aAb = text.slice(0, 4)
aAb += text.slice(4,5).toUpperCase()
aAb += text.slice(5,6)
aAb += text.slice(6,8).toUpperCase()
aAb += text.slice(8,12)
aAb += text.slice(12, 14).toUpperCase()
aAb += text.slice(14, text.indexOf("c"))
aAb += text.slice(text.indexOf("sc"), text.indexOf("ch")).toUpperCase()
aAb += text.slice(text.indexOf("chool"))

const br = "<br>"

document.write(upper+br+under+br+samSchool+br+isGoing+br+aAb)