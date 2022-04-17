document.addEventListener("DOMContentLoaded", function (event) {
  const foodCompaniesNode = document.getElementById("companies__food");
  const autoCompaniesNode = document.getElementById("companies__auto");
  const agriculturalCompaniesNode = document.getElementById(
    "companies__agricultural"
  );
  const bankCompaniesNode = document.getElementById("companies__bank");

  const foodCompanies = [
    {
      name: "Unilever",
      src: "./public/img/companies/1.png",
      link: "#",
    },
    {
      name: "Metro AG",
      src: "./public/img/companies/2.png",
      link: "#",
    },
    {
      name: "Danone",
      src: "./public/img/companies/3.png",
      link: "#",
    },
    {
      name: "Nestlé",
      src: "./public/img/companies/4.png",
      link: "nestle.html",
    },
    {
      name: "Johnson & Johnson",
      src: "./public/img/companies/5.png",
      link: "#",
    },
    {
      name: "Auchan",
      src: "./public/img/companies/6.png",
      link: "auchan.html",
    },
  ];
  const autoCompanies = [
    {
      name: "Renault",
      src: "./public/img/companies/auto1.png",
      link: "#",
    },
    {
      name: "SKF",
      src: "./public/img/companies/auto2.png",
      link: "skf.html",
    },
    {
      name: " Bosch",
      src: "./public/img/companies/auto3.png",
      link: "#",
    },
    {
      name: "Danieli",
      src: "./public/img/companies/auto4.png",
      link: "danieli.html",
    },
    {
      name: "Grundfos",
      src: "./public/img/companies/auto5.png",
      link: "#",
    },
    {
      name: "Geberit",
      src: "./public/img/companies/auto6.png",
      link: "#",
    },
  ];
  const agriculturalCompanies = [
    {
      name: "Syngenta",
      src: "./public/img/companies/ag1.png",
      link: "syngenta.html",
    },
    {
      name: "Tetra Pak",
      src: "./public/img/companies/ag2.jpg",
      link: "tetrapak.html",
    },
    {
      name: "Dow Chemical",
      src: "./public/img/companies/ag3.png",
      link: "#",
    },
  ];
  const bankCompanies = [
    {
      name: "UniCredit",
      src: "./public/img/companies/bank1.png",
      link: "#",
    },
    {
      name: "CreditSuisse",
      src: "./public/img/companies/bank2.png",
      link: "#",
    },
    {
      name: "Lloyds insurance",
      src: "./public/img/companies/bank3.png",
      link: "lloyd.html",
    },
  ];

  function setCompanies(elementArray, parent) {
    elementArray.forEach((company) =>
      parent.insertAdjacentHTML(
        "beforeend",
        `<a href="${company.link}" class="companies__item">
        <img src="${company.src}" alt="logo">
        <div class="company__name">${company.name}</div>
        <div class="company__link">View funding</div>
      </a>
    `
      )
    );
  }

  setCompanies(foodCompanies, foodCompaniesNode);
  setCompanies(autoCompanies, autoCompaniesNode);
  setCompanies(agriculturalCompanies, agriculturalCompaniesNode);
  setCompanies(bankCompanies, bankCompaniesNode);

  const companiesAccordionHead = document.getElementsByClassName(
    "companies__btn_show"
  );

  function showAcc() {
    const firstArea = companiesAccordionHead[0].nextElementSibling;
    companiesAccordionHead[0].classList.add("active");
    firstArea.classList.add("active");

    [...companiesAccordionHead].forEach((e, i) =>
      setTimeout(function () {
        e.addEventListener("click", function () {
          if (window.innerWidth <= 1024) {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            panel.classList.toggle("active");
          }
        });
      }, 300)
    );
  }

  showAcc();

  const swiperLength =
    document.getElementsByClassName("war_info__slider").length;
  if (swiperLength > 0) {
    let swiper = new Swiper(".war_info__slider", {
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
