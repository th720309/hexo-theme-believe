var appDaily = {
  bindToggleButton: function() {
    var btn = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.navbar');

    btn.addEventListener('click', function() {
      var c = nav.getAttribute('class') || '';

      if (c.indexOf('show-force') !== -1) {
        nav.setAttribute('class', c.replace(/show-force/, '').trim());
      } else {
        nav.setAttribute('class', (c + ' show-force').trim());
      }
    });
  }
};

appDaily.bindToggleButton();
