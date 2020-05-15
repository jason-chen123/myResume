(function(){
var btnChange=document.getElementById('btnchange');
btnChange2=document.getElementById('btnchange2')
var page1=document.querySelector('.container .changepage');
var page2=document.querySelector('.container .resume_wrap');
var state=false;

btnChange.addEventListener('click',function(){
	state=!state
	if(state===true){
	page1.classList.add('changepage_active');
	page2.classList.add('resume_wrap_active')
	}
		else{page1.classList.remove('changepage_active');
		page2.classList.remove('resume_wrap_active')
		}
})
btnChange2.addEventListener('click',function(){
	state=!state
	if(state===true){
	page1.classList.add('changepage_active');
	page2.classList.add('resume_wrap_active')
	}
		else{page1.classList.remove('changepage_active');
		page2.classList.remove('resume_wrap_active')
		}
})
//console.log(btnChange)
}
)()
