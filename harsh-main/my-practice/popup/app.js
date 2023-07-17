
// Get references to the elements
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modalContainer = document.getElementById("modalContainer");

// Function to open the modal
function openModal() {
  modalContainer.style.display = "block";

}

// Function to close the modal
function closeModal() {
  modalContainer.style.display = "none";
}

// Add event listeners
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
