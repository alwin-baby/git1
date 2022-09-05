var movieName = document.form.movieName;
var check = document.form.checkbox;

function submitValidation()
{
    if(movieName.value.length == 0 || movieName.value.match(/^\s*$/))
    {
        alert("Please enter a Movie Name");
    } 
    else
    {
        alert("Move Added to watch list!");
    }
};