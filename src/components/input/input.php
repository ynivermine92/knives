


<!-- проврека юзер не мог импуть вести больше 3 цыфер -->

<ul class="basket__items">
  <li class="basket__item">
    <div class="basket__item-product">
      <img src="/img/bakset/product-1.png" alt="bakset-product" />
    </div>
    <div class="basket__item-name">
      Нож классного качества Knight light C653
    </div>
    <div class="basket__item-content">
      <input
        class="basket__item-number"
        type="number"
        min="1"
        max="999" />

      <span class="basket__item-price">10 грн</span>
      <span class="basket__item-clouse">
        <img src="/img/bakset/clouse.png" alt="bakset-product" /></span>
    </div>
  </li>

</ul>

<script>
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
</script>