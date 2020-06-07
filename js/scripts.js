(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    
    //getElementById
    // var logo = document.getElementById('logo');   
    // var navegacion = document.getElementById('navegacion');
    

    //GetElementsByClassName
    // var navegacion = document.getElementsByClassName('navegacion');
    // var contenido = document.getElementsByClassName('contenido');

    // console.log(contenido);


    //getElementsByTagName
    var enlaces = document.getElementsByTagName('a');
    console.log(enlaces.length);

    for (let i = 0; i < enlaces.length; i++) {
      enlaces[i].setAttribute('target','_blank');
      
    }

    var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
    console.log(enlacesSidebar);

    for (let i = 0; i < enlacesSidebar.length; i++) {
      enlacesSidebar[i].setAttribute('href','http://www.google.com');
      
    }


    
  });
  
})();