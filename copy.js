const textSelect = document.querySelectorAll('.copiarTxt')

textSelect.forEach((txt) => {
    txt.addEventListener('click', function() {
        navigator.clipboard.writeText(txt.innerHTML)
    })
}); 