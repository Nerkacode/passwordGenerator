//project Password Generator
const input = document.getElementById('input');
const draw = () => {
    const div = document.getElementById('output') || document.createElement('div');
    const basicPassword = document.getElementById('basicPassword').value;
    const serviceName = document.getElementById('serviceName').value;
    const serviceNameLastChar = serviceName[serviceName.length - 1];
    const serviceNameFirstChar = serviceName[0];
    const serviceNameMatch = serviceName.match(/[a,e,i,o,u]/gi);
    const serviceNameCheck = (serviceNameMatch != null) ? serviceName[serviceNameMatch.length - 1] : serviceNameFirstChar;
    const serviceNameNonVowel = (serviceNameMatch != null) ? serviceName.length - serviceNameMatch.length : [].length;
    div.id = "output";
    div.innerHTML = null;
    div.className = "passwordStyling";
    if (basicPassword != "" && serviceName != "") {
        div.textContent = serviceNameLastChar + serviceNameCheck + basicPassword + serviceNameNonVowel + serviceNameFirstChar;
    };
    document.getElementById('paswGenerator').appendChild(div);
};
input.addEventListener('click', event => {
    if (event.target.tagName === "BUTTON") {
        draw();
    };
});