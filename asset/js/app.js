function ready(callback) {
  // in case the document is already rendered
  if (document.readyState != "loading") callback();
  // modern browsers
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
  // IE <= 8
  else
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState == "complete") callback();
    });
}

// j'appel les element qui vont recevoir une modification
const msg = document.querySelector("#txa");
const compt = document.querySelector(".compteur");
const btn = document.querySelector(".submit-Btn");
const notif = document.querySelector(".notifii");
const form = document.querySelector("#ezLif");
var autoTxt = document.querySelector(".typing");

// verification que tout mes element sont appeler
// console.log(msg);
// console.log(compt);
// console.log(btn);
// console.log(notif);
// console.log(form);
// console.log(autoTxt);

// pose d'ecouteur d'evenement "keyup" => (CAPTE QUAND LA PRESSION DE LA TOUCHE EST RELACHER)
msg.addEventListener("keyup", function (event) {
  let caracteresRestants = 300 - parseInt(this.value.length);
  // console.log(caracteresRestants);
  compt.innerHTML = caracteresRestants;
  if (caracteresRestants > 20) {
    compt.setAttribute("style", "");
    msg.classList.remove("red-border");
    if (![...notif.classList].includes("d-none")) {
      notif.classList.add("d-none");
    }
    btn.removeAttribute("disabled");
  } else if (caracteresRestants >= 0 && caracteresRestants <= 20) {
    compt.style.color = "orange";
    msg.classList.remove("red-border");
    if (![...notif.classList].includes("d-none")) {
      notif.classList.add("d-none");
    }
    btn.removeAttribute("disabled");
  } else {
    compt.style.color = "red";
    btn.setAttribute("disabled", "true");
    msg.classList.add("red-border");
    notif.classList.remove("d-none");
    notif.classList.add("notif-error");
    notif.innerHTML = "Attention Votre texte est trop long!";
  }

  btn.addEventListener("click", function (event) {
    event.preventDefault();
    let message = msg.value;
    console.log("message:", message);
    if (!message.length) {
      notif.setAttribute("class", "");
      notif.classList.add("notif-error");
      notif.innerHTML = "Veuillez écrire un message !";
      msg.classList.add("red-border");
      btn.setAttribute("disabled", "true");
    } else {
      btn.setAttribute("disabled", "true");
      notif.setAttribute("class", "");
      notif.classList.add("notif-success");
      notif.innerHTML = "Message CRYPTER et ENVOYER correctement !";

      window.setTimeout(function () {
        notif.classList.add("d-none");
        notif.classList.remove("notif-success");
        msg.value = "";
        compt.innerHTML = 300;
        compt.setAttribute("style", "");
        btn.removeAttribute("disabled");
      }, 4000);
    }
  });
});
// texte qui s'ecrit seul

autoTxt = new Typed(".typing", {
  strings: [
    "▒▒▒▒▒▒▒▒▒",
    "Envoyer un message crypte",
    "Send an encrypted message",
    "Safe Code",
    "▒▒▒▒▒▒▒▒▒",
  ],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true,
});

var typed4 = new Typed("#txa", {
  strings: [
    "Securisation Du Serveur ...",
    "Loading$Cryptage$des$Données$En$Cours..",
    "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒50%",
    "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒60%",
    "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒70%",
    "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒80%",
    "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒90%",
    "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒100%",
    "▒▒▒▒▒▒▒▒Server Safe▒▒▒▒▒▒▒▒",
    "▒ienv▒nue dans ▒a Matri▒e",
    "je sui▒ @Sneaky !",
    "Quel e▒t votr▒ demande ?!▒",
    "Tapez votre texte",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "▒▒#▒▒Reset▒<`$▒delete.&▒refresh(ip)}>▒`",
    "▒`#Encoding_▒restart.Now`▒▒",
  ],
  typeSpeed: 90,
  backSpeed: 20,
  attr: "placeholder",
  loop: true,
});
