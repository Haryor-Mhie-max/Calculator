//const del = document.querySelector(".del");
	
 function del(){
	let panel = document.calc.view.value;
	 document.calc.view.value = panel.slice(0, panel.length -1);
	}