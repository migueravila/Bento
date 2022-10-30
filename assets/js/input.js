let inputName;

// if(localStorage.getItem("name") != null)
// {
//     document.getElementById('modalOverlay').style.display = 'none'
//     // inputName = localStorage.getItem("name");
//     CONFIG.name = inputName;
//     // document.getElementById('greetings').innerText += inputName;
// }

window.onload = function() {
  document.getElementById('button').onclick = () => {
	  document.getElementById('modalOverlay').style.display = 'none'
	  inputName = document.getElementById('name').value;
    // localStorage.setItem("name", inputName);
    CONFIG.name = inputName;
	  document.getElementById('greetings').innerText += CONFIG.name;
  }
}