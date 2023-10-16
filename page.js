let form = document.querySelector("form");
let allInputs = document.querySelectorAll("#formulaireConteneur form input");
let texteArea = document.getElementById("textArea");

    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        let isFormValid = true;

        for(let i = 0; i < allInputs.length; i++){
        if(allInputs[i].value === ''){
            isFormValid = false;
            break;
        };
        };

        if(texteArea.value === ''){
            isFormValid = false;
        };

        if(isFormValid){
        alert("C'est envoyé !");
        }else{
        alert("Il manque des champs !!!");
        };
    });
