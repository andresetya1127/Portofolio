Swal.fire({
  title: "Ngapain Hayoo lo!",
  text: "Pasti mau liat profil aku kan?",
  imageUrl: "./images/TwitchEmoteMaker.png",
  imageWidth: 260,
  imageHeight: 280,
  imageAlt: "Custom image",
  allowOutsideClick: false,
  allowEscapeKey: false,
  submitText: "Kembali",
  backdrop: true,
  confirmButtonColor: "#107fe0",
  confirmButtonText: "Lihat Profil",
  cancelButtonText: "Nggak",
  showCancelButton: true,
  cancelButtonColor: "#bf1151",
}).then((result) => {
  if (result.isConfirmed) {
    confirm();
  } else {
    deny();
  }
});

function deny() {
  Swal.fire({
    title: "Ya udah pergi sana.",
    imageUrl: "./images/marah.png",
    imageWidth: 260,
    imageHeight: 280,
    imageAlt: "Custom image",
    allowOutsideClick: false,
    allowEscapeKey: false,
    submitText: "Kembali",
    backdrop: true,
    confirmButtonColor: "#107fe0",
    confirmButtonText: "Ya lihat Profile deh.",
  }).then((result) => {
    if (result.isConfirmed) {
      confirm();
    }
  });
}

function confirm() {
  Swal.fire({
    title: "Silahkan Kak.",
    imageUrl: "./images/makasih.png",
    imageWidth: 260,
    imageHeight: 280,
    imageAlt: "Custom image",
    allowOutsideClick: false,
    allowEscapeKey: false,
    submitText: "Kembali",
    backdrop: true,
    confirmButtonColor: "#107fe0",
    confirmButtonText: "Makasih..",
  });
}
