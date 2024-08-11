//Immediately Invoked Function Expreessions (IIFE)

(function chai(){
    console.log('DB CONNECTED');
}) ();

( (name) => {
    console.log('DB CONNECTED TWO ${name}');
}

) ('disha');