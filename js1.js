// cont inicial
let count = 0;

// selecionar valor e botoes
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

//console.log(btns);

btns.forEach(function(btn){
    btn.addEventListener("click", function (e){
        const styles = e.currentTarget.classList;
        if (styles.contains("btn-decrease")){
            count --;
        }
        else if (styles.contains('btn-increase')){
            count ++;
        }
        else if (styles.contains("btn-reset")){
            count = 0;
        }

        if (count > 0){
            value.style.color = "green";
        }
        else if(count < 0){
            value.style.color = "red";
        }
        else{
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})