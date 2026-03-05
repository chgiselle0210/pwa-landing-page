if ('serviceWorker' in navigator) {
  console.log('serviceWorker es compatible');

  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('serviceWorker registrado correctamente: (Scope', reg.scope, ')'))
        .catch(err => console.log('serviceWorker no se ha podido registrar', err));
  });
} else {
  console.log('serviceWorker no es compatible');
}