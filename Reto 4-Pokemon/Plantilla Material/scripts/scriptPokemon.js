
let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      // document ready
    /*var audio = document.getElementById("audio");
    audio.play(); */
    traerPokemones();

    }
  }, 100); 
  


$( "#repoducirIntro" ).on( "click", function() { 
    audio.play();
    console.log( "repoducir" );

});

$( "#pausarIntro" ).on( "click", function() { 
    audio.pause();
    console.log( "pausar" );

});

function getP(url="https://swapi.co/api/people/2",callback){
        var xhttp= new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState==4 && this.status==200){
                 callback(JSON.parse(this.responseText))
                  }

        };
        xhttp.open("GET",url);
        xhttp.send();
    }


    function renderPokemon(data){
        console.log(data);
        document.getElementById("nombrePokemon").innerHTML=data.results[0].name;
         
    }

    function renderPerfilGitH(perfil){
        console.log(perfil);
     //   document.getElementById("nombrePokemon").innerHTML=perfil.name;
        
    }


function traerPokemones(){
     
    getP(`https://pokeapi.co/api/v2/pokemon/`,renderPokemon);
}

var app = new Vue({
    el: "#app",
    data: {
      cargando: false,
      personajes: [],
      bayas: [],
      ubicaciones: [],
      evoluciones: [],
      verPokemones:false,
      verBayas:false,
      verUbicaciones:false,
      verEvoluciones:false,
      pokemones:['https://store.hmv.com/HMVStore/media/product/270866/01-270866.jpg','https://vignette.wikia.nocookie.net/starwars/images/9/98/Aotctpb.jpg/revision/latest?cb=20110206033257','https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg','https://images-na.ssl-images-amazon.com/images/I/51E9TTSPP9L.jpg','https://sc-events.s3.amazonaws.com/23367/4818681/58d3b2ae321ed9585528fbb6431d5bfa2d38fb20553fba7f30840a81e1c26b32/e9a66672-02a3-464d-8635-0208ad0f5a94.jpg','https://images-na.ssl-images-amazon.com/images/I/91%2BCydthCeL._SL1500_.jpg','https://img04.mgo-images.com/image/thumbnail?id=MMV483CF9EC6C8AADE3703CA236599AF02E0&ql=70&sizes=310x465'],
    },
    methods: {
      getdata: function() {
        this.verPokemones=!this.verPokemones;
        this.verBayas=false;
        this.verUbicaciones=false;
        this.cargando = true;
        fetch("https://pokeapi.co/api/v2/pokemon/")
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data);
            app.personajes = data.results;

            var cTable = document.getElementById('tablaPoke');
            var auxT = "";


            data.results.forEach(function(data,index){
            pokemones=['https://store.hmv.com/HMVStore/media/product/270866/01-270866.jpg','https://vignette.wikia.nocookie.net/starwars/images/9/98/Aotctpb.jpg/revision/latest?cb=20110206033257','https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg','https://images-na.ssl-images-amazon.com/images/I/51E9TTSPP9L.jpg','https://sc-events.s3.amazonaws.com/23367/4818681/58d3b2ae321ed9585528fbb6431d5bfa2d38fb20553fba7f30840a81e1c26b32/e9a66672-02a3-464d-8635-0208ad0f5a94.jpg','https://images-na.ssl-images-amazon.com/images/I/91%2BCydthCeL._SL1500_.jpg','https://img04.mgo-images.com/image/thumbnail?id=MMV483CF9EC6C8AADE3703CA236599AF02E0&ql=70&sizes=310x465'];
            //  app.personajes=app.personajes+pokemones;
            var x=(pokemones[index]);   
            // auxT += `<img id="img2" src='${x}'  align="center" />`;
            app.pokemones=x;
              
              console.log(app.pokemones);            
                   })
                 //  cTable.innerHTML = auxT;
 
            app.cargando = false;
          })
          .catch(function(error) {
            console.log(error.message);
            app.cargando = false;
          });
      },
      getbayas: function() {
        this.verBayas=!this.verBayas;
        this.verPokemones=false;
        this.verUbicaciones=false;
        this.cargando = true;
        fetch("https://pokeapi.co/api/v2/berry/")
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data);
            app.bayas = data.results;
         
            app.cargando = false;
          })
          .catch(function(error) {
            console.log(error.message);
            app.cargando = false;
          });
      },
      getubicaciones: function() {
        this.verUbicaciones=!this.verUbicaciones;
        this.verBayas=false;
        this.verPokemones=false;
        this.cargando = true;
        fetch("https://pokeapi.co/api/v2/location/")
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data);
            app.ubicaciones = data.results;
         
            app.cargando = false;
          })
          .catch(function(error) {
            console.log(error.message);
            app.cargando = false;
          });
      },

      
      getevoluciones: function() {
        this.verEvoluciones=!this.verEvoluciones;
        this.verUbicaciones=false;
        this.verBayas=false;
        this.verPokemones=false;
        this.cargando = true;
        fetch("https://pokeapi.co/api/v2/evolution-chain/")
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data);
            app.evoluciones = data.results;
         
            app.cargando = false;
          })
          .catch(function(error) {
            console.log(error.message);
            app.cargando = false;
          });
      },

      getpokemon: function(url){
        fetch(url)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data);
            
          })
          .catch(function(error) {
            console.log(error.message);
            app.cargando = false;
          });
      }
    }
  });