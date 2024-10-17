document.getElementById('searchButton').addEventListener('click', async () => {
    const breedName = document.getElementById('opciones').value;
    const resultDiv = document.getElementById('result');
    
    if (!breedName) {
        resultDiv.innerHTML = 'Por favor, introduce un nombre de raza.';
        return;
    }

    try {
        const response = await fetch(`/api/data/${breedName.toLowerCase()}`);
        const data = await response.json();
        console.log(data);

       if(data){
        resultDiv.innerHTML =`
                <h2>${data.name}</h2>
                <h2>${data.description}</h2>
                <h2>${data.temperament}</h2>
                <h2><a href="${data.wikipedia_url}" target="_blank">Wikipedia</a></h2>
                `
                const imageResponse = await fetch(`https://api.thecatapi.com/v1/images/${data.reference_image_id}`);
                const imgdata = await imageResponse.json();
                console.log(imgdata);

                resultDiv.innerHTML += `
                <div id="result" class="text-center">
                <h2><img src="${imgdata.url}" alt= "${data.name}"></h2>
                </div>
                `
       }

    } catch (error) {
        console.error(error);
        resultDiv.innerHTML = 'Error al cargar datos de la API';
    }
});