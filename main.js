const addbtn = document.querySelector('.btn-add');
const empty = document.querySelector('.empty');
const close = document.querySelector('.close');
const add = document.querySelector('.add');
const formEl = document.querySelector(".add-menu");
const tableEl = document.querySelector('table');

addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".add-menu").style.display = "flex";
})

close.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".add-menu").style.display = "none";
});

add.addEventListener("click", (e) => {
    e.preventDefault();
    document.sample.name.value = "";
    document.sample.price.value = "";
    document.sample.description.value = "";
    document.sample.fork.value = "";

    var tab = document.getElementById("tbl");
    var rowCount = tab.childElementCount;

    if (rowCount == 2) {
        empty.style.display = "block";
        tableEl.style.display = "none";
    } else {
        tableEl.style.display = "block";
        empty.style.display = "none"
        document.querySelector(".add-menu").style.display = "none";
    }
});

function addRow() {
    var name = document.sample.name.value;
    var price = "$" + document.sample.price.value;
    var description = document.sample.description.value;
    var fork = document.sample.fork.value;

    if (name != "" && price != "$" && fork != "") {
        var tr = document.createElement('tr');

        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
        var td5 = tr.appendChild(document.createElement('td'));

        td1.innerHTML = name;
        td2.innerHTML = price;
        td3.innerHTML = description;
        td4.innerHTML = fork;
        td5.innerHTML = '<input type="button" name="remove" value="Remove" onclick="remRow(this);" class="deletebtn">';

        document.getElementById("tbl").appendChild(tr);
    }else{
        alert("Please complete the fields");
    }
    valCountRows();
};

function remRow(row) {
    var e = row.parentNode.parentNode;
    e.parentNode.removeChild(e);
    valCountRows();
}

function valCountRows() {
    var tab = document.getElementById("tbl");
    var rowCount = tab.childElementCount;

    if (rowCount == 2) {
        empty.style.display = "block";
        tableEl.style.display = "none";
    } else {
        tableEl.style.display = "block";
        empty.style.display = "none"
    }
}
