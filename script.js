// I used the Dom Eventlistener to add a "window obdject" to my website
document.addEventListener("DOMContentLoaded", function() {
    var NameButton = document.getElementById("NameButton"); // using the id element "NameButton" which was added to the html file 
    var Output = document.getElementById("Output"); // using the id element "Output" which was added to the html file
// using the "click" as my type of listener event
    NameButton.addEventListener("click", function() {
        var name = prompt("Please Enter Your Name:"); // Prompting the user to enter their name after clicking
        if (name) {
            Output.textContent = "Hello, " + name + "!";
        } else {
            Output.textContent = ""; // clear the output if no name is entered 
        }
    });
});

// using the enlargeimage as a function 
function enlargeImage() {
    var img = document.getElementById("myImage"); //Getting the image as an element to use

    // Creating the new image element which will be used for the enlarged version 
    var enlargedImage = document.createElement("img");
    enlargedImage.id = "enlargedImage";
    enlargedImage.src = img.src;
    enlargedImage.alt = img.alt;

    // Placing and resizing the new image 
    enlargedImage.style.position = "fixed";
    enlargedImage.style.top = "0";
    enlargedImage.style.right = "0";
    enlargedImage.style.bottom = "0"
    enlargedImage.style.left = "0"
    enlargedImage.style.margin = "auto"
    enlargedImage.style.maxWidth = "100%";
    enlargedImage.style.maxHeight = "100%";
    enlargedImage.style.zIndex = "9999";

    //Using event listenr to make the image clickable and also closeable when clicked
    enlargedImage.addEventListener("click", function() {
        enlargedImage.remove(); 
    });

    // The new enlarged element (which is the child element) is "appended" or attached onto the html file
    document.body.appendChild(enlargedImage);
}

// Used the function to highlight navigation item on mouseover and align the link colour with the website
function highlightNavItem(item) {
    item.style.color = "rgb(255, 0, 225)"; }
// Used the function to unhighlight navigation item on mouseout, which returned to link to the standard webstie colour
function unhighlightNavItem(item) {
    item.style.color = ""; }
// Used the function to show submenu on mouseover, which should the menu items 
function showSubMenu() {
    var subMenu = document.getElementById("subMenu");
    subMenu.style.display = "block";}
// Used the function to hide submenu when the mouseout
function hideSubMenu() {
    var subMenu = document.getElementById("subMenu");
    subMenu.style.display = "none";}


// Feedback Form

// This function will capture the form submission and data
function handleSubmit(event) {
    // Here the function will retreiev the data from the form
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        age: document.querySelector('input[name="age"]:checked').value,
        industry: [],
        message: document.getElementById("message").value,
        myfile: document.getElementById("myfile").value
    };
    // As the industry section is checkboxes here the mutiple selection data will be retrevied from
    var industryCheckboxes = document.querySelectorAll('input[name="industry"]:checked');
    industryCheckboxes.forEach(function(checkbox) {
        formData.industry.push(checkbox.value);
    });
    // This stores the data infromation and turns it into a string to be stored in a local storage
    localStorage.setItem("formData", JSON.stringify(formData));}
