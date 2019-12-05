"use strict";

var burgerBtn = document.querySelector(".burger__input");
var menuBlock = document.querySelector(".menu");
let containerVar = document.querySelector('.container');

burgerBtn.onclick = function() {
	if (menuBlock.classList.contains('popup') === false) {
		this.classList.add('checked');
		menuBlock.classList.add('popup');
		containerVar.classList.add('popup');
	} else {
		this.classList.remove('checked');
		menuBlock.classList.remove('popup');
		containerVar.classList.remove('popup');
	}
}