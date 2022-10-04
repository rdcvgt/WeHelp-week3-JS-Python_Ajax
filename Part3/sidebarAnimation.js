const menuBtn = document.querySelector('.phoneMenu');
const sidebar = document.querySelector('.sidebar');
const closeImg = document.querySelector('.closeImg');
const spacebar = document.querySelector('.spacebar')
const sidebarOppend = document.querySelector('.container').style['right'] = "0%"

if(menuBtn){
	menuBtn.addEventListener('click', () =>{
			sidebar.style["animation"]= "moveSidebar 0.5s both";
	});
}


if(sidebarOppend){
	if(closeImg){
	closeImg.addEventListener('click', () =>{
			sidebar.style["animation"]= "moveSidebarReverse 0.5s both";
	});
}
	if(spacebar){
	spacebar.addEventListener('click', () =>{
			sidebar.style["animation"]= "moveSidebarReverse 0.5s both";
	});
}
}

