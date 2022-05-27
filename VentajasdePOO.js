// Ventajas de la programación orientada a objetos CLASE 7, 8 y 9 y 12 y 16


class Comment {
    constructor({
        content,
        studentName,
        studenRole = "estudiante",

    }){
        this.content = content; 
        this.studentName = studentName; 
        this.studenRole = studenRole; 
        this.likes = 0;
    }


    publicar(){
        console.log(this.studentName + "(" + this.studenRole +")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }

}

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta reproducion desde la url " + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}


class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoID);
    }
}

class courses {
    constructor({
        name,
        isFree = false,
        lang = "spanish",
    }){
        this.name = name;
        this.isFree = isFree;
        this.lang = lang;
    }
}

const CursoDefinitivoHTMLYCSS = new courses({
    name: "Curso definitivo de HTML y CSS",
    isFree: true,
});

const CursoDeDatos = new courses({
    name: "Curso definitivo de datos"
});

const CursoVGS = new courses({
    name: "Curso definitivo VGS",
    lang: "english",
});


class clases {
    constructor({
        name,
        profesor = [],
    }){
        this.name = name;
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
class learningPaths {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

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



// HERENCIA.

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
      approveCourses = [],
      learningPaths = [],
    }) {
       this.name = name;
       this.emai = email;
       this.username = username;//  this un objeto global, manda a llamar a los mismos
       //                           parametros que el constructor y los instancia para
                                    // definirlos, tambien se pueden definir como objetos.
       this.socialMedia = {
           twitter,
           instagram,
           facebook,
       };
       this.approveCourses = [] = approveCourses; // El = manda a llamar que sea igual a la instacia que estamos haciendo. Cuando es llamado.
       this.learningPaths = [] = learningPaths;
    }

    
    publicarComentario(commentContent) {
        const comment = new Comment({
            content:commentContent,
            studentName: this.name,
        }); 
        comment.publicar();
     }
    
}

class FreeStudent extends Student {   // Extends, extiende los atributos y metodos de la clase padre
    constructor(props) {
            super(props);      // super es un metodo de JS, y nos permite referenciar al constructor
                                // de la clase madre, donde lo capta la palabra props.
        }

    approveCourse(newCourse) {
            if (newCourse.isFree) {   // con el isFree le estamos agregando una nueva propiedad
                                      // a aprroveCourse.
                this.approveCourses.push(newCourse);
                
            } else {
                console.warn("Lo sentimos, " + this.name + ", solo puede tomar cursos gratis");
            }
        }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approveCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en ingles");
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approveCourses.push(newCourse);   
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approveCourses.push(newCourse);   
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content:commentContent,
            studentName: this.name,
            studenRole: "profesor",
        }); 
        comment.publicar();
     }
}



const juan2 = new FreeStudent({
    name: "Moli",
    username: "Molidc",
    email: "Moli@gmail.com",
    twitter: "Moli",
    learningPaths: [
        escuelaVgs,
    ]
});

const miguelito2 = new BasicStudent({
    name: "miguelito",
    username: "miguelitofeliz",
    email: "MIGUELITO@gmail.com",
    twitter: "miguelito_feliz",
    learningPaths: [
        escuelaWeb,
    ]
});

const freddy = new TeacherStudent({
    name: "freddy vega",
    username: "fredyer",
    email: "F@gep.com",
    twitter: "fredyer",
});





