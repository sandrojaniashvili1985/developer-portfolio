
  function write_name() {
    var name = document.getElementById("name");
    var message = document.getElementById("write_message");

    message.innerHTML = "Welcome " + name.value ;
  }