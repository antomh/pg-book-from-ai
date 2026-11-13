/* book.js — клиентская логика учебника (без сервера, без SQL-движка).
 * 1) Рендер бокового меню из BOOK_NAV (js/nav.js).
 * 2) Инициализация подсветки синтаксиса (highlight.js, локальная копия).
 * 3) Каркас «Проверь себя»: радио-варианты + кнопка проверки (только сравнение
 *    выбора с эталоном, никакой оценки SQL).
 */
(function () {
  'use strict';

  function renderSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (!sidebar || typeof BOOK_NAV === 'undefined') return;

    var current = document.body.getAttribute('data-page');

    var head = document.createElement('div');
    head.className = 'sidebar-head';
    var home = document.createElement('a');
    home.href = 'index.html';
    if (current !== 'index') home.href = '../index.html';
    home.textContent = 'Учебник по PostgreSQL';
    head.appendChild(home);
    var ver = document.createElement('span');
    ver.className = 'sidebar-version';
    ver.textContent = 'PostgreSQL 17.11';
    head.appendChild(ver);
    sidebar.appendChild(head);

    BOOK_NAV.forEach(function (mod) {
      var details = document.createElement('details');
      details.className = 'nav-module';

      var summary = document.createElement('summary');
      summary.textContent = 'Модуль ' + mod.num + '. ' + mod.title;
      details.appendChild(summary);

      var ul = document.createElement('ul');
      ul.className = 'nav-chapters';
      var hasActive = false;

      mod.chapters.forEach(function (ch) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = (current === 'index' ? '' : '../') + 'modules/' + ch.slug + '.html';
        a.textContent = ch.num + '. ' + ch.title;
        a.title = ch.title + ' (' + ch.level + ', ' + ch.dag + ')';
        li.appendChild(a);
        if (ch.slug === current) {
          li.className = 'active';
          hasActive = true;
        }
        ul.appendChild(li);
      });

      details.appendChild(ul);
      if (hasActive) details.open = true;
      sidebar.appendChild(details);
    });

    var foot = document.createElement('p');
    foot.className = 'sidebar-foot';
    foot.textContent = 'Оглавление целиком — на главной.';
    sidebar.appendChild(foot);
  }

  function initHighlight() {
    if (window.hljs && typeof window.hljs.highlightAll === 'function') {
      window.hljs.highlightAll();
    }
  }

  /* Каркас «Проверь себя».
   * Ожидаемая разметка в главах:
   *   <div class="quiz">
   *     <p class="quiz-question">…вопрос…</p>
   *     <label><input type="radio" name="qN" data-correct="true"> вариант</label>
   *     <label><input type="radio" name="qN"> вариант</label>
   *     <button type="button" class="quiz-check">Проверить</button>
   *     <details class="quiz-explanation"><summary>Разбор ответа</summary><p>…</p></details>
   *   </div>
   */
  function initQuiz() {
    var quizzes = document.querySelectorAll('.quiz');
    quizzes.forEach(function (quiz) {
      var button = quiz.querySelector('.quiz-check');
      if (!button) return;
      button.addEventListener('click', function () {
        var checked = quiz.querySelector('input[type="radio"]:checked');
        var labels = quiz.querySelectorAll('label');
        labels.forEach(function (l) { l.classList.remove('ok', 'wrong'); });
        if (!checked) {
          button.textContent = 'Сначала выберите вариант';
          return;
        }
        var correct = checked.getAttribute('data-correct') === 'true';
        var label = checked.closest('label');
        if (label) label.classList.add(correct ? 'ok' : 'wrong');
        button.textContent = correct ? 'Верно' : 'Неверно — попробуйте ещё раз';
        var explain = quiz.querySelector('.quiz-explanation');
        if (explain && correct) explain.open = true;
      });
    });
  }

  /* Тема: светлая/тёмная; одно значение на весь учебник.
   *
   * Порядок выбора при загрузке страницы (ранний inline-скрипт в <head>):
   *   1) ?theme=dark|light в адресе страницы;
   *   2) localStorage 'pgbook-theme' (когда доступен общий);
   *   3) системная настройка prefers-color-scheme.
   *
   * При открытии учебника как локальных файлов (file://) браузеры
   * изолируют localStorage по страницам — общего хранилища нет.
   * Поэтому тема дополнительно «протаскивается» через адрес:
   * текущее значение дописывается параметром ?theme= во все
   * внутренние ссылки страницы, и переход уносит его с собой.
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '\u2600' : '\u263D';
  }

  /* Нужна ли передача темы через адрес: на file:// — всегда
   * (localStorage там изолирован по страницам); на http(s) —
   * только если localStorage недоступен вовсе. */
  function needPropagate() {
    if (location.protocol === 'file:') return true;
    try {
      localStorage.setItem('pgbook-t', '1');
      localStorage.removeItem('pgbook-t');
      return false;
    } catch (e) { return true; }
  }

  /* Дописать текущую тему параметром ?theme= во все внутренние
   * ссылки документа (внешние и чисто якорные не трогаем). */
  function propagateTheme() {
    var theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var links = document.querySelectorAll('a[href]');
    links.forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || /^(https?:|mailto:)/i.test(href) || href.charAt(0) === '#') return;
      var hi = href.indexOf('#');
      var hash = hi >= 0 ? href.slice(hi) : '';
      var base = hi >= 0 ? href.slice(0, hi) : href;
      var qi = base.indexOf('?');
      var params;
      try {
        params = new URLSearchParams(qi >= 0 ? base.slice(qi + 1) : '');
      } catch (e) { return; }
      base = qi >= 0 ? base.slice(0, qi) : base;
      params.set('theme', theme);
      a.setAttribute('href', base + '?' + params.toString() + hash);
    });
  }

  function initThemeToggle() {
    var topbar = document.querySelector('.topbar');
    if (!topbar) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'theme-toggle';
    btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = cur === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('pgbook-theme', next); } catch (e) {}
      applyTheme(next);
      /* запомнить выбор и в адресе текущей страницы, чтобы
       * перезагрузка (и закладка) сохранили тему и на file:// */
      try {
        var u = new URL(location.href);
        u.searchParams.set('theme', next);
        history.replaceState(null, '', u.pathname + u.search + u.hash);
      } catch (e) {}
      if (needPropagate()) propagateTheme();
    });
    topbar.appendChild(btn);
    applyTheme(document.documentElement.getAttribute('data-theme') ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderSidebar();
    initHighlight();
    initQuiz();
    initThemeToggle();
    if (needPropagate()) propagateTheme();
  });
})();
