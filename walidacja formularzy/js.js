// window.onload = alert("work?")

var form = document.querySelector("#form");
wzory = {
    'nazwisko':/^[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]{3,}/,
    'imie':/^[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]{3,}/,
    'email':/^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9-_.]{2,}\.[a-zA-Z.]{2,}/,
};

function sprawdz()
{
    let error = false;

    for(var pole in wzory)
    {
        if(form[pole])
        {
            if(!wzory[pole].test(form[pole].value))
            {
                // alert("chujnia z grzybnią")
                form[pole].style.background = "var(--blad)"
                error = true
            }
            else
            {
                // alert("i do przodu")
                form[pole].style.background = ""
            }
        }
    }

    if(error)
    {
        document.querySelector("#blad").innerHTML = "Bład: wypełniono niezgodnie z kluczem"
    }
    else
    {
         document.querySelector("#blad").innerHTML = ""
    }
}