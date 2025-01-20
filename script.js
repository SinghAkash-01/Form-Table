var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

function displayDetails() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var grade = document.getElementById("grade").value;
    var gender = document.getElementById("gender").value;
    var fav_language = document.getElementsByName("fav_language");


    if(!name || !age || !grade || !gender || !fav_language){
        alert("please fill all text boxes.");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = name;    
    cell2.innerHTML = age;    
    cell3.innerHTML = grade;    
    cell4.innerHTML = gender;
    
    var i;
    for(i=0; i<=fav_language.length; i++)
    {
        if(fav_language[i].checked)
        {
            cell5.innerHTML = fav_language[i].value;
        }
    }

    row++;
}