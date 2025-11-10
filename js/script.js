$(function () {
  /* ===============================
     1. Подсветка активного пункта меню
  =============================== */
  const path = location.pathname.split("/").pop() || "index.html";
  $(".nav-link").each(function () {
    if ($(this).data("page") === path) $(this).addClass("active");
  });

  /* ===============================
     2. Плавное появление hero и элементов при скролле
  =============================== */
  $(".hero .logo-badge, .hero h1, .hero p, .hero .btn-accent").hide().each(function (i) {
    $(this).delay(200 * i).fadeIn(600);
  });

  const reveal = () => {
    $(".reveal").each(function () {
      const top = this.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) $(this).addClass("in");
    });
  };
  reveal();
  $(window).on("scroll", reveal);

  /* ===============================
     3. Lightbox для портфолио
  =============================== */
  $(".lightbox").on("click", function () {
    $("#lightbox-img").attr("src", $(this).attr("src"));
    $("#lightbox").fadeIn(200);
  });
  $("#lightbox").on("click", function () {
    $(this).fadeOut(200);
  });

  /* ===============================
     4. Hover-анимация карточек услуг
  =============================== */
  $(".service-card")
    .hover(
      function () {
        $(this).stop().animate({ top: "-4px" }, 150);
      },
      function () {
        $(this).stop().animate({ top: "0px" }, 150);
      }
    )
    .css("position", "relative");

  /* ===============================
     5. Modal Join Influence + Bootstrap validation
  =============================== */
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      function (e) {
        if (!form.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        } else {
          e.preventDefault();
          $(form).find("button[type=submit]").prop("disabled", true);
          $("#formSuccess").removeClass("d-none").hide().slideDown(220);
          setTimeout(() => {
            form.reset();
            form.classList.remove("was-validated");
            $(form).find("button").prop("disabled", false);
          }, 1200);
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

  /* ===============================
     6. Переключение темы (Light/Dark Mode)
  =============================== */
  const themeToggle = $("#theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";

  if (currentTheme === "dark") {
    $("body").addClass("dark-mode");
    themeToggle.text("☀️");
  }

  themeToggle.on("click", function () {
    $("body").toggleClass("dark-mode");
    const isDark = $("body").hasClass("dark-mode");
    themeToggle.text(isDark ? "☀️" : "🌙");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  /* ===============================
     7. Фильтр галереи (Portfolio)
  =============================== */
  $(".filter-btn").on("click", function () {
    const filter = $(this).data("filter");
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    if (filter === "all") {
      $(".gallery-item").fadeIn(400);
    } else {
      $(".gallery-item").hide().filter(`[data-category="${filter}"]`).fadeIn(400);
    }
  });

  /* ===============================
     8. CRUD и поиск клиентов (Services)
  =============================== */
  let clients = [];
  let idCounter = 1;

  // Добавить клиента
  $("#clientForm").on("submit", function (e) {
    e.preventDefault();
    const name = $("#clientName").val().trim();
    const project = $("#clientProject").val().trim();

    if (!name || !project) return;

    const client = { id: idCounter++, name, project };
    clients.push(client);

    const row = $(`
      <tr id="row-${client.id}" style="display:none;">
        <td>${client.id}</td>
        <td contenteditable="true">${client.name}</td>
        <td contenteditable="true">${client.project}</td>
        <td>
          <button class="btn btn-sm btn-danger delete-client">Delete</button>
        </td>
      </tr>
    `);

    $("#clientList tr:contains('No clients')").remove();
    $("#clientList").append(row);
    row.fadeIn(300);
    this.reset();
  });

  // Удалить клиента
  $("#clientList").on("click", ".delete-client", function () {
    const row = $(this).closest("tr");
    row.fadeOut(300, function () {
      row.remove();
    });
  });

  // Поиск клиента
  $("#searchClient").on("keyup", function () {
    const value = $(this).val().toLowerCase();
    $("#clientList tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  /* ===============================
     9. Валидация формы (Contact)
  =============================== */
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const name = $("#fullName").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();
    const message = $("#message").val().trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      $("#email").addClass("is-invalid");
      valid = false;
    } else $("#email").removeClass("is-invalid").addClass("is-valid");

    if (!name || !message) valid = false;

    if (password !== confirmPassword || password.length < 6) {
      $("#confirmPassword").addClass("is-invalid");
      valid = false;
    } else {
      $("#confirmPassword").removeClass("is-invalid").addClass("is-valid");
    }

    const strength = checkStrength(password);
    const strengthEl = $("#passwordStrength");
    if (strength === "Weak") strengthEl.text("Strength: Weak").css("color", "#d9534f");
    else if (strength === "Medium") strengthEl.text("Strength: Medium").css("color", "#f0ad4e");
    else if (strength === "Strong") strengthEl.text("Strength: Strong").css("color", "#5cb85c");

    if (valid) {
      $("#formAlert").hide().removeClass("d-none").fadeIn(400);
      this.reset();
      $(".form-control").removeClass("is-valid is-invalid");
      $("#passwordStrength").text("Strength: —").css("color", "");
    }
  });

  function checkStrength(password) {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    if (strength <= 1) return "Weak";
    else if (strength === 2) return "Medium";
    else return "Strong";
  }
});
