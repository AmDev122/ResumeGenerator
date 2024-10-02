function addNewWEField(){
    // console.log("Add New Field")

    let newNode=document.createElement('textarea')
    newNode.classList.add("form-control")
    newNode.classList.add("weField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)

    let weOb=document.getElementById("we")
    let weAddButtonOb=document.getElementById("weAddButton")

    weOb.insertBefore(newNode, weAddButtonOb)
}


function addNewAQField() {

    let newNode=document.createElement('textarea')
    newNode.classList.add("form-control")
    newNode.classList.add("eqField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)

    let aqOb=document.getElementById("aq")
    let aqAddButtonOb=document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode, aqAddButtonOb)
}

//generating cv
function generatecv(){
    // console.log("generating cv")

    let nameField=document.getElementById("name-field").value

    let nameT=document.getElementById("nameT")

    nameT.innerHTML = nameField   //this is an example of DOM Manipulation

    //direct to template

    document.getElementById("nameT2").innerHTML = nameField

    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value

    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value

    //objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value

    //work field

    let wes=document.getElementsByClassName("weField") //this is an array which contains all work experiences
                                                      //weField is a  class

    let str=""

    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML=str


    //academic qualification

    
    let aqs=document.getElementsByClassName("eqField") //this is an array which contains all work experiences
                                                      //weField is a  class

    let str1=""

    for(let e of aqs)
    {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML=str1


    //we need to display the template and hide the main input page on clicking generate cv button

    document.getElementById("cv-form").style.display="none"
    document.getElementById("cv-template").style.display="block"
}


//printing cv

function printcv()
{
    window.print()
}