//  # What is DOM ?
// => DOM stands for Document Object Model.
// => It's a programming interface provided by the browser that allows JavaScript to interact with HTML and CSS.
// => Think of the DOM as a tree structure where:
//    * Each HTML element (like <p>, <div>, etc.) is a node.
//    * The entire page is represented as an object that you can access, change, or delete.


//  # Common DOM Methods

//      Purpose	                       Method	                                Example

//  Get element by ID	       document.getElementById()	          document.getElementById("demo")                           (returns a single HTML element object)
//  Get elements by class	   document.getElementsByClassName()	  document.getElementsByClassName("btn")                    (returns a single HTML element object)
//  Get elements by tag	       document.getElementsByTagName()	      document.getElementsByTagName("input[type="password"]")   (returns a single HTML element object)
//  Query selector	           document.querySelector()	              document.querySelector("#demo")
//  Query selector for All	   document.querySelectorAll()	          document.querySelectorAll("#demo")                        (return a nodeList, not exactly array)
//  Change content	           element.innerHTML	                  myElement.innerHTML = "Hi!"
//  Change style	           element.style	                      myElement.style.color = "red"

//  # How to access Attribute in js ?
// => You can use DOM methods to work with attributes.

//  1. getAttribute()
// => Used to get the value of an attribute:
// Example :
const image = document.querySelector("img")
console.log(image.getAttribute("src"))  // "logo.png"

// 2. setAttribute()
// => Used to add or change an attribute:
// Example :
image.setAttribute("alt", "New Logo");
image.setAttribute("title", "Hover Text");

// 3. removeAttribute()
// => Used to remove an attribute:
// Example :
image.removeAttribute("width")

// 4. hasAttribute()
// => Returns true if the element has the given attribute:
// Example :
console.log(image.hasAttribute("src"))  // true
