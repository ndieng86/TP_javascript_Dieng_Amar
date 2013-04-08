 $(document).ready(function(){
	$("#choix option[value='newsletter']").click(function() {
        $('.forum').hide();
        $('.newsletter').show();
    })
   $("#choix option[value='forum']").click(function() {
        $('.forum').show();
        $('.newsletter').hide();
    })
    
    $("#commentForm").validate({
    rules: {
     "user[name]": {
       required: true,
       minlength: 2
     },
	 "user[prenom]": {
       required: true,
       minlength: 2
     },
     "user[email]": {
       required: true,
       email: true
     },
      "user[url]": {
       required: true,
       url: true
    },
    pseudo: {
       required: true,
       minlength: 6
     },
	pass: {
       required: true,
       minlength: 6
     }
   },
   messages: {
     "user[name]": {
       required: "Le nom est requis",
       minlength: jQuery.format("Votre nom doit faire au moins {0} caractères!")
     },
	 "user[prenom]": {
       required: "Le prénom est requis",
       minlength: jQuery.format("Votre prénom doit faire au moins {0} caractères!"),
     },
     "user[email]": {
       required: "Le mail est requis",
       email: jQuery.format("Veuillez saisir un email valide")
     },
     "user[name]": {
       required: "Le nom est requis",
       minlength: jQuery.format("Votre nom doit faire au moins {0} caractères!")
     },
     "user[url]": {
        required: "Le url est requis",
		url: jQuery.format("Veuillez saisir un url valide")
     },
     pseudo: {
        required: "Le message est requis",
		minlength: jQuery.format("Le pseudo doit contenir au moins {0} caractères!")
     },
	pass: {
        required: "Le message est requis",
		minlength: jQuery.format("Le mot de passe doit contenir au moins {0} caractères!")
     }
    }
   });
    
  });

