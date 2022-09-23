class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    
    getFullName()

   addMascotas (mascotas) {
        const newMascotas = { mascotas: mascotas}
        this.mascotas.push (newMascotas)
   }

    countMascotas(mascotas) {
        mascotas.length
    }

    addBook(nombre, autor) {
        const newBook = {nombre: nombre, autor: autor}
        this.libros.push (newBook)
    }

    getBookNames(libros) {
        this.libros.map (libros)
    }
}

const usuario1 = new Usuario(
    "Marcelo",
    "Gallardo",
    [{
        nombre: "Gallardo Recargado",
        autor: "Diego Borinsky"
    }],
    ["gallina", "gallo"])

usuario1.addBook ("La rueda del tiempo", "Robert Jordan")
usuario1.addMascota ("chancho")
usuario1.countMascotas ()
usuario1.getBookNames ()
usuario1.getFullName ()