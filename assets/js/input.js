const modal = document.getElementById("modalOverlay");
let inputName;

modal.innerHTML = `
      <div class="modalPopup">
				<div class="modalContent">
					<h1>Input your name here</h1>
					<input type="text" id="name" style="border-radius: 25; margin-top: 10px;">
					<button class="buttonStyle" id="button">Submit</button>
				</div>
			</div>`;

// Uncomment the line below if you wanna use localStorage
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

    // Uncomment the line below if you wanna use localStorage
    // localStorage.setItem("name", inputName);

    CONFIG.name = inputName;
	  document.getElementById('greetings').innerText += CONFIG.name;
  }
}