
/// Firebase

// Initializes firebase.
var config = {
  authDomain: "chatbot1-4be7c.firebaseapp.com",
  databaseURL: "https://chatbot1-4be7c.firebaseio.com",
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

// TODO: Update the below messages model with the data from firebase at reference "messages_list"".

/// Models 
// TODO: Empty this temporary data.`
var messages = [{text: "Hello World", user: "Ryan"},{text: "Hello Ryan", user: "World"}];


/// Controllers
$( document ).ready(function() {
  var html = messages.map((msg) => message(msg.text, msg.user)).join('');
  $("#messages-body").append(html);
});

$("#b_send").click(function() {
  var message = {text: $('#input-message').val(), user:$('#input_username').val()};
  
  // TODO: Add the above message to firebase.
});

var updateList = function() {
  $("#messages-body").empty();
  var html = messages.map((msg) => message(msg.text, msg.user)).join('');
  $("#messages-body").append(html);  
} 

/// Views
const message = (message, name ) => `
	<div class="row">
		<div class="col-auto">
			<p class="message-name justify-left">${name}</p>
		</div>
		<div class="col">
			<div class="container message-body-container">
      <div class="p-2 mb-2 bg-primary text-white rounded"> ${message}  </div>
			</div>
		</div>
	</div>
`;