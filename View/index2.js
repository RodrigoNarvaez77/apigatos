async function opciones() {
    opciongatito = document.getElementById("opciones");
    const response = await fetch(`/api/data/gatitos/todoslosgatitos`);
    const data = await response.json();
    console.log(data);

    try{ 
        
        data.forEach(item => {
        const nuevasopciones = document.createElement('option');
        nuevasopciones.textContent = item.name;
        console.log(nuevasopciones);
        opciongatito.appendChild(nuevasopciones);
    });
    }catch(error){
        console.error("error",error);
    }      

}

opciones()