const addbtn = document.querySelector('.btn-add');
const empty = document.querySelector('.empty');
const close = document.querySelector('.close');
const add = document.querySelector('.add');
const formEl = document.querySelector(".add-menu");
const tableEl = document.querySelector('table');
var id = 0;

const tabArray = [];

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
        var td6 = tr.appendChild(document.createElement('td'));
        td6.setAttribute("hidden", true);
        td6.id = "id";

        td1.innerHTML = name;
        td2.innerHTML = simbol + price;
        td3.innerHTML = description;
        td4.innerHTML = fork;
        td5.innerHTML = '<input type="button" name="remove" value="Remove" onclick="remRow(this);" class="deletebtn">';
        td6.innerHTML = id;

        document.getElementById("tbl").appendChild(tr);

        var row = [name, simbol, price, fork, id];

        tabArray.push(row);

        id++;

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
    removeToArray(row);
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

function countRowsOfTotalTab() {
    var tab = document.getElementById("tbl-count");
    var rowCount = tab.childElementCount;
    return rowCount;
}

function countAll() {
    document.getElementById("tbl-count").style.display = "block";

    if (countRowsOfTotalTab() > 2) {
        removeAll();
    }

    var price$ = 0;
    var priceUSD = 0;
    var priceEu = 0;
    var priceLi = 0;
    for (var i = 0; i < tabArray.length; i++) {
        if (tabArray[i][1] == "$") {
            price$ += parseInt(tabArray[i][2].replace("$", ""));
        } else if (tabArray[i][1] == "USD") {
            priceUSD += parseInt(tabArray[i][2].replace("USD", ""));
        } else if (tabArray[i][1] == "€") {
            priceEu += parseInt(tabArray[i][2].replace("€", ""));
        } else {
            priceLi += parseInt(tabArray[i][2].replace("£", ""));
        }
    }
    var fork = countForks();
    var dishesCount = countdishes();

    var tr = document.createElement('tr');
    tr.id = "tr-count";

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = dishesCount;
    td2.innerHTML = "$" + price$;
    td3.innerHTML = "USD" + priceUSD;
    td4.innerHTML = "€" + priceEu;
    td5.innerHTML = "£" + priceLi;;
    td6.innerHTML = fork;

    document.getElementById("tbl-count").appendChild(tr);
}

function countdishes() {
    var tab = document.getElementById("tbl");
    var rowCount = tab.childElementCount;

    var dishesCount = rowCount - 2;
    return dishesCount;
}

function countForks() {
    var forks = 0;
    for (var i = 0; i < tabArray.length; i++) {
        forks += parseFloat(tabArray[i][3]);
    }
    return forks;
}

function removeAll(row) {
    var h = document.getElementById('tr-count');
    h.parentNode.removeChild(h);
}

function getTrId(row) {
    var f = row.parentNode.parentNode;
    var idTd = f.querySelector('#id');
    return idTd.textContent;
}

function removeToArray(row) {
    var i = 0;
    var flag = false;
    trId = getTrId(row);
    while (i < tabArray.length && flag == false) {
        if (parseInt(tabArray[i][4]) == trId) {
            tabArray.splice(i,1);
            flag = true;
        }
        i++;
    }
}
