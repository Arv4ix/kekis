// Open the sidebar
function openMenu() {
	document.getElementById("mySidebar").classList.add('open');
	document.getElementById("overlay").classList.add('show');
}

// Close the sidebar
function closeMenu() {
	document.getElementById("mySidebar").classList.remove('open');
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

// Modal for Products page
document.addEventListener('DOMContentLoaded', function() {
	// Get the modal
	var modal = document.getElementById("productModal");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("product-close")[0];

	// Get the elements to display in the modal
	var modalTitle = document.getElementById("modalTitle");
	var modalImage = document.getElementById("modalImage");
	var modalDescription = document.getElementById("modalDescription");
	var modalAdditionalInfo = document.getElementById("modalAdditionalInfo");

	// Add event listeners to "View Details" links
	var viewDetailsLinks = document.getElementsByClassName("view-details");
	Array.from(viewDetailsLinks).forEach(function(link) {
		link.addEventListener('click', function(event) {
			event.preventDefault();
			modalTitle.innerText = this.getAttribute("data-title");
			modalImage.src = this.getAttribute("data-image");
			modalDescription.innerText = this.getAttribute("data-description");

			// Populate additional information
			modalAdditionalInfo.innerHTML = `
				<li><strong>Details:</strong> ${this.getAttribute("data-long-description")}</li>
				<li><strong>Dimensions:</strong> ${this.getAttribute("data-dimensions")}</li>
				<li><strong>Price:</strong> ${this.getAttribute("data-price")}</li>
			`;
			modal.style.display = "block";
		});
	});

	// When the user clicks on <span> (x), close the modal
	if (span) {
		span.onclick = function() {
			modal.style.display = "none";
		}
	}

	// When the user clicks anywhere outside the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
});


// Gallery slideshow
document.addEventListener("DOMContentLoaded", function() {
	let modal = document.getElementById("galleryModal");
	let slides, category;
	let slideIndex = 1;

	// Ensure modal is hidden on page load
	modal.style.display = "none";

	// Event listeners for thumbnails
	let thumbnails = document.querySelectorAll(".thumbnail");
	thumbnails.forEach(thumbnail => {
		thumbnail.addEventListener("click", function() {
			modal.style.display = "block";
			category = this.getAttribute("data-category");
			slideIndex = parseInt(this.getAttribute("data-slide"), 10);
			slides = document.querySelectorAll(`.mySlides`);
			
			// Hide all slides
			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}

			// Show slides for the selected category
			slides = document.querySelectorAll(`.mySlides.${category}`);
			showSlides(slideIndex);
		});
	});

	// Event listener for closing the modal
	let closeModal = document.getElementsByClassName("gallery-close")[0];
	closeModal.onclick = function() {
		modal.style.display = "none";
	};

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slides[slideIndex - 1].style.display = "block";
	}

	// Addevent listeners for navigation controls
	document.querySelector(".gallery-prev").addEventListener("click", function() {
		plusSlides(-1);
	});
	document.querySelector(".gallery-next").addEventListener("click", function() {
		plusSlides(1);
	});
});