// get items from document

let buttonsubmit = document.querySelector(".main-index .main-section .icon-sub > span")

,inputdates = Array.from(document.querySelectorAll(".main-index .main-section .data-age > div > input"))

,place_age = Array.from( document.querySelectorAll(".main-index .main-section > .value-of-age > div > span:first-of-type"))

,error_1 = Array.from( document.querySelectorAll(".main-index .main-section .data-age > div > span:first-of-type"))

,error_2 = document.querySelectorAll(".main-index .main-section .data-age > div > span:last-of-type")

let datanow = new Date()// data now to horiznal

let the_restOf_lastyear = [] // the days of last year

let birthday = new Date()// date of pirth


let months = [31,28,31,30,31,30,31,31,30,31,30,31]// menu of months

let conctlastmonth = []// the number of month to last year

let theEge_of_year =""

let theEge_of_day =""

let theEge_of_month =""

let indexofmon = ""// number of month to pirth month

let place_age_1 = place_age[0].children

let place_age_2 = place_age[1].children

let place_age_3 = place_age[2].children
console.log(place_age[0].className === "er")

// event on click submit
buttonsubmit.onclick = () =>{
    inputdata(inputdates)

    checkdatebirthday()
}

// function for data of dates
function inputdata(inp){
    // check if input,va
    inp[1].value !== ""? indexofmon = inp[1].value - 1:""

    // check if input,value is not impety
    inp.forEach((v) =>{
        if(v.value === ""){
            v.parentElement.children[2].classList.add("error-1")
        }else{
            v.parentElement.children[2].classList.remove("error-1")
        }
    })
}


function checkdatebirthday(){
    if(inputdates[0].value > months[indexofmon]){
        inputdates[0].parentElement.children[3].classList.add("error-2")
    }else{ inputdates[0].parentElement.children[3].classList.remove("error-2")}
    if(inputdates[1].value > 12){
        inputdates[1].parentElement.children[3].classList.add("error-2")
    }else{ inputdates[1].parentElement.children[3].classList.remove("error-2")}
    if(inputdates[2].value > datanow.getFullYear()){
        inputdates[2].parentElement.children[3].classList.add("error-2")
    }else{ inputdates[2].parentElement.children[3].classList.remove("error-2")}
    error_1.forEach((e) =>{
        if(e.classList.contains("error-1")){
            error_1[0].parentElement.children[0].classList.add("error")
            error_1[0].parentElement.children[1].classList.add("error")
            error_1[1].parentElement.children[0].classList.add("error")
            error_1[1].parentElement.children[1].classList.add("error")
            error_1[2].parentElement.children[0].classList.add("error")
            error_1[2].parentElement.children[1].classList.add("error")
        }else{
            error_1[0].parentElement.children[0].classList.remove("error")
            error_1[0].parentElement.children[1].classList.remove("error")
            error_1[1].parentElement.children[0].classList.remove("error")
            error_1[1].parentElement.children[1].classList.remove("error")
            error_1[2].parentElement.children[0].classList.remove("error")
            error_1[2].parentElement.children[1].classList.remove("error")
        }
    })
    error_2.forEach((p) =>{
        if(p.classList.contains("error-2")){
            error_2[0].parentElement.children[0].classList.add("error")
            error_2[0].parentElement.children[1].classList.add("error")
            error_2[1].parentElement.children[0].classList.add("error")
            error_2[1].parentElement.children[1].classList.add("error")
            error_2[2].parentElement.children[0].classList.add("error")
            error_2[2].parentElement.children[1].classList.add("error")
            
        }
    })

    inputdates.forEach((e) =>{
    // check if input have classname = error
    if(e.className === "error"){
        place_age[0].innerHTML =  `<i class="fa fa-minus"></i> <i class="fa fa-minus"></i>`
        place_age[1].innerHTML = `<i class="fa fa-minus"></i> <i class="fa fa-minus"></i>`
        place_age[2].innerHTML = `<i class="fa fa-minus"></i> <i class="fa fa-minus"></i>`
    }else{
        //input value of pirth day
        birthday.setDate(inputdates[0].value)
        birthday.setMonth(indexofmon)
        birthday.setFullYear(inputdates[2].value)

        // number of years of age
        theEge_of_year = Math.floor((datanow - birthday) / 1000 / 60 / 60 / 24 / 365)
        
        the_restOf_lastyear = (datanow - birthday) / 1000 / 60 / 60 / 24 % 365// the rest of days

        theEge_of_month = Math.floor(the_restOf_lastyear / 30)//numbe of monthe for age

        conctlastmonth = []

        // number of days
        for(let i = 0; i < theEge_of_month; i++){
            conctlastmonth = conctlastmonth.concat(months[i])
        }
        conctlastmonth = conctlastmonth.reduce((a,b) => a + b)
        theEge_of_day = the_restOf_lastyear - conctlastmonth

        place_age[0].innerHTML = theEge_of_year// number years
        place_age[1].innerHTML = theEge_of_month// number months
        place_age[2].innerHTML = theEge_of_day// number days
    }
    })
}
