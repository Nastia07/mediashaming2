const naspersTextsArray = [
  "Ask @The_RHS in twitter if flowers are worth Ukrainian's lives",
  "Ask @The_RHS in twitter how the Royalty event can promotes the war",
];

document.addEventListener("DOMContentLoaded", function (event) {
  const twitter_link = document.getElementById("twitter_button");
  const naspers_link = document.getElementById("naspers_twitter_link");

  function setTwiterLink() {
    let text = twitter_link.dataset.text.replaceAll(" ", "%20");
    twitter_link.href = "https://twitter.com/intent/tweet?text=".concat(text);
  }

  function setNaspersLink() {
    let text =
      naspersTextsArray[Math.floor(Math.random() * naspersTextsArray.length)];
    naspers_link.href = "https://twitter.com/intent/tweet?text=".concat(text);
  }

  if (twitter_link != undefined) {
    setTwiterLink();
  }

  if (naspers_link != undefined) {
    setNaspersLink();
  }

  const swiperLength =
    document.getElementsByClassName("activity__slider").length;
  if (swiperLength > 0) {
    let swiper = new Swiper(".activity__slider", {
      watchOverflow: true,
      loop: true,
      speed: 3500,
      autoplay: {
        delay: 0,
      },
      spaceBetween: 10,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },

        700: {
          slidesPerView: 2,
        },

        900: {
          slidesPerView: 3,
        },

        1280: {
          slidesPerView: 4,
        },
      },
    });
  }
});
