//ini tester
//function validateform() {
 //   const nama = document.forms['message-form']['name-input'].value

   // if (nama == '') {
     //   document.getElementById("error-name").innerHTML = "tidak boleh kosong"

       // return false
    //}
//}

let name = prompt("siapakah nama anda?", "")
document.getElementById("name").innerHTML = name

function setSenderUI(nama, emailAnda, pesan) {
    document.getElementById("sender-nama").innerHTML = nama;
    document.getElementById("sender-email-anda").innerHTML = emailAnda;
    document.getElementById("sender-pesan").innerHTML = pesan;
  }
  
  function validateform() {
    const nama = document.forms["message-form"]["nama"].value;
    const email = document.forms["message-form"]["email-anda"].value;
    const pesan = document.forms["message-form"]["pesan"].value;
  
    if (nama == "" || email == "" || pesan == "") {
      alert("Tidak boleh ada yang kosong");
      return false;
    }
  
    setSenderUI(nama, email, pesan);
    return false;
  }
  
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs((slideIndex += n));
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("banner-img");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }

  let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('banner-img');
    console.log('indexBanner:' + indexBanner);
    console.log('listImage:' + listImage.length);
    if (indexBanner > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log(listImage);
}