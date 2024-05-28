document.getElementById('selectButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    const texts = userInput.split('\n').filter(text => text.trim() !== '');

    if (texts.length === 0) {
        alert('Please enter some text.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * texts.length);
    const randomText = texts[randomIndex];
    document.getElementById('result').innerText = randomText;
});
