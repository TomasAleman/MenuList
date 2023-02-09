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

    var simbol = document.sample.simbol.value;
    var name = document.sample.name.value;
    var price = document.sample.price.value;
    var description = document.sample.description.value;
    var fork = document.sample.fork.value;

    addRow(name, simbol, price, description, fork);

    var tab = document.getElementById("tbl");
    var rowCount = tab.childElementCount;

    if (rowCount == 2) {
        empty.style.display = "block";
        tableEl.style.display = "none";
    } else {
        tableEl.style.display = "block";
        empty.style.display = "none"
        if ((validatePrice(price) && validateForks(fork)) && name != "" && price != "" && fork != "") {
            document.querySelector(".add-menu").style.display = "none";
            document.sample.name.value = "";
            document.sample.price.value = "";
            document.sample.description.value = "";
            document.sample.fork.value = "";
        } else {
            document.querySelector(".add-menu").style.display = "flex";
        }
    }
});

function addRow(name, simbol, price, description, fork) {

    if ((validatePrice(price) && validateForks(fork)) && name != "" && price != "" && fork != "") {
        var tr = document.createElement('tr');

        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
        var td5 = tr.appendChild(document.createElement('td'));

        td1.innerHTML = name;
        td2.innerHTML = simbol + price;
        td3.innerHTML = description;
        td4.innerHTML = fork;
        td5.innerHTML = '<input type="button" name="remove" value="Remove" onclick="remRow(this);" class="deletebtn">';

        document.getElementById("tbl").appendChild(tr);
    } else if (!validatePrice(price) || !validateForks(fork)) {
        alert("Insert a valid value"); 
    } else {
        alert("Please complete all the fields");  
    }    
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

function validatePrice(price) {
    if (price < 0)
        return false;
    else
        return true;
}

function validateForks(fork) {
    if (fork < 0)
        return false;
    else
        return true;
}