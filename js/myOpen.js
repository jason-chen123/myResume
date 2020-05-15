(function(){
    var ifOpen=false
	var btn=document.getElementById('btnchange');
	var btn2=document.getElementById('btnchange2')
	var footer=document.getElementById('footer')
	btn.addEventListener('click',function(){
		ifOpen=!ifOpen;
//		console.log(footer)
		if(ifOpen===true){
			footer.classList.add("footer_active")
			
		}
		else footer.classList.remove('footer_active')
//		footer.classList.add('footer_disp')
	})
	btn2.addEventListener('click',function(){
		ifOpen=!ifOpen;
//		console.log(footer)
		if(ifOpen===true){
			footer.classList.add("footer_active")
			
		}
		else footer.classList.remove('footer_active')
//		footer.classList.add('footer_disp')
	})
})()
