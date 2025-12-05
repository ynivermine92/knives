document.addEventListener("DOMContentLoaded", () => {
  function tabs(
    headerSelector,
    tabSelector,
    contentSelector,
    activeClass,
    display = "flex"
  ) {
    const header = document.querySelector(headerSelector),
      tab = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector);

    if (!header || tab.length === 0 || content.length === 0) return;

    function hideTabContent() {
      content.forEach((item) => {
        item.style.display = "none";
      });
      tab.forEach((item) => {
        item.classList.remove(activeClass);
      });
    }
    function showTabContent(i = 0) {
      content[i].style.display = display;
      tab[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();
    header.addEventListener("click", (e) => {
      const target = e.target;
      if (
        target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
      ) {
        tab.forEach((item, i) => {
          if (target == item || target.parentNode == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  }

  tabs(".tabs__header", ".tabs__header-item", ".tabs__content-item", "active");
  tabs(
    ".innovation__header",
    ".innovation__header-item",
    ".innovation__content-item",
    "active"
  );

  const CartAnimation = () => {
    const cartTriger = document.querySelectorAll(".cart__box");
    const cartLink = document.querySelectorAll(".cart__link");
    const cartPlus = document.querySelectorAll(".cart__plus");

    cartPlus.forEach((plus) => {
      plus.addEventListener("click", () => {
        cartTriger.forEach((box, index) => {
          box.addEventListener("click", () => {
            cartTriger[index].classList.toggle("active");
          });
        });

        cartLink.forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
          });
        });
      });
    });
  };

  CartAnimation();




  
  /* Swiper */

  const swiper = new Swiper(".swiper", {
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });





  const advertisSwiper = new Swiper(".advertisSwiper", {
    slidesPerView: 1.9,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });



  const mendingForm = () => {
    const meningInput = document.querySelectorAll(".mending__input");
    const meningImage = document.querySelectorAll(".manding__image");

    if (!meningInput.length || !meningImage.length) return;

    meningInput.forEach((item, index) => {
      item.addEventListener("click", () => {
        meningImage.forEach((itemImg) => {
          itemImg.classList.remove("active");
        });

        meningImage[index].classList.add("active");
      });
    });

    const maskElement = document.querySelector(".mending__tell");
    const maskOptions = {
      mask: "+{38}(000)000-00-00",
    };
    const mask = IMask(maskElement, maskOptions);
  };

  mendingForm();




  Fancybox.bind('[data-fancybox="benefit-gallery"]', {});

  Fancybox.bind(
    '[data-fancybox="advertis-gallery"]:not(.swiper-slide-duplicate a)',
    {}
  );


  const initMap = () => {
    const maps = document.querySelector(".map");
    if (!maps) return; // если нет элемента, выходим

    const map = L.map("map", {
      zoom: 13,
      minZoom: 4,
      maxZoom: 25,
    });

    // Тайлы OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      minZoom: 4,
      maxZoom: 25,
    }).addTo(map);

    // Маркеры
    const markers = {
      center: L.marker([50.4501, 30.5234])
        .bindPopup("<span class='map__text'><b>Липки 200/20</b></span>")
        .addTo(map),
      troieshyna: L.marker([50.527, 30.585])
        .bindPopup("<span class='map__text'><b>Троещина 200/20</b></span>")
        .addTo(map),
    };

    // Центрируем карту по первому маркеру
    map.setView(markers.center.getLatLng(), 13);

    // Клик по элементам списка
    document.querySelectorAll(".map__item").forEach((item) => {
      item.addEventListener("click", () => {
        const place = item.dataset.place;
        const marker = markers[place];
        map.flyTo(marker.getLatLng(), 14, { duration: 1.5 });
        marker.openPopup();
      });
    });
  };

  initMap();

  const basketItem = document.querySelectorAll(".basket__item-number");

  basketItem.forEach((input) => {
    input.inputMode = "numeric";

    input.addEventListener("input", () => {
      if (input.value.length > 3) {
        input.value = input.value.slice(0, 3);
      }

      if (input.value > 999) input.value = 999;
      if (input.value < 1) input.value = 1;
    });
  });
});
