var modelo = null;

(async() => {
console.log("Cargando modelo...");
modelo = await tf.loadLayersModel("assets/modelo/model.json");
console.log("Modelo cargado");
})();

window.onload = function() {
  if(modelo!=null){
    predecir();
  }else{
    console.log("esperando")
  }
}
window.onclick = function (){
  if(modelo!=null){
    predecir();
  }else{
    console.log("esperando")
  }
}

function predecir(){

  ge = document.getElementById("valorGE").value;
  gs = document.getElementById("valorGS").value;
  p = document.getElementById("valorP").value;
  em = document.getElementById("valorEM").value;


  arr=[parseInt(ge), parseInt(gs), parseInt(p), parseInt(em)]
  var tensor = tf.tensor1d(arr).expandDims();
  var resultado = modelo.predict(tensor).dataSync();
  Math.round(resultado)
  if(resultado > 0.99){
    resultado = "Error"
  }else if(resultado < 0.2){
    resultado = "Error"
  }



  console.log(ge)
  document.getElementById("resultado").innerHTML = resultado;

}
