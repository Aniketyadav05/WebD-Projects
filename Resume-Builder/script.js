function addNewExpButton() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('WeField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('placeholder', 'Enter here')

    let WorkExp = document.getElementById('WorkExp')
    let WeAddBUtton = document.getElementById('weButton')

    WorkExp.insertBefore(newNode, WeAddBUtton)
}

function addNewAqButton() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('EqField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('placeholder', 'Enter here')

    let WorkExp = document.getElementById('acadQual')
    let WeAddBUtton = document.getElementById('aqButton')

    WorkExp.insertBefore(newNode, WeAddBUtton)
}

const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});

function generateCV() {

    let nameField = document.getElementById('nameField').value;
    let contactField = document.getElementById('contactField').value
    let adressField = document.getElementById('adressField').value
    let LinkedInField = document.getElementById('LinkedInField').value
    let GithubField = document.getElementById('GithubField').value
    let LeetcodeField = document.getElementById('LeetcodeField').value
    let nameT1 = document.getElementById('nameT1');
    let objectiveField = document.getElementById('ObjectiveField').value
    nameT1.innerHTML = nameField
    document.getElementById('addressT').innerHTML = adressField
    document.getElementById('contactT').innerHTML = contactField
    document.getElementById('LinkeinT').href = LinkedInField
    document.getElementById('GithubT').href = GithubField
    document.getElementById('LeetCodeT').href = LeetcodeField
    document.getElementById('objectiveT').innerHTML = objectiveField

    document.getElementById('nameT2').innerHTML = nameField

    let wes = document.getElementsByClassName("WeField")
    let str = "";
    for (let e of wes) {
        console.log(e.value)
        str += `<li>${e.value}</li>`

    }
    document.getElementById('weT').innerHTML = str;

    let aqs = document.getElementsByClassName("EqField")
    let str1 = "";
    for (let e of aqs) {
        console.log(e.value)
        str1 += `<li>${e.value}</li>`

    }
    document.getElementById('aqT').innerHTML = str1;

    document.getElementById('cv-template').style.display = "block";
    document.getElementById('cv-form').style.display = "none";
    let profile = document.gebyid('profile-img');
    let inputFile = document.getElementById('input-file')
    inputFile.onchange = function () {
        profile.src = URL.createObjectURL(inputFile.files[0])
    }

}
