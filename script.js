const errorMessage=document.getElementById('errorMessage')
const successMessage=document.getElementById('successMessage')
const disabledDiv=document.getElementsByClassName('message')[0];


function addEmployee(){
    const name=document.getElementById('enterName').value;
    const job=document.getElementById('enterProfession').value;
    const age=document.getElementById('enterAge').value;
    if(name === "" || job === "" || age === ""){
        disabledDiv.style.display="block";
        errorMessage.style.display="block";
    }
    else{
        errorMessage.style.display = "none";
        disabledDiv.style.display = "none";

        disabledDiv.style.display="block";
        successMessage.style.display = "block";
        //successMessage.textContent = "Employee added successfully!";
        
        const eachRow=document.createElement('div');
        eachRow.setAttribute('class','eachRow');

        const tableContainer = document.getElementById('tablCont');

        //for blocking table message
        const dataMessage=document.getElementById('dataMessage');
        dataMessage.style.display="none";

        //const eachEmployee = document.createElement('div');
        //eachEmployee.setAttribute('class', 'empContent');

        const empContent = document.createElement('div');
        empContent.setAttribute('class', 'empContent');
        
        const nameContainer = document.createElement('p');
        nameContainer.textContent = name;
        const jobContainer = document.createElement('p');
        jobContainer.textContent = job;
        const ageContainer = document.createElement('p');
        ageContainer.textContent = age;

        empContent.appendChild(nameContainer);
        empContent.appendChild(jobContainer);
        empContent.appendChild(ageContainer);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute('class', 'deleteButton');

        document.getElementById('enterName').value="";
        document.getElementById('enterProfession').value="";
        document.getElementById('enterAge').value="";

        //delete functionality
        deleteButton.onclick = () => {
            eachRow.remove();

            // Show "Data not found" message if no employees remain
            if (tableContainer.children.length === 0) {
                dataMessage.style.display = "block";
            }
        };

        eachRow.appendChild(empContent);
        eachRow.appendChild(deleteButton);

        tableContainer.appendChild(eachRow);
    }

}