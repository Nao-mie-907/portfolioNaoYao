// Le formulaire est envoyé à l'adresse définie dans son attribut action.
  (function () {
    var form = document.getElementById('contact-form');
    var status = document.getElementById('status');
    if (!form || !status) return;
    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        status.textContent = 'Merci de remplir ton nom, une adresse e-mail valide et ton message.';
        form.reportValidity();
        return;
      }
      status.textContent = 'Envoi du message en cours…';
    });
  })();