//671592895694-2veiaeh0hjktmvc5mki23ihj885mr9ht.apps.googleusercontent.com

const $ = document.querySelector.bind(document);

$('body').innerHTML = `<button id="login">Login</button>
                      <button id="logout">Logout</button>
                      `;

// load auth of google apis
gapi.load('auth2', ()=>{
  const auth2 = gapi.auth2.init({
    clientId: "671592895694-2veiaeh0hjktmvc5mki23ihj885mr9ht.apps.googleusercontent.com"
  });

  //check if auth2.signIn() is working
  auth2.isSignedIn.listen(status => {
    console.log(status);
  });

  auth2.currentUser.listen(user => {
    const profile = user.getBasicProfile();
    const name = profile.getName();
    const avatar = profile.getImageUrl();
    console.log({name, avatar});
  });

//login event handler
  $('#login').addEventListener('click', ()=>{
    auth2.signIn();
  });

  //logout event handler
    $('#logout').addEventListener('click', ()=>{
      auth2.signOut();
    });

});
