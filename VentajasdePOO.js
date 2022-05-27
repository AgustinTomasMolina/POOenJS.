// Ventajas de la programación orientada a objetos CLASE 7, 8 y 9

class Student {
    constructor({//     Definicion de entidades. Con default agregando =, si no trae
        //              Nada cuando lo instanciamos trae como undefined o un array vacio
        //              Crea parametros con objetos.
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      aprovvedCourses = [],
      learningPaths = [],
    }) {
       this.name = name;
       this.emai = email;
       this.username = username;//  this un objeto global, manda a llamar a los mismos
       //                           parametros que el constructor y los instancia para
                                    // definirlos, tambien se pueden definir como objetos.
       this.socialMedia = {
           twitter,
           intagram,
           facebook,
       };
       this.aprovvedCourses = [] = aprovvedCourses; // El = manda a llamar que sea igual a la instacia que estamos haciendo. Cuando es llamado.
       this.learningPaths = [] = learningPaths;
    }
}

const juan2 = new Student({
    name: "Moli",
    username: "Molidc",
    email: "Moli@gmail.com",
    twitter: "Moli",
});

const miguelito2 = new Student({
    name: "miguelito",
    username: "miguelitofeliz",
    email: "MIGUELITO@gmail.com",
    twitter: "miguelito_feliz",
});



class learningPaths {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}


class courses {
    constructor({
        name,
    }){
        this.name = name;
    }
}

const CursoDefinitivoHTMLYCSS = new courses({
    name: "Curso definitivo de HTML y CSS"
});

const CursoDeDatos = new courses({
    name: "Curso definitivo de datos"
});

const CursoVGS = new courses({
    name: "Curso definitivo VGS"
});

class clases {
    constructor({
        name,
        time = 2,
        profesor = [],
    }){
        this.name = name;
        this.time = 2 = time;
        this.profesor = [] = profesor;
    }
}

const ClasesparaWEB = new clases({
    name: "Clase de autonomia en la web",
    time: 3,
    profesor:[
        "Alejandro",
        "Maria"
    ],

}) 


const escuelaWeb = new learningPaths({
    name: "Escuela de Desarrollo Web",
    CursoDefinitivoHTMLYCSS,
    ClasesparaWEB,
});

const escuelaData = new learningPaths({
    name: "Escuela de Data Science",
    CursoDeDatos,
});

const escuelaVgs = new learningPaths({
    name: "Escuela Vgs",
    CursoVGS,
});