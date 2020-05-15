(function lunbo(){
	var imgList1=['img/my01.png','img/my02.png','img/my03.png','img/my04.png','img/my05.png','img/my06.png']
	var imgList2=['img/my201.png','img/my202.png','img/my203.png','img/my204.png','img/my205.png','img/my206.png','img/my207.png']
	var img1=document.getElementById('img1')
	var img2=document.getElementById('img2')
	var img3=document.getElementById('img3')
	console.log(img1)
	var index=0;
	var index2=0
	var timer=setInterval(function(){
		index++;
		index2++;
		img1.src=imgList1[index];
			if(index==5){
			index=-1
		}
		img2.src=imgList2[index2];
			if(index2==6){
			index2=-1
		}
	},2000)
}
)()
