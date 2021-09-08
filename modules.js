(function (){
    'use strict'

    var accountInfoList = function(){
        var account = {
            
        } 
    }

var accountModule = (function(){
    let accname;
    let balance;

    return{
        create: function(name, deposit){
            accname = name;
            balance = deposit;
        }
    
    };
})();

function createAccount(){
    var _accountname = document.getElementById('acctName').value;
    var _balance = document.getElementById('deposit').value; 

    var newAccount = accountModule.create(_accountname, _balance);

}
window.onload=function(){
    document.getElementById('createAcc').onclick=createAccount
}
})();   