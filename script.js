
icons = document.querySelectorAll('.icon-hook');

for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', function(event) {
    event.preventDefault();
 
    var icon = this;
    var currentClass = icon.getAttribute('class'); 

    console.log(icon);

    if (currentClass.indexOf('active') > -1) { 
   
      icon.setAttribute('class', currentClass.replace(' active', ''));
    } else { 

      icon.setAttribute('class', currentClass + ' active');
    }
  }, false);
}