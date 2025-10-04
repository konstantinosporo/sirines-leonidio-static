const phoneLink = document.getElementById("phoneLink");
const phoneModal = document.getElementById("phoneModal");
const closeModal = phoneModal.querySelector(".close");

phoneLink.addEventListener("click", function () {
  phoneModal.style.display = "block";
});

closeModal.addEventListener("click", function () {
  phoneModal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === phoneModal) {
    phoneModal.style.display = "none";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var phoneModal2 = document.getElementById("phoneModal2");
  var phoneLink2 = document.getElementById("phoneLink2");
  var closeButton2 = phoneModal2.querySelector(".close");

  phoneLink2.addEventListener("click", function () {
    phoneModal2.style.display = "block";
  });

  closeButton2.addEventListener("click", function () {
    phoneModal2.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === phoneModal2) {
      phoneModal2.style.display = "none";
    }
  });

phoneLink.addEventListener("click", function(event) {
    // Ελέγχετε το πλάτος της οθόνης και αν είναι μικρότερο από 480 pixels
    if (window.innerWidth <= 480) {
        // Ανοίγετε την εφαρμογή του τηλεφώνου
        window.open('tel:6944422678', '_blank');
        // Αποτρέπετε το default behavior του event click για το κουμπί
        event.preventDefault();
    }
});

  closeModal.addEventListener("click", function () {
    phoneModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === phoneModal) {
      phoneModal.style.display = "none";
    }
  });

  phoneLink2.addEventListener("click", function(event) {
    // Εάν το πλάτος της οθόνης είναι μικρότερο από 480 pixels, ανοίξτε την εφαρμογή του τηλεφώνου
    if (window.innerWidth < 480) {
        window.open('tel:6936162428', '_blank');
        // Αποτρέψτε το προεπιλεγμένο συμβάν κλικ
        event.preventDefault();
    }
});

closeButton2.addEventListener("click", function() {
    phoneModal2.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === phoneModal2) {
        phoneModal2.style.display = "none";
    }
});
});
