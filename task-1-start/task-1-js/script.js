window.onload = setup;

/** function setup */
function setup(){
console.log("we are a go!")
/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
/*** START PART ONE ACCESS */ 
/* 1: all paragraph elements */
/***CODE */ console.log(document.getElementsByTagName("p"));
/***OUTPUT: 
 * HTMLCollection { 0: p#1, 1: p#2.img-descript, 2: p#3.img-descript, 3: p#4.img-descript, 4: p#5.img-descript, 5: p#6.img-descript, 6: p#7.img-descript, 7: p#8.img-descript, 8: p#9.img-descript, … }
 */



/*************************************** */
/* 2: only the first paragraph element */
/***CODE */ console.log(document.querySelector("p"));
/***OUTPUT: 
 * <p id="1">
 */


/*************************************** */
/* 3: all elements with the class inner-container */
/***CODE */     console.log(document.getElementsByClassName("inner-container"));
/***OUTPUT: 
 * HTMLCollection { 0: div.inner-container, 1: div.inner-container, 2: div.inner-container, 3: div.inner-container, 4: div.inner-container, 5: div.inner-container, 6: div.inner-container, 7: div.inner-container, length: 8 }
 */


/*************************************** */
/* 4: the last image element inside the element that has the class img-container */
/***CODE */ console.log(document.querySelectorAll(".img-container")[document.querySelectorAll(".img-container").length-1]);
/***OUTPUT: 
 * <div class="img-container">
 */


/*************************************** */
/* 5A: all h2 elements */
/* 5B: length of the list in 5A */
/* 5C: the text content of the first element in the list from 5A */
/***CODE */console.log(document.getElementsByTagName("h2"));
           console.log(document.getElementsByTagName("h2").length);
           console.log(document.querySelector("h2").textContent);
/***OUTPUT: 
 * 
 * 1
 *  The header of this fancy page
 */


/*************************************** */
/* 6: the element with id name parent */
/***CODE */console.log(document.getElementById("parent"));
/***OUTPUT: 
 * <section id="parent">
 */

/*************************************** */
/*** END PART ONE ACCESS */ 


// /*************************************** */
// /*** START PART TWO MODIFY */ 
// /*************************************** */
// /* 1: Select the first paragraph and replace the text within the paragraph... */
// /***CODE */
// document.querySelector("p").textContent='New text in paragraph one: text changed by Junes Dreyfus on the following date: 21/01/2025.';
// /*************************************** */
// /* 2: Select all elements in the HTML that have the class name content-container
//  and change the background color ... of first and second ...*/
// /***CODE */
// //this is no bueno/
// // console.log(document.getElementsByClassName("content-container"));
// // document.querySelector(".content-container").style.background = "#FFA500";
// // document.querySelector('.content-container').id= ["1"].style.background = "#800080";

// //this is the actual result/
// let contentContainers = document.querySelectorAll('.content-container');
// contentContainers[0].style.backgroundColor="#FFA500";
// contentContainers[1].style.backgroundColor="#800080";
// /*************************************** */
// /* 3: Change the src element of the first image element on the page to be ...
// /***CODE */
// document.querySelectorAll("img")[0].setAttribute("src","task-1-images/seven.png") 
// /*************************************** */
// /* 4: Select the third paragraph element on the page and 
// replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
// /***CODE */
// let thirdParagraph = document.querySelectorAll('p')[2]

// let h2element = document.createElement('h2');

// thirdParagraph.textContent = "test123";
// thirdParagraph.appendChild(h2element);
// /*************************************** */
// /* 5: Select the fourth paragraph element on the page and 
// add to the existing content an h2 element containing the text `TEST 123`
// /***CODE */
// let fourthParagraph = document.querySelectorAll('p')[3];

// h2element.textContent = "TEST 123";
// fourthParagraph.appendChild(h2element);

// /*************************************** */
// /* 6: Select the fifth paragraph element on the page and add to the existing content 
// an img element that holds `one.png`, and add the class newStyle to said paragraph element.
// /***CODE */

// let fifthParagraph = document.querySelectorAll('p')[4];
// let imgelement = document.createElement('img');

// imgelement.setAttribute("src","task-1-images/one.png");
// fifthParagraph.appendChild(imgelement);

// fifthParagraph.classList.add("newStyle");
// /*************************************** */
// /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
// then access all elements with class name inner-container and save to a variable called `innerContainers`. 
// Next, iterate over the colors array, and for each color: 
// assign the element from innerContainers variable with the same index 
// (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
// a background using that color.
// /***CODE */
// let colors = ['red','blue','green','orange'];
// let innerContainers = document.querySelectorAll('.inner-container');

// innerContainers[0].style.backgroundColor=colors[0];
// innerContainers[1].style.backgroundColor=colors[1];
// innerContainers[2].style.backgroundColor=colors[2];
// innerContainers[3].style.backgroundColor=colors[3];
// //I'm sure there's a way of doing that with a loop/
// /*************************************** */
// /*** END PART TWO MODIFY */ 


/*************************************** */
/*** START PART THREE CREATE */ 
/*************************************** */
/* 1: NEW PARAGRAPHS */
/* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
/* 1B: Create a function:function customCreateElement(parent){ //body } */
/* 1C:  In the body of customCreateElement create a new parargraph element*/
/* 1D:  Set the text of this element to be : `using create Element`*/
/* 1E:  Set the background of this paragraph element to be green */
/* 1F:  Set the color of the text in this paragraph element to be white */
/* 1G: Append this new element to the parent variable within the function. */
/* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
passing the current allPTagsThree element as the parent with each iteration.*/
/***CODE */
let allPTagsThree = document.querySelectorAll('p');

function customCreateElements(parent){
    let newP = document.createElement("p");
    newP.textContent = `using create Element`;
    newP.style.backgroundColor = "green";
    newP.style.color = "white";
    parent.appendChild(newP);
}

customCreateElements(allPTagsThree[0]);
customCreateElements(allPTagsThree[1]);
customCreateElements(allPTagsThree[2]);
customCreateElements(allPTagsThree[3]);
customCreateElements(allPTagsThree[4]);
customCreateElements(allPTagsThree[5]);
customCreateElements(allPTagsThree[6]);
customCreateElements(allPTagsThree[7]);
customCreateElements(allPTagsThree[8]);


//i feel like my understanding of any of this is 99% empirical but hey!/
//I will do a loop if I'm in the mood by the end, if there is no loop, please assume the worst/
/***EXPLANATION::
 * 
 * Not sure about this part of the exercice.
 * I created a function that would create a new paragraph with custom properties (color, background and text)
 * then demonstrated how it could be added to preexisting paragraphs (the latin phrase thing)
 * It is displayed at the end with all of its custom properties = new separate paragraphs are being added to the appropriate place each time the function is called
 * That said I'm not sure about the use of "parent", is it just a random placeholder variable or does js recognize it ? I've made some tests to better understand but still not sure.
 * I made a little scream of joy when this worked first try.
 */

/*************************************** */
/* 2: GRID OF BOXES */
/* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
/* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
/* 2C:Then append this new element to the parent variable within the function. 
/* 2D:Finally, return</code> this new element */
/* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
    Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
    Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
/* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
    Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
    in a variable i.e. returnedDiv. 
    Set the style (left and top) to the of this element to 
    the necessary x and y position (use the counter variables in the for nested for loop to 
    calculate the new positions.
/* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
    and otherwise let it have a background of purple.</li>
/* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
    otherwise lat it have the content `ODD`.*/

/***CODE */

function customNewBoxCreate(parent){
    let newDiv = document.createElement("div");
    newDiv.classList.add("testDiv");
    parent.appendChild(newDiv);
    return newDiv
}

const parentElement1 = document.getElementById('new-grid');

let size = 45
for (let j = 0; j < 10; j+=1) {
    for (let i = 0; i < 10; i+=1) {
        const returnedDiv = customNewBoxCreate(parentElement1);
        returnedDiv.style.left = `${i* size}px`;
        returnedDiv.style.top = `${j* size}px`;
    }
}

console.log(document.getElementsByClassName("testDiv"));


/***EXPLANATION::
 * The console returns 100 elements, one for each cell of the page
 * Each cell is created with the class testDiv (they're all new div created under the variable "newDiv" to which i've added the class (.testDiv))
 * When I ask it to select all of the elements with a "testDiv" class, they all fit this criteria.
 * Full disclosure, I cross referenced my code with chatGPT, which allowed me to catch a problem earlier
 *  mainly the idea of writing `${}px` rather than just regular old 'size*j'
 * or even '${j*size}'
 * The code did end up showing the grid afterward, I just needed help with tbe best way to 'phrase' what i was looking for..
 */

/*************************************** */
/* 3: GRID OF BOXES II */

/* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
    USE the same customNewBoxCreate function..., the only difference is that the parent element 
    for each of these new divs is the element whose id is `new-grid-three`. */
/* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
    when it is a column where the remainder is 1 or when the remainder is 2 ... 
    HINT:: look up the % operator.. */
/* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
        then the second a background of orange and the third yellow. */
/*  3D: Finally, let each div contain the text content representing the associated remainder 
    when dividing by three. */

/***CODE */


let parentElement2 = document.getElementById('new-grid-three');

for (let j = 0; j < 10; j+=1) {
    for (let i = 0; i < 10; i+=1) {
        const returnedDiv = customNewBoxCreate(parentElement2);

        returnedDiv.style.left = `${i* size}px`;
        returnedDiv.style.top = `${j* size}px`;

        if (i % 3 === 0) {
            returnedDiv.style.backgroundColor = 'red';
            returnedDiv.textContent = '0';
        } else if (i % 3 === 1) {
            returnedDiv.style.backgroundColor = 'orange';
            returnedDiv.textContent = '1';
        } else if (i % 3 === 2){
            returnedDiv.style.backgroundColor = 'yellow';
            returnedDiv.textContent = '2';
        }
    }
}


/***EXPLANATION::
 * I had to trust the process
 * Do I need to provide an explanation here ?
 * I struggled with the concept of a remainder until i translated it in french
 * same with the results, I didn't understand why the 1st row would be having 0 remainder
 * until I realized it was row 0
 */

/*************************************** */
/*** END PART THREE CREATE */ 
/*************************************** */
}