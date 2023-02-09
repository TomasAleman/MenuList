const addbtn = document.querySelector('.btn-add');
const empty = document.querySelector('.empty');
const close = document.querySelector('.close');
const add = document.querySelector('.add');
const formEl = document.querySelector(".add-menu");
const tbodyEl = document.querySelector('tbody');

addbtn.addEventListener("click", (e) =>{
    e.preventDefault();
    document.querySelector(".add-menu").style.display = "flex";
})

close.addEventListener("click", (e) =>{
    e.preventDefault();
    document.querySelector(".add-menu").style.display = "none";
});


function addRow(){
   var name = document.sample.name.value;
   var price = document.sample.price.value;
   var description = document.sample.description.value;
   var cubiertos = document.sample.cubiertos.value;

   var tr = document.createElement('tr');

   var td1 = tr.appendChild(document.createElement('td'));
   var td2 = tr.appendChild(document.createElement('td'));
   var td3 = tr.appendChild(document.createElement('td'));
   var td4 = tr.appendChild(document.createElement('td'));
   var td5 = tr.appendChild(document.createElement('td'));

   td1.innerHTML=name;
   td2.innerHTML=price;
   td3.innerHTML=description;
   td4.innerHTML=cubiertos;
   td5.innerHTML='<input type="button" name="remove" value="Remove" onclick="remRow(this);" class="deletebtn">';

    document.getElementById("tbl").appendChild(tr);
};

function remRow(row){
    var e=row.parentNode.parentNode;
    e.parentNode.removeChild(e);
}




 