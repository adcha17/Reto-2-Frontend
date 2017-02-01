$(function () {

	$('#btn-init').click(function(event) {
		var anuncio = $('.anuncio');
		
		anuncio.animate({height: '240px', width: '240px',opacity:'0.4'}, "slow",function () {
			anuncio.css('display', 'none');
			$('#html').removeAttr('id');
			$('.contenido').css('display', 'inline');
		});

		
	});
	$('.item').click(function(event) {
		var href = $(this).attr('href');
		$('.active').removeClass('active');
		$(href).addClass('active');
	});
	$('#evt-hide').click(function(event) {
		$('#text-hide').hide(400);
	});
	$('#evt-show').click(function(event) {
		$('#text-show').show(400);
	});
	$('#evt-toogle').click(function(event) {
		$('#text-toogle').toggle(400);
	});

	$('#evt-click').click(function(event) {
		alert('Hiciste un click');
	});
	$('#evt-dblclick').dblclick(function(event) {
		alert('Hiciste un doble click');
	});
	$('#evt-enter-leave').mouseenter(function(event) {
		$('#enter-leave').text("Usaste el evento mouseenter.");
	});
	$('#evt-enter-leave').mouseleave(function(event) {
		$('#enter-leave').text("Usaste el evento mouseleave.");
	});
	$('#evt-focus-blur').focus(function(event) {
		$('#evt-focus-blur').val('Usaste el evento Focus');
	});
	$('#evt-focus-blur').blur(function(event) {
		$('#evt-focus-blur').val('Usaste el evento blur');
	});
	$('#evt-fade').click(function(event) {
		
		$("#div1").fadeIn("slow");
		$("#div2").fadeOut("slow");
		$("#div3").fadeToggle(3000);
		$("#div4").fadeTo("slow",0.7);
	});
	$("#evt-slide-toggle").click(function(){
		$("#panel").slideToggle("slow");
	});
	$('#evt-animate').click(function(event) {
		$( "#block-animate" ).animate({
			width: "70%",
			opacity: 0.4,
			marginLeft: "0.6in",
			fontSize: "3em",
			borderWidth: "10px"
		}, 1500 );
	});
	$('#evt-stop').click(function(event) {
		$( "#block-animate" ).stop();
	});
	$('#evt-text').click(function(event) {
		alert($('#text-html').text());
	});
	$('#evt-html').click(function(event) {
		alert($('#text-html').html());
	});
	$('#evt-val').click(function(event) {
		alert($('#input-id').val());
	});
	$('#evt-attr').click(function(event) {
		alert($('#input-id').attr('id'));
	});

	$('#evt-append').click(function(event) {
		
		$('#text-app-rem').append('<h1 id="h1-text">TEXTO</h1>');
		event.preventDefault();
	});
	$('#evt-remove').click(function(event) {
		$('#h1-text').remove();
	});
	$('#evt-css').click(function(event) {
		$('#css-text').css({'background':'yellow','text-align':'center'});		
	});
	$('#evt-children').click(function(event) {
		alert($('#padre').children('#hijo').attr('data-text'));
	});
	$('#evt-parent').click(function(event) {
		alert($('#hijo').parent().attr('data-text'));
	});
	
//fin jquery	
});
