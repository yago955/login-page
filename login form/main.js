function login_validation()
{
    var login_username=document.forms["login-form"]["luser"].value;
    var login_password=document.forms["login-form"]["lpass"].value;
    if((login_username=="admin") && (login_password=="plswork"))
    {
        window.location.href="test.html";

    }
    else
    {
        alert("login unsuccessful");
    }
}