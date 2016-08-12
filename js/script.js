//This was written during my 3rd week at Coding Dojo.  I intentionally wrote this as little JQuery as possible 
// to try and learn about how JQuery makes elements move.  I'm a better developer for understanding the working of JQuery.

//As written, requires the following unordered list structure for proper execution:
		// <ul>
		// <div id="parens">
		// <li>
		// 	<h3><a>Link</a</h3>
		// </li>
		// ...
		// </ul>

function navSlide() {}
	$(document).ready(function(){
		//navmenu animation
		$('li').click(function() { 
			$(this).children().css('color','#393536')
			$(this).siblings().children().css('color','#393356')
			selectLi(this);

		});

		var lastEle;
		function selectLi(ele){
			// Save parentheses coordinates
			var eleTop = ele.offsetTop;
			var eleLeft = ele.offsetLeft;
			var eleH3 = ele.children[0];
			var eleH3Width = eleH3.offsetWidth;

			var parens = document.getElementById('parens');
			var parensTop = parseInt(parens.offsetTop);
			var parensLeft = parseInt(parens.offsetLeft);
			var parensWidth = parens.offsetWidth;
			var widthDiff;

			ele.style.top = eleTop + 'px';
			ele.style.left = eleLeft + 'px';

			//Move parentheses down page
			if (parensTop < eleTop){
				parens.style.top = (parensTop + 1) + 'px';
				widthDiff = eleH3Width - parensWidth + 10;
				//adjust parentheses width to match clicked element
				if (widthDiff > 0 && widthDiff >= 3){
					parens.style.width = (parseInt(parensWidth) + 3) + 'px';
				} else if (widthDiff > 0){
					parens.style.width = eleH3Width + 10;
				} else if (widthDiff < 0 && widthDiff <= -3){
					parens.style.width = (parseInt(parensWidth) - 3) + 'px';
				} else if (widthDiff < 0){		
					parens.style.width = eleH3Width + 10;
				}
			//Move parentheses up page
			} else if (parensTop > eleTop){
				parens.style.top = (parensTop - 1) + 'px';
				widthDiff = eleH3Width - parensWidth + 10;
				//adjust parentheses width to match clicked element
				if (widthDiff > 0 && widthDiff >= 3){
					parens.style.width = (parseInt(parensWidth) + 3) + 'px';
				} else if (widthDiff > 0){
					parens.style.width = eleH3Width + 10;
				} else if (widthDiff < 0 && widthDiff <= -3){
					parens.style.width = (parseInt(parensWidth) - 3) + 'px';
				} else if (widthDiff < 0){		
					parens.style.width = eleH3Width + 10;
				}
			//match width to element upon arrrival at element if width still different
			} else if (parensTop == eleTop){
				parens.style.width = eleH3Width + 10;
				return;
			}


			setTimeout(function(){
				selectLi(ele);
			}, 1);
			var eleParent = ele.parentNode;
			eleH3.style.color = '#818386';
		};
	});
}

