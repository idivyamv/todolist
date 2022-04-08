

let myPromise = new Promise(function(Resolve, Reject) {  
    
    let req = new XMLHttpRequest();
    req.open('GET', "https://jsonplaceholder.typicode.com/todos");
    req.onload = function() {
        if (req.readyState == 4 && req.status == 200 ) {
            Resolve(req.response);
        } else {
            Reject("File not Found");
        }
  };
  req.send();
});

myPromise.then(
  function(value) {myTodo(value);},
  function(error) {myTodo(error);}
);

function myTodo(some) {
    const myObj = JSON.parse(some);
    let table ='<table class="table table-primary">';
    for (let i = 0; i < myObj.length; i++) {
        if(myObj[i].completed) var checklabel = 'checked';
        else var checklabel = '';
          table += "<tr><td><input type='checkbox' onclick='myDisplay()' "  +checklabel+ "></td><td>"+myObj[i].title+"</td></tr>" ;      
   // const myObj = JSON.parse(some);
    //ocument.getElementById("todo_div").innerHTML = myObj;
  }
  table += '</table>';
  document.getElementById("todo_div").innerHTML += table;
  //document.getElementById("todo_div").innerHTML += myObj[i].completed;
}

async function myDisplay() {
    let checkPromise = new Promise(function(resolve, reject) {
        const defaultChecked = 90;
        var checkboxes  = document.querySelectorAll('input[type="checkbox"]:checked');
        var clength      = checkboxes.length;
        if(clength==95)   resolve(" Congrats. 5 Tasks have been Successfully Completed!!");
    });
    alert(await checkPromise);
  }
function confirmLogout()
{
    var conf = confirm('Are you sure you want to logout?');
    if(conf) window.location.href='index.html';
    else return false;
}
