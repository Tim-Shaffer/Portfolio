// Initialize Firebase
var config = {
    apiKey: "AIzaSyCzaFQ5xnOyq0EeOcwPiGJUopzH1rywqQg",
    authDomain: "my-awesome-project-e3117.firebaseapp.com",
    databaseURL: "https://my-awesome-project-e3117.firebaseio.com",
    projectId: "my-awesome-project-e3117",
    storageBucket: "my-awesome-project-e3117.appspot.com",
    messagingSenderId: "1000192780325",
    appId: "1:1000192780325:web:8fe8d950b0f05c824737cc"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();
// Create a variable to the contact reference
var dataContact = database.ref("/Portfolio/Contact");

// --------------------------------------------------------------------------------------
// This function handles events where the "submit" button is clicked  
// --------------------------------------------------------------------------------------
$("#submit").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box and trim the spaces
    var contactName = capital_letter($("#name").val().trim());
    var contactEM = $("#email").val().trim();
    var contactMsg = $("#comments").val().trim();

    // after grabbing the information, remove it from the page 
    $("#name").val("");
    $("#email").val("");
    $("#comments").val("");

    // add information to the database
    addNewContact(contactName, contactEM, contactMsg);

});
// --------------------------------------------------------------------------------------
// end of function triggered with the add button
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// function to capitalize the text before saving it.
// Found this function on W3 schools - https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-50.php
// --------------------------------------------------------------------------------------
function capital_letter(str) {
    // separate the str parameter into pieces based on the 'space' separator
    str = str.split(" ");

    // traverse the string pieces and convert the first character of each word to Upper Case and then concatenate the rest of the string.
    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    // return the capitalize string put back together with the 'space' separator.
    return str.join(" ");
};
// --------------------------------------------------------------------------------------
// end of the capital_letter() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
//  function to add Contacts to the Contact reference in the DB
// --------------------------------------------------------------------------------------
function addNewContact(name, em, msg) {
    
    dataContact.push({
        Name: name,
        EMail: em,
        Comment: msg,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,
    });

};
// --------------------------------------------------------------------------------------
//  end of addNewMsg() function
// --------------------------------------------------------------------------------------