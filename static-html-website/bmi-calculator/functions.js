  function sayWassup(){
      console.log("whatsup");
  }

  console.log("nope not today"); 

  sayWassup();



  function checkingThis(checking1){
    console.log("helloww");
 
   }

   checkingThis();




   const myPost = "hello world";
function readPost(post) {
  console.log(post); 
}

readPost(myPost);


const checkThis = "Oke ik snap het"
function checkDit(check) {
    console.log(check)
}

checkDit(checkThis);


function lasVegas() {
    // define a variable in local scope
    const whatHappened = "we did naughty things";
  
    // return the value (output!)
    return whatHappened;
  }
  
  // when we call the function, it will resolve to: "we did naughty things"
  const secret = lasVegas(); // we can assign it to a variable
  console.log(secret); // "we did naughty things"