document.addEventListener('DOMContentLoaded', function(){

    document.querySelector("#nao-perturbe").addEventListener('change', function(){
        if (this.checked) {
            var currentURL = window.location.href;
            var substring = "app.lojaintegrada.com.br/painel";
            if(currentURL.includes(substring)){
                document.querySelector("body>div#intercom-container").remove();
            }
        } else {
            console.log("Checkbox is not checked..");
        }
        
    });


});