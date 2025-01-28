window.onload = setup;
/** function setup */

function setup(){
console.log("events!") 
// let introSection = document.querySelector("#intro");
//click is a keyword. Likes mouseClicked/
//this way of writing a function makes it only exist in this chunk of code. 
//It's an anonymous function, thus you can't reuse it outside/

// introSection.addEventListener("click",function(e){
//     console.log(this);
//     console.log(e)
  
//     this.style.background = `rgba(214, 110, 239, 0.5)`
//     //${} allows to output as a string the variable (this.id)
//     console.log(document.querySelector(`#${this.id} p`));
//     document.querySelector(`#${this.id} p`).style.background = `rgba(214, 110, 239 ,.75)`;

document.querySelector("#bubbleButton").addEventListener("click",function(){
    console.log("button clicked");
    let bubble =  document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = `${Math.random()*(window.innerWidth-200) }px`;
    bubble.style.top = `${Math.random()* (window.innerHeight-200) }px`;
//ceil ceiling, round or floor/
    let r = Math.ceil(Math.random()*255); //new Math.ceil
    let g =Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);

    bubble.style.background = `rgba(${r},${g},${b})`;
    document.getElementById("top-layer").appendChild(bubble)
})



let allSections = document.querySelectorAll(".mouseclick-active-section");
//go through each section and apply the event listener
for(let element of allSections ){
    //add to each element
    element.addEventListener("click",function(e){

                console.log('is in now active')
                let cssObj =  window.getComputedStyle(this, null);
                //get prop VALUE :: new
                let bgColor = cssObj.getPropertyValue("background-color");
                let backgroundColorArray = getColorObj(bgColor)
               if(this.getAttribute("custom-bool") === "inactive")
                {
                    //a:
                    this.style.background = `rgba(
                                                ${backgroundColorArray[0]},
                                                ${backgroundColorArray[1]},
                                                ${backgroundColorArray[2]},
                                                0.5)`
                    document.querySelector(`#${this.id} p`).style.background = `rgba(
                                                ${backgroundColorArray[0]},
                                                ${backgroundColorArray[1]},
                                                ${backgroundColorArray[2]},
                                                0.75)`
                    //mAKE active
                    this.setAttribute("custom-bool","active")
                }
                else
                {
                    console.log('is now active')
                    this.setAttribute("custom-bool","inactive")
                    this.style.background = `rgba(
                        ${backgroundColorArray[0]},
                        ${backgroundColorArray[1]},
                        ${backgroundColorArray[2]},
                        1.0)`

                    document.querySelector(`#${this.id} p`).style.background =""

                }

    })

} //end for loop

function getColorObj(inColor) {
    let substringColor = inColor.substring(
      inColor.indexOf("(") + 1,
      inColor.indexOf(")")
    );
    let rgbArray = [];
    rgbArray = substringColor.split(",");
    return rgbArray;
  }
}
