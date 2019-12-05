/********************
	choseTree.js
********************/
"use strict";

var burgerBtn = document.querySelector(".burger__input");
var menuBlock = document.querySelector(".menu");
let containerVar = document.querySelector('.container');
let cardVar = document.querySelector('.card');

burgerBtn.onclick = function() {
	if (menuBlock.classList.contains('popup') === false) {
		this.classList.add('checked');
		menuBlock.classList.add('popup');
		containerVar.classList.add('popup');
		cardVar.classList.add('popup');
	} else {
		this.classList.remove('checked');
		menuBlock.classList.remove('popup');
		containerVar.classList.remove('popup');
		cardVar.classList.remove('popup');
	}
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKlxuXHRjaG9zZVRyZWUuanNcbioqKioqKioqKioqKioqKioqKioqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlcl9faW5wdXRcIik7XG52YXIgbWVudUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xubGV0IGNvbnRhaW5lclZhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbmxldCBjYXJkVmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcblxuYnVyZ2VyQnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblx0aWYgKG1lbnVCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwJykgPT09IGZhbHNlKSB7XG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG5cdFx0bWVudUJsb2NrLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG5cdFx0Y29udGFpbmVyVmFyLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG5cdFx0Y2FyZFZhci5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuXHRcdG1lbnVCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cCcpO1xuXHRcdGNvbnRhaW5lclZhci5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cCcpO1xuXHRcdGNhcmRWYXIuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAnKTtcblx0fVxufSJdLCJmaWxlIjoibWFpbi5qcyJ9
