<script>
  // Считываем язык системы или браузера пользователя
  var userLang = navigator.language || navigator.userLanguage; 
  
  // Если язык русский, украинский или белорусский — отправляем на русскую главную
  if (userLang.match(/ru|uk|be/i)) {
    window.location.href = "ru/01_index/";
  } else {
    // Всех остальных отправляем на английскую главную
    window.location.href = "en/01_index/";
  }
</script>
