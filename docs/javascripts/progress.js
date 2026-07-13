document.addEventListener("DOMContentLoaded", function () {
  // === ИНДИКАТОР ЧТЕНИЯ (полоса прогресса под шапкой) ===
  // Футер собирается на стороне сервера через extra.copyright в mkdocs.yml,
  // поэтому здесь мы отвечаем только за индикатор прокрутки.
  const progressBar = document.createElement("div");
  progressBar.id = "reading-progress-bar";
  const header = document.querySelector(".md-header");
  if (header) {
    header.appendChild(progressBar);
  }

  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (height > 0) {
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + "%";
    } else {
      progressBar.style.width = "0%";
    }
  });
});
