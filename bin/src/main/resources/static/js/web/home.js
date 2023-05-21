$(document).on("click", "#btnempezar", 
		function(){
	let usuario = $("#txtusuario").val();
	let password = $("#txtpassword").val();
	$("#lblmensaje").text("Usuario : "+usuario +" - Contraseña : " +password);
	$("#modalempezar").modal("show");
})