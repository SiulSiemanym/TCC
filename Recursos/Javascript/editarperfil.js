document.getElementById("editButton").addEventListener("click", function() {
  document.getElementById("editButton").style.display = "none";
  document.getElementById("cancelButton").style.display = "inline-block";
  document.getElementById("saveButton").style.display = "inline-block";

  document.querySelectorAll(".editable").forEach(function(input) {
      input.readOnly = false;
      input.classList.remove("editable");
  });

  // Tornar a senha visível
  const passwordField = document.getElementById("passwordField");
  if (passwordField.type === "password") {
      passwordField.type = "text";
  }
});

document.getElementById("cancelButton").addEventListener("click", function() {
  document.getElementById("editButton").style.display = "inline-block";
  document.getElementById("cancelButton").style.display = "none";
  document.getElementById("saveButton").style.display = "none";

  document.querySelectorAll(".text-input").forEach(function(input) {
      input.readOnly = true;
      input.classList.add("editable");
  });

  // Tornar a senha censurada novamente
  const passwordField = document.getElementById("passwordField");
  if (passwordField.type === "text") {
      passwordField.type = "password";
  }
});

document.getElementById("saveButton").addEventListener("click", function() {
  // Coloque aqui o código para salvar os dados ou qualquer outra ação necessária
  alert("Dados salvos com sucesso!");
  document.getElementById("editButton").style.display = "inline-block";
  document.getElementById("cancelButton").style.display = "none";
  document.getElementById("saveButton").style.display = "none";

  document.querySelectorAll(".text-input").forEach(function(input) {
      input.readOnly = true;
      input.classList.add("editable");
  });

  // Tornar a senha censurada novamente
  const passwordField = document.getElementById("passwordField");
  if (passwordField.type === "text") {
      passwordField.type = "password";
  }
});