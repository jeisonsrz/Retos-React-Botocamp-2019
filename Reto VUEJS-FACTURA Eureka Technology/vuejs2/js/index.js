
window.onload = function(){
  var fecha = new Date(); //Fecha actual
  var mes = fecha.getMonth()+1; //obteniendo mes
  var dia = fecha.getDate(); //obteniendo dia
  var ano = fecha.getFullYear(); //obteniendo año
  if(dia<10)
    dia='0'+dia; //agrega cero si el menor de 10
  if(mes<10)
    mes='0'+mes //agrega cero si el menor de 10
  document.getElementById('fechaActual').value=ano+"-"+mes+"-"+dia;
}


Vue.component("super-componente", {
  props: ["nombre"],
  
  data: function() {
    console.log(app.usuario.producto+"datooo");
    if(app.usuario.producto=="papa"){
      x=1000
    } else if(app.usuario.producto=="yuca"){
      x=2000
    }else if(app.usuario.producto=="tomate"){
      x=3000
    }else if(app.usuario.producto=="limon"){
      x=4000
    }else if(app.usuario.producto=="Modelado"){
      x=6000
    
    }else if(app.usuario.producto=="Impresión 3D"){
      x=5300
    
    }
    else if(app.usuario.producto=="Prototipo"){
      x=6300
    
}else if(app.usuario.producto=="Figura personalizada"){
      x=8000
    
}else if(app.usuario.producto=="Desarrollo IOT"){
      x=10000}
    
    else {
      x=0
    }

    return {
     precio: x,
      cantidad: 1
    
     
    };
  },
  methods: {
    addLike: function() {
      this.cantidad++;
    }
  },
  template: `
  <div class="container">
              <div> <h2 align="center"> Total Factura={{ precio*cantidad }}  </h2> </div>
              <div class="row">
                <div class="col-md-3">
                <h5>Catidad</h5>
                <button @click="addLike()">👍 Agregar Cantidad {{ cantidad }}</button>
                </div>
                <div class="col-md-3">
                <h5>Descripción(super componente)</h5>
                <div style="border: 1px solid blue;" class="col-md-6">
              <h5>{{ nombre }} </h5> </div>
                </div>
                <div class="col-md-3">
                <h5>Valor Unitario</h5>
                <h5>{{precio}}</h5>
                </div>
                <div class="col-md-3">
                <h5>Total</h5>
                <div style="border: 1px solid blue;" class="col-md-6">
              <h5>{{ cantidad }} </h5> </div>
                
               
                </div>
                
              </div>
              

              
            </div>

            

  `
});

Vue.component("v-select", VueSelect.VueSelect);
var app = new Vue({
  el: "#app",
  data: {
    titulo: "Vue clase 2",
    estudiantes: [
      
    ],
    estudiante_id: 0,
    estudiante: {},
    usuario: {
      nombre: "",
      email: "",
      celular: "",
      dirección: "",
      producto: "",
    },
    producto: [],
    productos:[{id:1,nombre:"papa"},
    {id:1,nombre:"yuca"},
    {id:1,nombre:"papa"},]
  },
  methods: {
    changeselect: function(id) {
      console.log(id);
    },
    addSuper: function() {
      this.estudiantes.push({ id: 0, nombre: app.usuario.producto});
     
    }
  }
});
