// table of content switch
let headerText = document.getElementById('contentHeaderText');
let aboutUs = document.getElementById('aboutUsText');
let tableOfContent = document.getElementById('contentDisplay');
let aboutUsText = document.getElementById('aboutUs');
headerText.onclick = function() {
    headerText.style.fontSize = '40px';
    aboutUs.style.fontSize = '24px';
    aboutUs.style.lineHeight = '29px';
    tableOfContent.style.display = 'flex';
    aboutUsText.style.display = 'none';
}
aboutUs.onclick = function() {
    aboutUs.style.fontSize = '40px';
    aboutUs.style.lineHeight = '48px';
    headerText.style.fontSize = '24px';
    tableOfContent.style.display = 'none';
    aboutUsText.style.display = 'inline-block';
}