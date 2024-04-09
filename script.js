document.getElementById("downloadBtn").addEventListener('click', function() {
    html2canvas(document.getElementById("greetingCard")).then(canvas => {
        var link = document.createElement('a');
        link.download = 'greeting-card.png';
        link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        link.click();
    });
});

document.getElementById("designSelect").addEventListener("change", function() {
    var selectedDesign = this.value;
    changeCardDesign(selectedDesign);
});

document.getElementById("nameInput").addEventListener("input", function() {
    var name = this.value;
    document.getElementById("nameDisplay").innerText = name;
});

function changeCardDesign(design) {
    var card = document.getElementById("greetingCard");
    var nameDisplay = document.getElementById("nameDisplay");
    
    card.style.backgroundImage = "url('" + design + ".jpg')";
    
    // تحديد مواقع النص بناءً على التصميم المختار
    switch(design) {
        case 'images/design1':
            nameDisplay.style.top = 'auto';
            nameDisplay.style.bottom = '48px';
            nameDisplay.style.left = '51%';
            nameDisplay.style.transform = 'translateX(-50%)';
            break;
        case 'images/design2':
            nameDisplay.style.top = 'auto';
            nameDisplay.style.bottom = '28px';
            nameDisplay.style.left = '52%';
            nameDisplay.style.transform = 'translateX(-50%)';
            break;
        case 'images/design3':
            nameDisplay.style.top = '75%';
            nameDisplay.style.left = '15%';
            nameDisplay.style.transform = 'translateX(-50%)';
            break;
        case 'images/design4':
            nameDisplay.style.top = 'auto';
            nameDisplay.style.bottom = '79px';
            nameDisplay.style.left = '51%';
            nameDisplay.style.transform = 'translateX(-50%)';
            break;
        case 'images/design5':
            nameDisplay.style.top = 'auto';
            nameDisplay.style.bottom = '39px';
            nameDisplay.style.left = '51%';
            nameDisplay.style.transform = 'translateX(-50%)';
            break;
    }
}
