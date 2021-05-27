

window.onload = function(){
    // alert("hello,world")

    let age = 25;

    console.log(age);

    function changeText(){
        document.querySelector('#header-name').innerHTML = 'Ibrahim'
    }
    function changeColor(){
        document.querySelector('#header-name').style.color = 'blue'
    }
    document.querySelector('.alaye').addEventListener('click', function(){
        document.querySelector('.alaye').style.color = 'blue'
        // this.style.color= 'blue'
    })

    // document.querySelector("aye").addEventListener("click", function(){
    //     document.querySelector("aye").
    // })
}
