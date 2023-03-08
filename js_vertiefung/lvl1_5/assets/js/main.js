console.log("hello");


const text = 'Susi is back from codingschool';


const susi = text.substring(0,5)
const is = text.substring(5,8)
const school = text.substring(text.indexOf("sch"))

// Braucht keiner aber wenn man es hat hat man es......
const susiIs = text.substring(0,5).concat(text.substring(5,8)).concat(text.substring(text.indexOf("sch")))
const br = "<br>"


document.write(susi+br+is+br+school+br+susiIs)