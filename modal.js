
    // Function to open a modal
    function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

    // Function to close a modal
    function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

    // Function to handle button clicks
    function handleButtonClick(event) {
    event.preventDefault();
    const buttonText = event.currentTarget.textContent;
    if (buttonText.includes('USER REGISTRATION')) {
    openModal('userRegisterModal');
} else if (buttonText.includes('ADMIN REGISTRATION')) {
    openModal('adminRegisterModal');
} else if (buttonText.includes('HOUSE ID REGISTRATION')) {
    openModal('houseIdRegisterModal');
}
}

    // Attach event listeners to buttons
    document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
    closeModal('userRegisterModal');
    closeModal('adminRegisterModal');
    closeModal('houseIdRegisterModal');
}
};
