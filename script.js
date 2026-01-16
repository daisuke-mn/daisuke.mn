document.addEventListener("DOMContentLoaded", function() {
  const shop = document.getElementById("shop");
  const buttons = document.querySelectorAll(".gold-btn");
  const priceText = document.getElementById("price");
  const popup = document.getElementById("popup");
  const payBtn = document.getElementById("buy");
  const uploadSection = document.getElementById("upload-section");
  const uploadButton = document.getElementById('upload-button');
  const fileInput = document.getElementById('fileInput');
  const preview = document.getElementById('preview');

  let selectedPrice = 0;

  // Gold товчнууд
  buttons.forEach(btn=>{
    btn.onclick=()=>{
      buttons.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      selectedPrice = btn.dataset.price;
      priceText.innerText = "Үнэ: " + selectedPrice + "₮";
    }
  });

  // Gold авах → Popup
  payBtn.onclick=()=>{
    if(selectedPrice==0){
      alert("Gold сонгоно уу");
      return;
    }
    popup.style.display="block";
    uploadSection.style.display='block';
  }

  window.closePopup = function(){
    popup.style.display="none";
  }

  // Данc copy хийх
  window.copyAccount = function(){
    const text = "MonPay данс: 80166216 | IBAN: MN140050099106107579";
    navigator.clipboard.writeText(text).then(()=>{
      alert("Данс clipboard руу copy боллоо!");
    });
  }

  // Screenshot upload
  uploadButton.onclick = ()=>{
    fileInput.click();
  }

  fileInput.addEventListener('change', function(){
    const file = this.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = function(e){
        preview.innerHTML = '<img src="' + e.target.result + '">';
      }
      reader.readAsDataURL(file);
    }
  });
});
