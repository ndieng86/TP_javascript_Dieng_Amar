$(document).ready(function() {
    $( "#tabs" ).tabs();
});
$(document).ready(function() {
	$( "#tabs" ).tabs();
    $('#foot_en_cours').click(function() {
        $('.foot_encours').show();
		$('.basket_encours').hide();
		$('.tennis_encours').hide();
		$('.handball_encours').hide();
		$('.foot_resultat').hide();
		$('.basket_resultat').hide();
		$('.tennis_resultat').hide();
		$('.handball_resultat').hide();
		$('.foot_avenir').hide();
		$('.basket_avenir').hide();
		$('.tennis_avenir').hide();
		$('.handball_avenir').hide();
        
    })
     $('#basket_en_cours').click(function() {
        $('.foot_encours').hide();
		$('.basket_encours').show();
		$('.tennis_encours').hide();
		$('.handball_encours').hide();
		$('.foot_resultat').hide();
		$('.basket_resultat').hide();
		$('.tennis_resultat').hide();
		$('.handball_resultat').hide();
		$('.foot_avenir').hide();
		$('.basket_avenir').hide();
		$('.tennis_avenir').hide();
		$('.handball_avenir').hide();
    })
	 $('#tennis_en_cours').click(function() {
        $('.foot_encours').hide();
		$('.basket_encours').hide();
		$('.tennis_encours').show();
		$('.handball_encours').hide();
		$('.foot_resultat').hide();
		$('.basket_resultat').hide();
		$('.tennis_resultat').hide();
		$('.handball_resultat').hide();
		$('.foot_avenir').hide();
		$('.basket_avenir').hide();
		$('.tennis_avenir').hide();
		$('.handball_avenir').hide();
        
    })
	 $('#handball_en_cours').click(function() {
        $('.foot_encours').hide();
		$('.basket_encours').hide();
		$('.tennis_encours').hide();
		$('.handball_encours').show();
		$('.foot_resultat').hide();
		$('.basket_resultat').hide();
		$('.tennis_resultat').hide();
		$('.handball_resultat').hide();
		$('.foot_avenir').hide();
		$('.basket_avenir').hide();
		$('.tennis_avenir').hide();
		$('.handball_avenir').hide();
    })
	 $('#foot_resultats').click(function() {
        $('.foot_encours').hide();
		$('.basket_encours').hide();
		$('.tennis_encours').hide();
		$('.handball_encours').hide();
		$('.foot_resultat').show();
		$('.basket_resultat').hide();
		$('.tennis_resultat').hide();
		$('.handball_resultat').hide();
		$('.foot_avenir').hide();
		$('.basket_avenir').hide();
		$('.tennis_avenir').hide();
		$('.handball_avenir').hide();
        
    })
     $('#basket_resultats').click(function() {
        $('.foot_encours').hide();
		$('.basket_encours').hide();
		$('.tennis_encours').hide();
		$('.handball_encours').hide();
		$('.foot_resultat').hide();
		$('.basket_resultat').show();
		$('.tennis_resultat').hide();
		$('.handball_resultat').hide();
		$('.foot_avenir').hide();
		$('.basket_avenir').hide();
		$('.tennis_avenir').hide();
		$('.handball_avenir').hide();
    })
	 $('#tennis_resultats').click(function() {
        $('.foot_encours').hide();
		$('.basket_encours').hide();
		$('.tennis_encours').hide();
		$('.handball_encours').hide();
		$('.foot_resultat').hide();
		$('.basket_resultat').hide();
		$('.tennis_resultat').show();
		$('.handball_resultat').hide();
		$('.foot_avenir').hide();
		$('.basket_avenir').hide();
		$('.tennis_avenir').hide();
		$('.handball_avenir').hide();
        
    })
	 $('#handball_resultats').click(function() {
        $('.foot_encours').hide();
		$('.basket_encours').hide();
		$('.tennis_encours').hide();
		$('.handball_encours').hide();
		$('.foot_resultat').hide();
		$('.basket_resultat').hide();
		$('.tennis_resultat').hide();
		$('.handball_resultat').show();
		$('.foot_avenir').hide();
		$('.basket_avenir').hide();
		$('.tennis_avenir').hide();
		$('.handball_avenir').hide();
    })
	$('#foot_a_venir').click(function() {
        $('.foot_encours').hide();
		$('.basket_encours').hide();
		$('.tennis_encours').hide();
		$('.handball_encours').hide();
		$('.foot_resultat').hide();
		$('.basket_resultat').hide();
		$('.tennis_resultat').hide();
		$('.handball_resultat').hide();
		$('.foot_avenir').show();
		$('.basket_avenir').hide();
		$('.tennis_avenir').hide();
		$('.handball_avenir').hide();
        
    })
     $('#basket_a_venir').click(function() {
        $('.foot_encours').hide();
		$('.basket_encours').hide();
		$('.tennis_encours').hide();
		$('.handball_encours').hide();
		$('.foot_resultat').hide();
		$('.basket_resultat').hide();
		$('.tennis_resultat').hide();
		$('.handball_resultat').hide();
		$('.foot_avenir').hide();
		$('.basket_avenir').show();
		$('.tennis_avenir').hide();
		$('.handball_avenir').hide();
    })
	 $('#tennis_a_venir').click(function() {
        $('.foot_encours').hide();
		$('.basket_encours').hide();
		$('.tennis_encours').hide();
		$('.handball_encours').hide();
		$('.foot_resultat').hide();
		$('.basket_resultat').hide();
		$('.tennis_resultat').hide();
		$('.handball_resultat').hide();
		$('.foot_avenir').hide();
		$('.basket_avenir').hide();
		$('.tennis_avenir').show();
		$('.handball_avenir').hide();
        
    })
	 $('#handball_a_venir').click(function() {
        $('.foot_encours').hide();
		$('.basket_encours').hide();
		$('.tennis_encours').hide();
		$('.handball_encours').hide();
		$('.foot_resultat').hide();
		$('.basket_resultat').hide();
		$('.tennis_resultat').hide();
		$('.handball_resultat').hide();
		$('.foot_avenir').hide();
		$('.basket_avenir').hide();
		$('.tennis_avenir').hide();
		$('.handball_avenir').show();
    })
})
; 