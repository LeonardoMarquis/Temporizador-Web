// cont inicial
let count = 0;

// selecionar valor e botoes
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

let intervalID = null;


const audio1 = document.querySelector("#audio1");   // pega pelo id "#id"
const audio2 = document.querySelector("#audio2");
const text_super = document.querySelector("#text-super");

function UpdateColor(){
    if (count > 0){
        value.style.color = "green";
    }
    else if(count < 0){
        value.style.color = "red";
    }
    else{
        value.style.color = "white";
    }
}

btns.forEach(function(btn){
    btn.addEventListener("click", function (e){
        const styles = e.currentTarget.classList;


        if (styles.contains("btn-super")){
            audio2.play();
            text_super.style.display = "block";
        }
        else if (styles.contains("btn-decrease")){
            count --;
            clearInterval(intervalID);
        }
        else if (styles.contains("btn-increase")){
            count ++;
            clearInterval(intervalID);
        }
        else if (styles.contains("btn-reset")){
            count = 0;
            audio1.pause();
            clearInterval(intervalID);
        }


        else if (styles.contains("btn-increase+15")){
            count += 15;
            clearInterval(intervalID);
        }
        else if (styles.contains("btn-decrease-15")){
            count -= 15;
            clearInterval(intervalID);
        }


        else if (styles.contains("btn-start")){
            clearInterval(intervalID);
            if (audio2.paused){     // retorna true se o audio 2 esta pausado/ nao tocando
                audio1.play();
            }

            

            intervalID = setInterval(() => {
                if (count > 0){
                    count --;

                }else if (count < 0){
                    count ++;
                }

                else{
                    audio1.pause();
                    clearInterval(intervalID);
                }

                UpdateColor();
                value.textContent = count;

            }, 1000);
        
        }


        UpdateColor();
        value.textContent = count;
    })
})





// relogio

const updateTime = () =>{
    const now = date = new Date();
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")

    const timeElement = document.querySelector(".time");
    timeElement.textContent = `${hours} : ${minutes} : ${seconds}`;

    setInterval(updateTime, 1000);
}

window.addEventListener("load", updateTime)