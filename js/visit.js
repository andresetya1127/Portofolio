Swal.fire({
  title: "Ngapain Hayoo lo!",
  text: "Pasti mau liat profil aku kan? ",
  imageUrl: "./images/TwitchEmoteMaker.png",
  imageWidth: 260,
  imageHeight: 280,
  imageAlt: "Custom image",
  allowOutsideClick: false,
  allowEscapeKey: false,
  submitText: "Kembali",
  backdrop: true,
  confirmButtonColor: "#107fe0",
  confirmButtonText: "Lihat Profil ❤️",
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
    title: "Ya udah pergi sana🔥",
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
    title: "Silahkan.",
    html: "Sambil dengerin lagu ya...  &#x1F600;",
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
  }).then((result) => {
    if (result.isConfirmed) {
      // Ambil elemen audio dan tombol
      particles();
      listSound();
      playSound("sound/m1.mp3");
    }
  });
}

function particles() {
  particlesJS(
    "particles-js",

    {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover",
      },
    }
  );
}

function listSound() {
  var listAlbum = $("#list-album");
  console.clear();
  listSounds.forEach(function (data, i) {
    listAlbum.append(
      `<li class="list-group-item" style="cursor: pointer;" onclick="playSound('${data.url}', this);">
      ${data.name}
        </li>`
    );
  });
}

function playSound(album, index = false) {
  const audioPlayer = $("#audioPlayer");
  audioPlayer.children().attr("src", album);
  audioPlayer[0].load();
  audioPlayer[0].play(); // Memutar lagu

  if (index) {
    const listAlbum = $("#list-album");
    listAlbum.find("li").removeClass("active");
    $(index).addClass("active");
  }
}
