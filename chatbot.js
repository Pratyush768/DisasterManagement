// Toggle Chatbot Visibility
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'block' : 'none';
}

// Handle User Messages
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;
    displayMessage(userInput, 'user');
    document.getElementById('user-input').value = '';
    getBotResponse(userInput);
}

// Display Messages in Chatbot
function displayMessage(message, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('chatbot-message', sender);
    messageContainer.textContent = message;

    const chatbotMessages = document.getElementById('chatbot-messages');
    chatbotMessages.appendChild(messageContainer);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Get Bot Response (Simple FAQ Logic)
function getBotResponse(userInput) {
    let response = '';
    const lowerInput = userInput.toLowerCase();

    // Basic FAQs
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        response = 'Hello! How can I assist you today?';
    } else if (lowerInput.includes('disaster information')) {
        response = 'We provide information on various disasters including cyclones, floods, and earthquakes. How can I help you further?';
    } else if (lowerInput.includes('contact')) {
        response = 'You can reach us at +123-456-7890 or email us at info@safetechdevelopers.com.';
    } else {
        response = 'I am not sure about that. Please contact our support for more assistance.';
    }

    setTimeout(() => {
        displayMessage(response, 'bot');
    }, 500);
}
