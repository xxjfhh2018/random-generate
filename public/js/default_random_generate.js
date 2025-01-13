const message = document.getElementById('message');
const reGenerator = document.getElementById('reGenerator');
const copyToClipboard = document.getElementById('copy');
const clear = document.getElementById('clear');
var n1 = 5; // 生成数量

reGenerator.addEventListener('click', () => {
    console.log('reGenerator clicked');
    displayTeams();
});

copyToClipboard.addEventListener('click', () => {
    message.select();
    document.execCommand('copy');
});

clear.addEventListener('click', () => {
    message.value = "";
});

function generateTeam(n) {
    if (n < 1 || n > 10) {
        alert("Please enter a number between 1 and 10.");
        return;
    }

    const selectedTeams = [];
    const availableTeams = [...Groups1]; // 创建一个 Groups1 的副本

    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * availableTeams.length);
        const teamName = availableTeams[randomIndex];
        selectedTeams.push(teamName);
        availableTeams.splice(randomIndex, 1); // 移除已选中的球队
    }
    return selectedTeams;
}    

function displayTeams() {
    const teams = generateTeam(n1);
    document.getElementById('message').value = teams.join('\n');
}

// slider 
const slider = document.getElementById('rangeSlider');
const numberInput = document.getElementById('numberInput');

function syncValues() {
    slider.value = numberInput.value;
}

slider.addEventListener('input', () => {
    numberInput.value = slider.value;
    n1 = numberInput.value;
});

numberInput.addEventListener('input', () => {
    if (numberInput.value < 1) numberInput.value = 1;
    if (numberInput.value > 10) numberInput.value = 10;
    slider.value = numberInput.value;
    n1 = numberInput.value;
});

window.onload = function() {
    displayTeams();
};

// header部分的下拉菜单效果
document.querySelector('.group button').addEventListener('click', function() {
    const dropdown = this.nextElementSibling;
    dropdown.classList.toggle('hidden');
});

function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    menu.classList.toggle('hidden');
}