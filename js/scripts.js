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
    // var enlaces = document.getElementsByTagName('a');
    // console.log(enlaces.length);

    // for (let i = 0; i < enlaces.length; i++) {
    //   enlaces[i].setAttribute('target','_blank'); 
    // }

    // var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
    // console.log(enlacesSidebar);

    // for (let i = 0; i < enlacesSidebar.length; i++) {
    //   enlacesSidebar[i].setAttribute('href','http://www.google.com');
    // }


    //querySelector - solo retorna el primer elemento
    // var logo = document.querySelector('#logo');
    // console.log(logo);

    // var encabezado = document.querySelector('aside h2');
    // console.log(encabezado);
    
    // //querySelectorAll- retorna todos los elementos
    // var encabezado2 = document.querySelectorAll('h2');
    // console.log(encabezado2[0].innerText);

    // var encabezado3 = document.querySelectorAll('h2, footer p');
    // console.log(encabezado3[7].innerText);

    // var enlaces = document.querySelectorAll('a');
    // console.log(enlaces);
    // for(var i = 0; i < enlaces.length;i++){
    //   console.log(enlaces[i].innerText);
    // }


    //NODOS
  //   var enlaces = document.querySelectorAll('#menu ul li a')[0];
  //   console.log(enlaces.nodeType);
  //   console.log(enlaces.nodeName);
  //   console.log(enlaces.attributes);
  //   console.log(enlaces.firstChild);
  //   console.log(enlaces.firstChild.nodeValue);
    
  //   enlaces.firstChild.nodeValue = 'Home';
  //   enlaces.id= 'mi_id';


    //crear contenido
    // var sidebar = document.querySelector('#sidebar');
    // var nuevoElemento = document.createElement("H1");
    // var nuevoTexto = document.createTextNode("Hola Mundo");

    // nuevoElemento.appendChild(nuevoTexto);
    // sidebar.appendChild(nuevoElemento);

    // //agregar entrada 6
    // var enlacesSidebar = document.querySelectorAll('#sidebar ul');
    // //creando el enlace
    // var nuevoEnlace = document.createElement('a');
    // nuevoEnlace.setAttribute('href','http://www.google.com');
    // var textoEnlace = document.createTextNode('Entrada 6');
    // nuevoEnlace.appendChild(textoEnlace);
    // //creando la lista
    // var nuevaLista = document.createElement('li');
    // nuevaLista.appendChild(nuevoEnlace);
    // //lo agregamos al menu
    // enlacesSidebar[0].appendChild(nuevaLista);

    //clonar nodo
    // var contenido = document.querySelectorAll('main');
    // var nuevoContenido = contenido[0].cloneNode(true);
    // var sidebar = document.querySelector('aside');

    // sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]);


    //creando lista de post populares
    // var sidebar = document.querySelector('aside');
    // var masVisitados = document.createElement('H2');
    // var textosVisitados = document.createTextNode('Post más visitados');

    // masVisitados.appendChild(textosVisitados);
    // sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);

    // var contenido = document.querySelectorAll('main h2');

    // for(var i = 0; i < contenido.length; i++){
    //   var nuevoElemento = document.createElement('li');
    //   var nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
    //   nuevoElemento.appendChild(nuevoTexto);
    //   sidebar.insertBefore(nuevoElemento,sidebar.childNodes[1]);
    // }

    //eliminar nodos
    // var primerPost = document.querySelector('main article');
    // primerPost.parentNode.removeChild(primerPost);

    // var enlaces = document.querySelector('#navegacion nav ul li a');
    // console.log(enlaces);
    // enlaces.parentNode.removeChild(enlaces);

    //reemplazar nodos
    var viejoNodo = document.querySelector('main h2');
    var nuevoNodo = document.querySelector('footer h2');

    viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);

    var nuevoTitulo = document.createElement('h2');
    var nuevoTexto = document.createTextNode('Hola mundo');
    nuevoTitulo.appendChild(nuevoTexto);

    var viejoNodo2 = document.querySelector('main h2');
    viejoNodo2.parentNode.replaceChild(nuevoTitulo,viejoNodo2);



  });
})();