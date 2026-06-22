document.addEventListener("DOMContentLoaded", function () {
  // === 1. ИНДИКАТОР ЧТЕНИЯ (СКРОЛЛБАР) ===
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

  // === 2. АВТОМАТИЧЕСКАЯ СБОРКА ФУТЕРА ВНИЗУ ===
  const footerMeta = document.querySelector(".md-footer-meta__inner");
  if (footerMeta) {
    // Создаем контейнер для трех колонок ссылок
    const columnsContainer = document.createElement("div");
    columnsContainer.className = "custom-footer-links";
    
    // Вставляем структуру HTML со всеми вашими продуктами, контактами и документами
    columnsContainer.innerHTML = `
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 2rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 2rem; margin-bottom: 1.5rem; text-align: left; width: 100%;">
        <div>
          <h4 style="color: #ffffff; font-weight: 700; margin: 0 0 10px 0; font-size: 0.9rem;">Products</h4>
          <p style="margin: 0; line-height: 1.6;"><a href="https://amnezia.org" target="_blank" style="color: #a3a3a3; font-size: 0.8rem; text-decoration: none;">Amnezia VPN</a></p>
          <p style="margin: 0; line-height: 1.6;"><a href="https://amnezia.host" target="_blank" style="color: #a3a3a3; font-size: 0.8rem; text-decoration: none;">Amnezia Hosting</a></p>
        </div>
        <div>
          <h4 style="color: #ffffff; font-weight: 700; margin: 0 0 10px 0; font-size: 0.9rem;">Contacts</h4>
          <p style="margin: 0; line-height: 1.6;"><a href="https://t.me" target="_blank" style="color: #a3a3a3; font-size: 0.8rem; text-decoration: none;">Telegram</a></p>
          <p style="margin: 0; line-height: 1.6;"><a href="mailto:support@amnezia.host" style="color: #a3a3a3; font-size: 0.8rem; text-decoration: none;">support@amnezia.host</a></p>
          <p style="margin: 0; line-height: 1.6;"><a href="mailto:abuse@amnezia.host" style="color: #ff4a4a; font-size: 0.8rem; text-decoration: none;">Report abuse: abuse@amnezia.host</a></p>
        </div>
        <div>
          <h4 style="color: #ffffff; font-weight: 700; margin: 0 0 10px 0; font-size: 0.9rem;">Legal</h4>
          <p style="margin: 0; line-height: 1.6;"><a href="https://amnezia.hostprivacy" target="_blank" style="color: #a3a3a3; font-size: 0.8rem; text-decoration: none;">Privacy Policy</a></p>
          <p style="margin: 0; line-height: 1.6;"><a href="https://amnezia.hostrefund" target="_blank" style="color: #a3a3a3; font-size: 0.8rem; text-decoration: none;">Refund Policy</a></p>
          <p style="margin: 0; line-height: 1.6;"><a href="https://amnezia.hostterms" target="_blank" style="color: #a3a3a3; font-size: 0.8rem; text-decoration: none;">User Agreement</a></p>
        </div>
      </div>
    `;

    // Создаем блок юридического адреса ООО
    const companyInfo = document.createElement("div");
    companyInfo.style.cssText = "text-align: left; color: #757575; font-size: 0.75rem; line-height: 1.5; margin-top: 1rem; width: 100%;";
    companyInfo.innerHTML = `LLC "AIMor", Yerevan, 2 Avetis Aharonyan St. Registration number: 264.110.1229448`;

    // Вставляем элементы в начало подвала перед заводским копирайтом
    footerMeta.insertBefore(companyInfo, footerMeta.firstChild);
    footerMeta.insertBefore(columnsContainer, footerMeta.firstChild);
  }
});
