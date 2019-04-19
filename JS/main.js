window.addEventListener('load', () => {
    let input = document.querySelector("#arthurzinho");
    let imagem = document.querySelector("#imagem");

    input.addEventListener('change', (e) => {
        files = input.files;

        // FileReader support
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                imagem.src = fr.result;
            }
            fr.readAsDataURL(files[0]);
        }

    });


});

function aplicaFiltro(input, style, unit = "") {
    objeto[style] = input.value;
    imagem.style.filter = objeto.toString();
}

var objeto = {
    grayscale: 0,
    blur: 0,
    opacity: 1,
    sepia: 0,
    saturate: 1,
    "hue-rotate": 0,
    invert: 0,
    brightness: 1,
    contrast: 1,

    toString: function () {
        return `
        grayscale(${this.grayscale})
        blur(${this.blur}px)
        opacity(${this.opacity})
        sepia(${this.sepia})
        saturate(${this.saturate})
        hue-rotate(${this["hue-rotate"]}deg)
        invert(${this.invert})
        brightness(${this.brightness})
        contrast(${this.contrast})
         `;
    }
};



/* 
          
           
            
            
              
               ) */