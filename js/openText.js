(function(){
	var btns=document.querySelectorAll('.openBtn button');
	var cart1=document.getElementById('cart1');
	var cart2=document.getElementById('cart2');
	var check1=false;
	var check2=false;
//	var text=document.querySelector()
console.log(btns[0].parentElement.nextElementSibling)
	btns[0].addEventListener('click',function(){
		check1=!check1
		if(check1===true){
			cart1.style.height=600+'px'
		}
		else cart1.style.height=438+'px'
//		console.log(this.parentElement.nextElementSibling.style)

	})
	btns[1].addEventListener('click',function(){
		check2=!check2
		console.log(cart2)
		if(check2===true){cart2.style.height=600+'px'}
		else cart2.style.height=438+'px'
//		console.log(this.parentElement.nextElementSibling)
	})
}
)()
