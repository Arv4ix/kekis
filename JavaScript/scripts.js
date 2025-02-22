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
	if (modal) {
		modal.style.display = "none";
	}

	// Event listeners for thumbnails
	let thumbnails = document.querySelectorAll(".thumbnail");
	thumbnails.forEach(thumbnail => {
		thumbnail.addEventListener("click", function() {
			if (modal) {
				modal.style.display = "block";
			}
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
	if (closeModal) {
		closeModal.onclick = function() {
			if (modal) {
				modal.style.display = "none";
			}
		};
	}

	// Ensure that gallery navigation controls exist before adding event listeners
	let prevButton = document.querySelector(".gallery-prev");
	let nextButton = document.querySelector(".gallery-next");

	console.log(prevButton); // Log to check element
	console.log(nextButton); // Log to check element

	if (prevButton) {
		prevButton.addEventListener("click", function() {
			plusSlides(-1);
		});
	}

	if (nextButton) {
		nextButton.addEventListener("click", function() {
			plusSlides(1);
		});
	}

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
});

// FAQ's page - Toogle FAQ answers
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.faq-item button').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            const answer = item.nextElementSibling;
            if (item.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
	const modal = document.getElementById('unique-confirmationModal');
	if (modal) {
		modal.style.display = 'none';
	}
});

// FAQ's page question submission
document.getElementById('unique-question-form').addEventListener('submit', function(event) {
	event.preventDefault();

	const name = document.getElementById('unique-name').value;
	const email = document.getElementById('unique-email').value;
	const question = document.getElementById('unique-question').value;

	console.log('Form submitted:', { name, email, question });

	const confirmationMessage = `
		<strong>Name:</strong> ${name} <br>
		<strong>Email:</strong> ${email} <br>
		<strong>Question:</strong> ${question}
	`;

	document.getElementById('unique-confirmationMessage').innerHTML = confirmationMessage;
	document.getElementById('unique-confirmationModal').style.display = 'block';
	console.log('Modal opened.');
});

const closeButton = document.querySelector('.unique-close-button');
console.log('Close button:', closeButton);

closeButton.addEventListener('click', function() {
	document.getElementById('unique-confirmationModal').style.display = 'none';
	console.log('Modal closed');
});

const confirmButton = document.getElementById('unique-confirmButton');
console.log('Confirm button:', confirmButton);

confirmButton.addEventListener('click', function() {
	alert('Thank you for your question! We will get back to you soon.');

	// Clear the form
	document.getElementById('unique-question-form').reset();

	// Close the modal
	document.getElementById('unique-confirmationModal').style.display = 'none';
	console.log('Modal closed after confirmation.');
});

// Close the modal when clicking anywhere outside of it
window.addEventListener('click', function(event) {
	const confirmationModal = this.document.getElementById('unique-confirmationModal');
	if (event.target === confirmationModal) {
		confirmationModal.style.display = 'none';
		console.log('Modal closed when clicking outside.');
	}
});
