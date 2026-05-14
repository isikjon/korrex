const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

if (burger && nav) {
  const closeMenu = () => {
    burger.classList.remove("burger_active");
    nav.classList.remove("nav_open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Открыть меню");
  };

  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";

    burger.classList.toggle("burger_active", !isOpen);
    nav.classList.toggle("nav_open", !isOpen);
    burger.setAttribute("aria-expanded", String(!isOpen));
    burger.setAttribute("aria-label", isOpen ? "Открыть меню" : "Закрыть меню");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest(".nav__link")) {
      closeMenu();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

const faqData = {
  company: [
    {
      question: "Кто вы и чем занимаетесь?",
      answer: "Мы проектируем и производим полимерную упаковку полного цикла: от разработки идеи и формы до серийного выпуска, хранения и отгрузки готовой продукции."
    },
    {
      question: "Какие виды упаковки вы производите?",
      answer: "Выпускаем коррексы, контейнеры, лотки, подложки, упаковку для яиц и кондитерских изделий, а также индивидуальные решения под параметры вашего продукта."
    },
    {
      question: "Вы работаете с брендами и федеральными сетями?",
      answer: "Да. Мы умеем работать в «производственном» режиме с требованиями по стабильности качества, повторяемости партии, упаковке на паллетах и документальному сопровождению."
    }
  ],
  materials: [
    {
      question: "Какие материалы используются для упаковки?",
      answer: "Работаем с ПЭТ, БОПС, ПП и другими полимерными материалами. Подбираем сырье под продукт, температуру хранения, прозрачность и требуемую жесткость."
    },
    {
      question: "Безопасна ли упаковка для пищевой продукции?",
      answer: "Да, для пищевых направлений используем материалы, предназначенные для контакта с продуктами, и предоставляем необходимые документы по запросу."
    },
    {
      question: "Можно ли подобрать материал под конкретные условия?",
      answer: "Можно. Учитываем влажность, вес продукта, температурный режим, требования к демонстрации на витрине и логистике."
    }
  ],
  documents: [
    {
      question: "Какие документы вы предоставляете?",
      answer: "По запросу готовим сопроводительные документы, подтверждения качества, спецификации и информацию по материалам партии."
    },
    {
      question: "Как контролируется качество продукции?",
      answer: "Контроль ведется на этапах запуска, производства и упаковки партии: проверяем геометрию, стабильность формы, внешний вид и соответствие параметрам заказа."
    },
    {
      question: "Можно ли получить образцы перед заказом?",
      answer: "Да, для типовых позиций можно запросить образцы, чтобы проверить посадку продукта, внешний вид и удобство использования."
    }
  ],
  prices: [
    {
      question: "От чего зависит стоимость заказа?",
      answer: "Цена зависит от материала, размера, сложности формы, тиража, требований к упаковке партии и необходимости дополнительных операций."
    },
    {
      question: "Какие сроки производства?",
      answer: "Типовые позиции можно отгружать быстрее при наличии на складе. Индивидуальные изделия рассчитываются отдельно после уточнения задачи."
    },
    {
      question: "Можно ли сделать срочную поставку?",
      answer: "Если позиция есть в наличии или форма уже запущена в работу, подбираем ближайший возможный срок и согласуем приоритет с менеджером."
    }
  ],
  custom: [
    {
      question: "Разрабатываете ли вы индивидуальные формы?",
      answer: "Да, проектируем упаковку под продукт, технологию производства и требования к выкладке, хранению и перевозке."
    },
    {
      question: "Что нужно для расчета новой формы?",
      answer: "Нужны размеры продукта, предполагаемый тираж, материал, требования к внешнему виду, условия хранения и пример желаемой конструкции."
    },
    {
      question: "Помогаете ли вы улучшить конструкцию?",
      answer: "Да, можем предложить варианты по жесткости, замкам, высоте крышки, штабелированию и удобству фасовки."
    }
  ],
  delivery: [
    {
      question: "Как упаковываются партии?",
      answer: "Готовую продукцию фасуем в короб, при необходимости формируем паллеты и маркируем партии для удобной приемки."
    },
    {
      question: "Доставляете ли вы продукцию в другие регионы?",
      answer: "Да, возможна отправка транспортными компаниями или самовывоз. Условия и стоимость согласуются по объему и адресу доставки."
    },
    {
      question: "Можно ли подготовить упаковку под складские требования?",
      answer: "Да, заранее согласуем габариты короба, паллетирование, маркировку и документы для приемки."
    }
  ],
  support: [
    {
      question: "Как вы работаете с претензиями?",
      answer: "Фиксируем обращение, проверяем партию и параметры заказа, после чего предлагаем корректное решение по замене, доработке или следующей поставке."
    },
    {
      question: "Есть ли персональное сопровождение?",
      answer: "Да, менеджер помогает с расчетом, образцами, сроками, документами и поддерживает связь на всех этапах заказа."
    },
    {
      question: "Можно ли закрепить требования к регулярным партиям?",
      answer: "Можно. Для повторяющихся заказов фиксируем ключевые параметры, чтобы партии были стабильными по качеству и комплектации."
    }
  ],
  contacts: [
    {
      question: "Как начать сотрудничество?",
      answer: "Оставьте заявку, напишите на почту или позвоните менеджеру. Мы уточним задачу, подберем решение и подготовим расчет."
    },
    {
      question: "Куда отправить параметры продукта?",
      answer: "Параметры можно отправить менеджеру на почту вместе с фото, размерами, желаемым тиражом и требованиями к упаковке."
    },
    {
      question: "Можно ли получить консультацию до заказа?",
      answer: "Да, консультация помогает быстрее выбрать материал, тип формы и формат поставки до запуска производства."
    }
  ]
};

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const getFaqMarkup = (item, prefix) => {
  if (prefix === "faq") {
    return `
      <details class="faq__item">
        <summary class="faq__question">
          <span class="faq__icon" aria-hidden="true">&nbsp;</span>
          <span class="faq__question-text">${escapeHtml(item.question)}</span>
        </summary>
        <div class="faq__answer-wrap">
          <p class="faq__answer">${escapeHtml(item.answer)}</p>
        </div>
      </details>
    `;
  }

  return `
    <details class="${prefix}__item">
      <summary class="${prefix}__question">${escapeHtml(item.question)}</summary>
      <p class="${prefix}__answer">${escapeHtml(item.answer)}</p>
    </details>
  `;
};

const renderFaq = (list, key, prefix) => {
  if (!list || !faqData[key]) {
    return;
  }

  const changingClass = `${prefix}__list_changing`;

  list.classList.add(changingClass);

  window.setTimeout(() => {
    list.innerHTML = faqData[key].map((item) => getFaqMarkup(item, prefix)).join("");

    list.classList.remove(changingClass);
  }, 140);
};

document.querySelectorAll("[data-faq-block]").forEach((block) => {
  const faqTabs = block.querySelectorAll("[data-faq-tab]");
  const faqList = block.querySelector("[data-faq-list]");
  const prefix = block.dataset.faqPrefix || "faq";

  if (!faqTabs.length || !faqList) {
    return;
  }

  faqTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.faqTab;

      faqTabs.forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle(`${prefix}__tab_active`, isActive);
        item.setAttribute("aria-selected", String(isActive));
      });

      renderFaq(faqList, key, prefix);
    });
  });
});

document.querySelectorAll(".faq__item, .about-faq__item").forEach((item) => {
  item.removeAttribute("open");
});

document.querySelectorAll("[data-label-slider]").forEach((labelSlider) => {
  const slides = Array.from(labelSlider.querySelectorAll("[data-label-slide]"));
  const dots = Array.from(labelSlider.querySelectorAll("[data-label-dot]"));
  let activeSlide = 0;
  let sliderTimer = null;

  const setSlide = (index) => {
    activeSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("label-promo__slide_active", slideIndex === activeSlide);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("label-promo__dot_active", dotIndex === activeSlide);
    });
  };

  const startSlider = () => {
    sliderTimer = window.setInterval(() => {
      setSlide(activeSlide + 1);
    }, 4600);
  };

  const stopSlider = () => {
    if (sliderTimer) {
      window.clearInterval(sliderTimer);
      sliderTimer = null;
    }
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopSlider();
      setSlide(index);
      startSlider();
    });
  });

  labelSlider.addEventListener("mouseenter", stopSlider);
  labelSlider.addEventListener("mouseleave", startSlider);

  if (slides.length > 1) {
    startSlider();
  }
});

document.querySelectorAll("[data-dark-slider]").forEach((slider) => {
  const dots = Array.from(slider.querySelectorAll("[data-dark-dot]"));
  let activeSlide = 0;
  let sliderTimer = null;

  const setSlide = (index) => {
    activeSlide = (index + dots.length) % dots.length;
    slider.dataset.darkSlide = String(activeSlide);

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("about-video__dot_active", dotIndex === activeSlide);
    });
  };

  const startSlider = () => {
    sliderTimer = window.setInterval(() => {
      setSlide(activeSlide + 1);
    }, 4200);
  };

  const stopSlider = () => {
    if (sliderTimer) {
      window.clearInterval(sliderTimer);
      sliderTimer = null;
    }
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopSlider();
      setSlide(index);
      startSlider();
    });
  });

  if (dots.length > 1) {
    setSlide(0);
    startSlider();
  }
});

document.querySelectorAll("[data-filter-group]").forEach((group) => {
  const buttons = Array.from(group.querySelectorAll("[data-filter-button]"));
  const reset = group.querySelector("[data-filter-reset]");
  const scope = group.closest("main") || document;
  const items = Array.from(scope.querySelectorAll("[data-filter-item]"));

  const getActiveClass = (button) => button.classList.contains("career-toolbar__tag") ? "career-toolbar__tag_active" : "blog-toolbar__tag_active";

  const showItems = (value) => {
    const matchedItems = items.filter((item) => item.dataset.filterItem === value);
    const visibleItems = matchedItems.length ? matchedItems : items;

    items.forEach((item) => {
      item.classList.toggle("is-filter-hidden", !visibleItems.includes(item));
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const activeClass = getActiveClass(button);

      buttons.forEach((item) => {
        item.classList.toggle(activeClass, item === button);
      });

      showItems(button.dataset.filterButton);
    });
  });

  if (reset) {
    reset.addEventListener("click", () => {
      buttons.forEach((button, index) => {
        button.classList.toggle(getActiveClass(button), index === 0);
      });

      items.forEach((item) => {
        item.classList.remove("is-filter-hidden");
      });
    });
  }
});

document.querySelectorAll("[data-ui-dropdown]").forEach((dropdown) => {
  const button = dropdown.querySelector("[data-ui-dropdown-button]");
  const menu = dropdown.querySelector("[data-ui-dropdown-menu]");

  if (!button || !menu) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = dropdown.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  menu.addEventListener("click", (event) => {
    const option = event.target.closest("[data-dropdown-label]");

    if (!option) {
      return;
    }

    button.firstChild.textContent = option.dataset.dropdownLabel;
    dropdown.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  document.querySelectorAll("[data-ui-dropdown].is-open").forEach((dropdown) => {
    if (!dropdown.contains(event.target)) {
      const button = dropdown.querySelector("[data-ui-dropdown-button]");

      dropdown.classList.remove("is-open");

      if (button) {
        button.setAttribute("aria-expanded", "false");
      }
    }
  });
});

document.querySelectorAll("[data-view-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    const grid = document.querySelector(".blog-listing__grid");

    if (!grid) {
      return;
    }

    grid.classList.toggle("blog-listing__grid_list", button.dataset.viewMode === "list");
  });
});

document.querySelectorAll(".catalog-product__variants").forEach((button) => {
  const row = button.closest(".catalog-product__spec-row");

  if (!row) {
    return;
  }

  const options = Array.from(row.querySelectorAll(".catalog-product__option"));
  const chevron = button.querySelector(".catalog-product__chevron");

  button.setAttribute("aria-expanded", "false");

  if (chevron) {
    chevron.classList.remove("catalog-product__chevron_up");
  }

  options.forEach((option) => {
    option.hidden = true;
  });

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") !== "true";

    button.setAttribute("aria-expanded", String(isOpen));
    row.classList.toggle("catalog-product__spec-row_open", isOpen);

    if (chevron) {
      chevron.classList.toggle("catalog-product__chevron_up", isOpen);
    }

    options.forEach((option) => {
      option.hidden = !isOpen;
    });
  });
});

const consultationTopics = [
  "Подбор упаковки",
  "Индивидуальная форма",
  "Документы и качество",
  "Цены и сроки",
  "Доставка и паллетирование",
  "Другое"
];

document.querySelectorAll(".consultation__select").forEach((select) => {
  if (select.options.length > 1) {
    return;
  }

  select.innerHTML = consultationTopics.map((topic) => `<option>${topic}</option>`).join("");
});

document.querySelectorAll(".consultation__input[name='name']").forEach((input) => {
  input.required = true;
});

document.querySelectorAll(".consultation__input[name='email']").forEach((input) => {
  input.required = true;
  input.autocomplete = "email";
  input.pattern = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";
});

document.querySelectorAll(".consultation__input[name='call-time']").forEach((input) => {
  input.type = "datetime-local";
  input.required = true;
});

document.querySelectorAll(".consultation__input[name='phone']").forEach((input) => {
  input.required = true;
  input.inputMode = "tel";
  input.autocomplete = "tel";
  input.placeholder = "+7 (___) ___-__-__";
  input.maxLength = 18;

  const formatPhone = () => {
    const digits = input.value.replace(/\D/g, "").replace(/^8/, "7").replace(/^7?/, "7").slice(0, 11);
    const parts = [
      digits.slice(1, 4),
      digits.slice(4, 7),
      digits.slice(7, 9),
      digits.slice(9, 11)
    ];

    let value = "+7";

    if (parts[0]) {
      value += ` (${parts[0]}`;
    }

    if (parts[0].length === 3) {
      value += ")";
    }

    if (parts[1]) {
      value += ` ${parts[1]}`;
    }

    if (parts[2]) {
      value += `-${parts[2]}`;
    }

    if (parts[3]) {
      value += `-${parts[3]}`;
    }

    input.value = value;
  };

  input.addEventListener("focus", () => {
    if (!input.value) {
      input.value = "+7";
    }
  });

  input.addEventListener("input", formatPhone);
});

document.querySelectorAll(".consultation__form").forEach((form) => {
  const agreement = form.querySelector(".consultation__agreement-checkbox");
  const submitButton = form.querySelector(".consultation__button[type='submit']");

  if (!agreement || !submitButton) {
    return;
  }

  const syncAgreementState = () => {
    const isChecked = agreement.checked;

    submitButton.disabled = !isChecked;
    agreement.setCustomValidity(isChecked ? "" : "Подтвердите согласие с политикой обработки персональных данных");
  };

  agreement.addEventListener("change", syncAgreementState);

  form.addEventListener("submit", (event) => {
    syncAgreementState();

    if (!agreement.checked) {
      event.preventDefault();
      agreement.reportValidity();
    }
  });

  syncAgreementState();
});

document.querySelectorAll("[data-product-gallery]").forEach((productGallery) => {
  const mainImage = productGallery.querySelector(".catalog-product__image");
  const thumbsSliderElement = productGallery.querySelector("[data-product-thumbs]");
  const thumbs = Array.from(productGallery.querySelectorAll("[data-product-thumb]"));
  const prevButton = productGallery.querySelector("[data-product-prev]");
  const nextButton = productGallery.querySelector("[data-product-next]");
  let activeThumb = 0;
  let thumbsSlider = null;

  const setProductImage = (index, shouldMoveSlider = true) => {
    if (!mainImage || !thumbs.length) {
      return;
    }

    activeThumb = (index + thumbs.length) % thumbs.length;
    const thumb = thumbs[activeThumb];
    const image = thumb.querySelector("img");

    if (image) {
      mainImage.src = thumb.dataset.large || image.src;
      mainImage.alt = image.alt || mainImage.alt;
    }

    thumbs.forEach((item, itemIndex) => {
      item.classList.toggle("catalog-product__thumb_active", itemIndex === activeThumb);
    });

    if (thumbsSlider && shouldMoveSlider) {
      thumbsSlider.slideTo(activeThumb);
    }
  };

  if (thumbsSliderElement && typeof Swiper !== "undefined") {
    thumbsSlider = new Swiper(thumbsSliderElement, {
      slidesPerView: 3,
      spaceBetween: 12,
      speed: 420,
      rewind: true,
      watchOverflow: true,
      navigation: {
        prevEl: prevButton,
        nextEl: nextButton
      },
      breakpoints: {
        621: {
          slidesPerView: 4,
          spaceBetween: 14
        },
        981: {
          slidesPerView: 4,
          spaceBetween: 16
        }
      },
      on: {
        slideChange(swiper) {
          setProductImage(swiper.activeIndex, false);
        }
      }
    });
  }

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      setProductImage(index, false);
    });
  });

  if (!thumbsSlider) {
    if (prevButton) {
      prevButton.addEventListener("click", () => {
        setProductImage(activeThumb - 1);
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        setProductImage(activeThumb + 1);
      });
    }
  }

  setProductImage(0, false);
});
