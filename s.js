var clickv = -1;
function s1() {
	
	console.log(clickv);
	clickv++;

	 var s = 1;
	var obj = document.getElementById('lab1');
	function get() {
		 if (s<10000)  {
		
		setTimeout(get,50);
		var x = s*2;
		var q = s/10;
		document.getElementById('li1').innerHTML = s;
		document.getElementById('li2').innerHTML = x;
		document.getElementById('li3').innerHTML = q;
		leftl = qar.offsetLeft;
		qar.style.transform = 'rotate'+'('+s*4+'deg'+')';
		qar.style.left = leftl +s/10+'px';
		qar.style.transition = 10 + 'ms';
		s++;
		if (s<10) {
			qar.style.top =  '10'+ s +'px';
		}
		
}
		
		
	}
	setTimeout(get,50);
}