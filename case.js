function capitalizeFirstLetter() {
    let inputText = document.getElementById('text').value;
    let words = inputText.split(' ');
    
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const outputText = capitalizedWords.join(' ');
    document.getElementById('result').innerText = outputText;
}