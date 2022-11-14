console.log(document);
let h1 = document.createElement("h1");
h1.innerHTML = "Lab12 Assignment";
document.body.appendChild(h1);
h1.style.color = "blue";

let a = document.createElement("hr"); 
a.setAttribute("width", "100%");
document.body.appendChild(a);

let h2 = document.createElement("h2");
h2.innerHTML = "Task";
h2.style.color = "red";
document.body.appendChild(h2);

let p1 = document.createElement("p");
p1.innerText = "In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(p1);

function arr(arr) {
  var ul = document.createElement('ul'), li;
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      li.appendChild(arr(arr[i]));
    } else {
      li = document.createElement('li');
      li.appendChild(document.createTextNode(arr[i]));
      ul.appendChild(li);
    }
  }
  return ul;
}
var myArray = ['find elements in the DOM (5 points)', 'create/add/remove elements (5 points)', 'change content of the elements (5 points)', 'change styles of the elements (5 points)', 'change attributes of the elements (5 points)', 'change classes of the elements (5 points)'];

document.body.appendChild(arr(myArray));

let p2 = document.createElement("p");
p2.innerText = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this link.";
document.body.appendChild(p2);

let b = document.createElement("hr");
b.setAttribute("width", "100%");
document.body.appendChild(b);

let h3 = document.createElement("h2");
h3.innerHTML = "Submission";
h3.style.color = "red";
document.body.appendChild(h3);

let p3 = document.createElement("p");
p3.innerText = "To submit your work, follow these instructions:";
document.body.appendChild(p3);

function arr2(arr) {
  var ul = document.createElement('ul'), li;
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      li.appendChild(arr2(arr[i]));
    } else {
      li = document.createElement('li');
      li.appendChild(document.createTextNode(arr[i]));
      ul.appendChild(li);
    }
  }
  return ul;
}
var myArray = ['Create a new repository on Github, named lab12 (1 point).', 'Clone this repository to your local machine and work inside it.', 'Create a new HTML file, called index.html, which has only one <h1> tag with "Hello, World!" message (1 point).', 'Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).', 'Link this main.js file to your index.html file (Note: place your script at the end of the body section).', 'Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).', 'After you finish your work, submit it to the Github (2 points).'];
document.body.appendChild(arr2(myArray));

let c = document.createElement("hr"); 
c.setAttribute("width", "100%");
document.body.appendChild(c);

console.log(document);