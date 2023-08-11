// let list = [
//     {
//         id: 1,
//         name: "Learn JavaScript",
//     },
//     {
//         id: 2,
//         name: "Learn Java",
//     },
// ];
// localStorage.setItem("ss22_bt1", JSON.stringify(list));
let list = JSON.parse(localStorage.getItem("ss22_bt1")) || [];
let idGlobal = null;
console.log(list);
function showList() {
    let str = "";
    for (let i = 0; i < list.length; i++) {
        const e = list[i];
        str += `<li>
    <input type="radio" name="cv" onclick="fix(${e.id},'${e.name}')" class="inputRadio">&emsp;&emsp;
    ${e.name}&emsp;&emsp;
    <i class="fa-solid fa-circle-xmark" onclick="del(${i})"></i></li>`;
    }
    console.log(str);
    document.getElementById("list").innerHTML = str;
}
showList();
function getNewId() {
    let idMax = 0;
    for (let i = 0; i < list.length; i++) {
        if (idMax < list[i].id) {
            idMax = list[i].id;
        }
    }
    return idMax + 1;
}
let inputText = document.getElementById("inputtext");

document.getElementById("form").addEventListener("submit", function (id) {
    id.preventDefault();
    if (idGlobal != null) {
        let index = list.findIndex(todo => todo.id == idGlobal);
        list[index].name = inputText.value;
        localStorage.setItem("ss22_bt1", JSON.stringify(list));
        showList();
        inputText.value = "";
        return;
    }
    let obj = {
        id: getNewId(),
        name: inputText.value,
    };
    list.push(obj);
    localStorage.setItem("ss22_bt1", JSON.stringify(list));
    showList();
    inputText.value = "";
    idGlobal = null;
});

function findIndexById(iD) {
    for (let i = 0; i < list.length; i++) {
        if (iD == list[i].id) {
            return i;
        }
    }
    return -1;
}

function del(index) {
    list.splice(index, 1);
    localStorage.setItem("ss22_bt1", JSON.stringify(list));
    showList();
}

function fix(id, name) {
    idGlobal = id;
    inputText.value = name;
}

