$("li").click(function() {
	/* Changement de couleur lors d'un clic sur une case */
	$(this).siblings().removeClass("selected");
	$(this).toggleClass("selected");
	/* Définition des points correspondants lors d'un clic sur une case */
	var introduction=$("#introduction .selected").index();
	var partie1=$("#partie-1 .selected").index();
	var partie2=$("#partie-2 .selected").index();
	var partie3=$("#partie-3 .selected").index();
	var conclusion=$("#conclusion .selected").index();
	/* Point à zéro quand aucune case n'est cliquée pour la section correspondante */
	introduction = introduction>-1 ? introduction : 0;
	partie1 = partie1>-1 ? partie1 : 0;
	partie2 = partie2>-1 ? partie2 : 0;		
	conclusion = conclusion>-1 ? conclusion : 0;			
	/* Valeur de la case 1 pour chaque partie ("Insuffisante – Très moyenne") */
	partie1 = partie1==1 ? 0.9 : partie1;
	partie2 = partie2==1 ? 0.9 : partie2;
	partie3 = partie3==1 ? 0.9 : partie3;
	/* Valeur de la case 2 pour chaque partie ("À peu près correcte – Assez bien") */
	partie1 = partie1==2 ? 1.65 : partie1;
	partie2 = partie2==2 ? 1.65 : partie2;
	partie3 = partie3==2 ? 1.65 : partie3;
	/* Valeur de la case 3 pour chaque partie ("Bien – Très bien") */
	partie1 = partie1==3 ? 2.75 : partie1;
	partie2 = partie2==3 ? 2.75 : partie2;
	partie3 = partie3==3 ? 2.75 : partie3;
	/* Valeur pour chaque partie quand il n'y a que deux parties */
	partie1 = partie3==-1 ? (partie1*1.275) : partie1;
	partie2 = partie3==-1 ? (partie2*1.275) : partie2;
	partie3 = partie3>-1 ? partie3 : 0;
	/* Calcul et affichage de la note globale */
	var note=5+(introduction/2)+partie1+partie2+partie3+(conclusion/4);
	note= note==5 ? "0-5" : Math.round(note*100)/100;
	$("#note").html(note);
});