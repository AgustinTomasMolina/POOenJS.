class courses {
    constructor({
         name,
    }){
        this._name = name;
       }
    
get name() {
	return this._name;
}

set name(nuevoNombrecito) {
		if (nuevoNombrecito === "Curso malito de programación básica") {

				console.error("Web ...no");
		} else {

				this._name = nuevoNombrecito;
		}
    }
}
