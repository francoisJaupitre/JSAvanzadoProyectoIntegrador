HomePage = () => {
    const page = Handlebars.compile(`
     <div class="index-page">
       <!-- <form> -->
            <div class="row">
                <div class="col-lg-10 form-group">
                    <label for="nombreInput">Buscar por nombre de producto</label>
                    <input type="text" class="form-control" id="nombreInput" aria-describedby="nombreHelp" placeholder="Ingrese un nombre">
                    <small id="nombreHelp" class="form-text text-muted">Puede escribir su busqueda aquí.</small>
                </div>
                <div class="col-lg-2 form-group">
                    <select class="form-control" id="ordenarSelect">
                        <option value="">Ordenar</option>
                        <option value="mayor">Mayor precio</option>
                        <option value="menor">Menor precio</option>
                    </select>
                 </div>
        <!--         <div class="col-lg-1">
                    <button type="submit" class="btn btn-info">Buscar</button>
                 </div> -->
             </div>  
       <!-- </form> -->
        <div id="list" class="row">
            {{#each articulos}}
            <div class="col-3" data-id="{{this.id}}">
                <div class="card m-1" style="width: 18rem;">
                    <img class="card-img-left" src="{{this.urlImagen}}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{this.nombre}}</h5>
                        <p class="card-text">
                            <span>$</span>
                            <span>{{this.precio}}</span>
                        </p> 
                    </div>
                </div>
            </div>
            {{/each}}
         </div>
    </div>
    `)

    document.getElementById('view').innerHTML = page({
        articulos: getArticulos()
    });
}

const getArticulos = () => ([
    {
        "nombre": "Unbranded Cotton Shoes",
        "descripcion": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "precio": "15.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "4"
    },
    {
        "nombre": "Modern Frozen Chair",
        "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "precio": "300.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "5"
    },
    {
        "nombre": "Oriental Rubber Car",
        "descripcion": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "precio": "80.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "6"
    },
    {
        "nombre": "Awesome Plastic Bacon",
        "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "precio": "144.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "7"
    },
    {
        "nombre": "Recycled Metal Ball",
        "descripcion": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "precio": "800.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "8"
    },
    {
        "nombre": "Handcrafted Concrete Towels",
        "descripcion": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "precio": "605.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "9"
    },
    {
        "nombre": "Handmade Bronze Salad",
        "descripcion": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "precio": "566.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "11"
    },
    {
        "nombre": "Bespoke Bronze Keyboard",
        "descripcion": "The Football Is Good For Training And Recreational Purposes",
        "precio": "587.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "12"
    },
    {
        "nombre": "Awesome Cotton Gloves",
        "descripcion": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "precio": "391.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "13"
    },
    {
        "nombre": "Handmade Concrete Bacon",
        "descripcion": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "precio": "306.00",
        "urlImagen": "http://loremflickr.com/640/480/technics",
        "id": "14"
    }
])

HomePage()

const list = Handlebars.compile(`
            {{#each articulos}}
            <div class="col-3" data-id="{{this.id}}">
                <div class="card m-1" style="width: 18rem;">
                    <img class="card-img-left" src="{{this.urlImagen}}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{this.nombre}}</h5>
                        <p class="card-text">
                            <span>$</span>
                            <span>{{this.precio}}</span>
                        </p> 
                    </div>
                </div>
            </div>
            {{/each}}
        `)

document.addEventListener("change", function (e) {


    if (e.target.id == "ordenarSelect" || e.target.id == "nombreInput") {
        let articulos = getArticulos();

        const nombreInput = document.getElementById("nombreInput");
        const inputValue = nombreInput.value;
        if (inputValue.length > 0) {
            articulos = articulos.filter(
                (item) => item.nombre.toLowerCase().includes(inputValue.toLowerCase())
            )
            console.log('articulos.length', articulos.length);
        }

        const ordenarSelect = document.getElementById("ordenarSelect");
        const selectedIndex = ordenarSelect.selectedIndex;

        if (typeof selectedIndex !== 'undefined') {
            const selectedValue = ordenarSelect.options[selectedIndex].value;

            if (selectedValue == "mayor") {
                articulos = articulos.sort((a, b) => b.precio - a.precio)
                console.log('articulos.length', articulos.length);
            }
            else if (selectedValue == "menor") {
                articulos = articulos.sort((a, b) => a.precio - b.precio)
                console.log('articulos.length', articulos.length);
            }
        }

        document.getElementById('list').innerHTML = list({
            articulos: articulos
        });
    }

});
