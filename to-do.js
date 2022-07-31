var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function fire() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("xyx").value;var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function fire() {
  //   var li = document.createElement("li");
  var inputValue = document.getElementById("xyx").value;
  //   var t = document.createTextNode(inputValue);
  //   li.appendChild(t);
  const newTodo = document.createElement("div");
  newTodo.innerHTML = `<div class='todo'><div class='todo-text'>${inputValue}</div> <button class='delete-todo-btn'>delete</button><input type='checkbox' class='check-box-btm' /></div>`;
  newTodo
    .querySelector(".delete-todo-btn")
    .addEventListener("click", () => newTodo.remove());
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(newTodo);
  }
  document.getElementById("xyx").value = "";

  newTodo.querySelector(".check-box-btm").addEventListener("click", (event) => {
    if (event.target.checked) {
      newTodo.querySelector(".todo-text").style.fontSize = "1px";
    } else {
      newTodo.querySelector(".todo-text").style.fontSize = "1000px";
    }
  });

  //   var span = document.createElement("SPAN");
  //   var txt = document.createTextNode("\u00D7");
  //   span.className = "close";
  //   span.appendChild(txt);
  //   li.appendChild(span);

  //   for (i = 0; i < close.length; i++) {
  //     close[i].onclick = function() {
  //       var div = this.parentElement;
  //       div.style.display = "none";
  //         }
  //     }
}
function boom() {
  var lim = document.createElement("li");
  var txt = document.getElementById("1").value;
  var t1 = document.createTextNode(txt);
  lim.append(t1);
  if (txt === "") {
    alert("please input value");
  } else {
    document.getElementById("3").appendChild(lim);
  }
  document.getElementById("1").value = "";
}

    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("xyx").value = "";


   

    //   var span = document.createElement("SPAN");
    //   var txt = document.createTextNode("\u00D7");
    //   span.className = "close";
    //   span.appendChild(txt);
    //   li.appendChild(span);

    //   for (i = 0; i < close.length; i++) {
    //     close[i].onclick = function() {
    //       var div = this.parentElement;
    //       div.style.display = "none";
    //         }
    //     }
}
function boom() {
    var lim = document.createElement("li");
    var txt = document.getElementById("1").value;
    var t1 = document.createTextNode(txt);
    lim.append(t1);
    if (txt === "") {
        alert("please input value");
    }
    else {
        document.getElementById("3").appendChild(lim);
    }
    document.getElementById("1").value="";
}
