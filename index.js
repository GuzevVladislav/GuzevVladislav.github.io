const numbers = [...document.getElementsByClassName("num")];
const action = [...document.getElementsByClassName("action")];
const equale = document.getElementById("equale");
const input = document.getElementById("workspace");
const clean = document.getElementById('clear');
const del = document.getElementById("del")





let arr = [];


del.addEventListener('click', ()=>{
    input.value = input.value.slice(0, -1);
})

const solve = () => 
{
    switch (arr[1])
    {
        case "+": 
        {
            input.value = arr[0] + arr[2];

            break;
        }
        case "-": 
        {
            input.value = arr[0] - arr[2];
            break;
        }
        case "*": 
        {
            input.value = arr[0] * arr[2];
            break;
        }
        case "/": 
        {
            if (arr[2] == 0)
            {
                input.type = "text"
                input.value = "infinity"
                
            } else 
            {
                input.value = arr[0] / arr[2];
            }
            break;
        }
        case "**": 
        {
            input.value = arr[0] * arr[0];
            break;
        }
        case "sqrt": 
        {
            input.value = Math.sqrt(arr[0]);
            break;
        }
        case "xy": 
        {
            input.value = Math.pow(arr[0], arr[2]);
            break;
        }
        case "%": 
        {
            input.value =  arr[0] * 0.01;
            
            arr[0] = input.value;
            arr[1] = undefined;
            console.log(arr[0], arr[1])
            break;
        }
    }
}


clean.addEventListener('click', ()=> {clear()})

const clear = () =>
{
    if(arr[1] != '%')
    {
        input.value = "";
        arr = arr.fill(undefined)
        input.type = "number"
    }
    
}

action.forEach(el => {
    el.addEventListener('click', ()=>{
        arr[0] = parseFloat(input.value);
        arr[1] = el.value;
        input.value = "";
        if(el.value === "**" || el.value === "sqrt" || el.value === "%")
        {
            solve();
        }
    })
})

equale.addEventListener('click', () =>{
    arr [2] = parseInt(input.value);
    solve();
})




numbers.forEach(el => {
    el.addEventListener('click', () =>{
        
        if(input.value === '' && el.value === "0") return;
        input.type = "number"
        input.value += el.value;
        
    })
})





const theme = document.getElementById('theme');
const circle = document.getElementById('circle');


theme.addEventListener('click', () => {
    const style = window.getComputedStyle(circle);
    if (style.left === "0px")
    {
        circle.style.removeProperty('left')
        circle.style.right = "0";
        changeTheme(1);
    }
    else
    {
        circle.style.removeProperty('right')
        circle.style.left = "0";
        changeTheme(0);
    }
})

const changeTheme = (light) => 
{
   
    if(!light)
    {
        document.querySelector("body").style.backgroundColor = "#fff";
        document.querySelectorAll("button").forEach(element => {
            element.style.color = "#000";
        });
        input.style.color = "#000"
        theme.style.color = "#000"
    }
    else{

        document.querySelector("body").style.backgroundColor = "#000";
        document.querySelectorAll("button").forEach(element => {
            element.style.color = "#fff";
        });
        input.style.color = "#fff"
        theme.style.color = "#fff"
       
    }
}