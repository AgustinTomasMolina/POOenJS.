const natalia = { // Objeto literal, no esta vacia ya que existe el __proto__ ya que la heredan
    name : "Natalia",
    age : 20,
    cursosAprobados:[
        "Curso Definitivo de HTML y CSS",
        "Curso practico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);  // This hace referencia a ese mismo objeto. this hace referencia al mismo
        // objeto natalia.
    },
};


function Student(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCursito) { // Asi podemos crear metodos
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Intruduccion a la Produccion de Videojuegos",
        "Curso de Creacion de Personajes",
    ],
);







