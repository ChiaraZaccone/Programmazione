//creare una funzione costruttore per il docente con nome cognome matricola e materia con i
// seguenti metodi: insegnaMateria()-> sto insegnando materia
//presentati()-> ciamo mi chiamo etc...
// nella pagina mostrare una lista dei docenti

function Docente(nome, cognome, matricola, materia){
    this.nome=nome;
    this.cognome=cognome;
    this.matricola=matricola;
    this.materia=materia;


    this.insegnaMateria=function(){
        let insegnamento="Sto insegnando..."+this.materia[0];
        return insegnamento;
    }
    
    
    this.presentati=function(){
        let presentazione= "Ciao sono  "+this.nome+" "+this.cognome+" e insegno "+this.materia;
        return presentazione;
    }
    
}



var docenti=[
new Docente("Dario", "Mennillo",1,["Ingegneria del Software"," FrontEnd"]),
new Docente("Oscar", "Vecchioni",2,["Database"," BackEnd"]),
new Docente("Fabio", "Pileggi",3,["Linguaggio Java"," BackEnd"])
]

console.log(docenti);


var listaDocenti=document.getElementById("listaDocenti");

function stampaLista(){
    listaDocenti.innerHTML ="";

docenti.forEach(docente=>{
    listaDocenti.innerHTML +="<li> "+docente.presentati()+"</li>";

})
}

stampaLista();

//inserire 2 campi imput per l'inserimento del nome cognome e materia, al fine dal creare un nuovo docente
//la matricola deve essere autoincrementale

// per inserire un nuovo docente prendo i valori dei campi input, creo una funzione nella quale faccio un new docente
//(i parametri sono i value recuperati dai campi imput). Faccio push del nuovo Docente()
//nell'array e  ristampo la lista docenti

var btnAgg=document.getElementById("btnAgg");

function creaDoc(){

    var nome=document.getElementById("nome").value;
    var cognome=document.getElementById("cognome").value;
    var materia=document.getElementById("materia").value;

    var matricola=10;
    //le materie vengono inserite con la virgola. Per poterle trasformare in array uso il metodo split
    //dove gli diciamo che quando incontre (, ) di creare un array al posto della stringa
    
    let materieArray = materia.split(", ");

    let nuovoDocente = new Docente(nome, cognome, matricola, materia);

    docenti.push(nuovoDocente);
    stampaLista();
}

btnAgg.addEventListener("click",creaDoc);


