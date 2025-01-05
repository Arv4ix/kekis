// Open the sidebar
function openMenu() {
	document.getElementById("mySidebar").classList.add('open');
	document.getElementById("overlay").classList.add('show');
}

// Close the sidebar
function closeMenu() {
	document.getElementById("mySidebar").classList.remove(''open);
	document.getElementById("overlay").classList.remove('show');
}

// Open modal and display the clicked image
function onClick(element) {
	const modal = document.getElementById("modal01");
	const modalImg = document.getElementById("img01");
	const captionText = document.getElementById("caption");

	modal.style.display = "block";
	modalImg.src = element.src;
	captionText.innerHTML = element.alt;
}

// Close the modal
function closeModal() {
	document.getElementById("modal01").style.display = "none";
}