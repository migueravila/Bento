var inputName;

if(localStorage.getItem("name") != null)
{
    document.getElementById('modalOverlay').style.display = 'none'
    inputName = localStorage.getItem("name");

    document.getElementById('greetings').innerText += inputName;
}

window.onload = function() {
  };
  document.getElementById('button').onclick = function() {
	document.getElementById('modalOverlay').style.display = 'none'
	inputName = document.getElementById('name').value;
    localStorage.setItem("name", inputName);

	document.getElementById('greetings').innerText += inputName;
  };