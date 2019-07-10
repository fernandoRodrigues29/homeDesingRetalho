function menuResponsivo(){
    let menu_usuario = document.getElementById('menu-usuario');
    let menu_central = document.getElementById('menu-central');
     
     /**/
      if( menu_usuario.style.display === "none"){
        menu_usuario.style.display="block";
      }else{
        menu_usuario.style.display="none";
      }

      if( menu_central.style.display === "none"){
        menu_central.style.transitionDelay=".5s";
        menu_central.style.display="block";
      }else{
        menu_central.style.display="none";
      }      
  }