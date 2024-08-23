 // TRY CATCH

/*
The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.
*/

try {
    // code to try if machin machin yes else throw non case toi
  }
  catch(err) {
    // Block of code to handle errors
    // Error object with two properties: name and message.
    console.log(err.stack, err.message, err, {err}) // stack = error: ..., message = message.., err = error:message at..., {err} menu deroulant
  }
  finally {
    // code to execute regardless of the try/catch result
  }
  
  /*
  e: 
  Error: La valeur entrée n'est pas un nombre valide at HTMLButtonElement.<anonymous> (http://127.0.0.1:5500/script.js:11:23)
  message: "La valeur entrée n'est pas un nombre valide"
  stack: "Error: La valeur entrée n'est pas un nombre valide\n 
  */
  
  // Throw can throw a string,number, boolean, or an object
  
  
  function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
      if(x.trim() == "") throw "is empty";
      if(isNaN(x)) throw "is not a number";
      x = Number(x);
      if(x > 10) throw "is too high";
      if(x < 5) throw "is too low";
    }
    catch(err) {
      message.innerHTML = "Error: " + err + ".";
    }
    finally {
      document.getElementById("demo").value = "";
    }
  }