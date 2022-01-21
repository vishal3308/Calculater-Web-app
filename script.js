document.addEventListener("DOMContentLoaded", function(event) {
    let body = document.querySelector('body');
    let result = document.querySelector('#result');
    
    let dark_mode_btn = document.querySelector('.dark');
    let clear = document.querySelector('#clear');
    let equalTo = document.querySelector('#equalTo');
    let delete_single_num = document.querySelector('#delete_single_num');
    
    let Normal_btn = document.querySelectorAll('#Normal_btn');
    console.log(Normal_btn)
    
    let initial_value = "";
    
    Normal_btn.forEach((Normal_btn, index)=>{
    Normal_btn.addEventListener('click', function(){
    let text = this.innerHTML;
    initial_value += text;
    result.innerHTML = initial_value;
    });
    });
    // ** Keyborad press action **//===============================================

    document.addEventListener('keydown', function(e){
    e.preventDefault();
    let valid_key=['1','2','3','4','5','6','7','8','9','0','/','*','-','+','(',')','Enter','Backspace','Delete'];
    console.log(e.key);
    if(valid_key.includes(e.key)){           // Checking input key are valid or not
    if(e.key=='Enter'){
        if (result.innerHTML != "") {
            try{
                result.innerHTML = eval(result.innerHTML);
                initial_value = eval(result.innerHTML);
            }
            catch(err){
                initial_value='';
                result.innerHTML="Syntax Error";
            }
            }
        else{
            alert('please enter any Number');
            }
            }
    else if(e.key=="Backspace"){
        result.innerHTML = result.innerHTML.substring(0,result.innerHTML.length-1);
        initial_value = result.innerHTML;
    }
    else if(e.key=="Delete"){
        result.innerHTML = "";
        initial_value = "";
    }
    else
    {let text = e.key;
    initial_value += text;
    result.innerHTML = initial_value;}
    }
    });

//  ================================================================================   
    /*equal to button action*/
    function equal(){
    equalTo.addEventListener('click', function(){
    if (result.innerHTML != "") {
    
    result.innerHTML = eval(result.innerHTML);
    initial_value = eval(result.innerHTML);
    }else{
    alert('please enter any Number');
    }
    });
    }
    equal()
    
    
    /*dark_mode*/
    let dark_mode_status = false;
    dark_mode_btn.addEventListener('click', function(){
    body.classList.toggle('dark');
    if (dark_mode_status == false) {
    this.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
    dark_mode_status = true;
    }else{
    this.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
    dark_mode_status = false;
    }
    });
    
    
    /*clear all number*/
    clear.addEventListener('click', function(){
    result.innerHTML = "";
    initial_value = "";
    });
    
    /*delete single number*/
    delete_single_num.addEventListener('click', function(){
    result.innerHTML = result.innerHTML.substring(0,result.innerHTML.length-1);
    initial_value = result.innerHTML;
    });
    
    });