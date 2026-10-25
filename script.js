// Le formulaire n'est relié à aucune boîte mail : on le dit franchement au visiteur.
  (function () {
    var form = document.getElementById('contact-form');
    var status = document.getElementById('status');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        status.textContent = 'Merci de remplir ton nom, une adresse e-mail valide et ton message.';
        form.reportValidity();
        return;
      }
      status.textContent = 'Ce formulaire n’est pas encore relié à une boîte mail, ton message n’a donc pas été envoyé. Retrouve-moi plutôt sur LinkedIn ou GitHub.';
    });
  })();