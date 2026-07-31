const controls = document.querySelector(".controls");

if (controls) {
  controls.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      return;
    }

    const prevActivePane = document.querySelector(".pane.is-active");
    if (prevActivePane) {
      prevActivePane.classList.remove("is-active");
    }

    const paneId = e.target.dataset.id;
    const nextActivePane = document.querySelector(`#${paneId}`);
    if (nextActivePane) {
      nextActivePane.classList.add("is-active");
    }
  });
}

const scrollPane = document.querySelector(".scrollspy-example-2");
const scrollLinks = document.querySelectorAll("#navbar-example3 .nav-link");
const scrollSections = Array.from(scrollPane ? scrollPane.querySelectorAll("div[id^='item-']") : []);

function setActiveScrollLink(id) {
  scrollLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

if (scrollPane && scrollLinks.length && scrollSections.length) {
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || !targetId.startsWith("#")) {
        return;
      }

      const targetSection = document.querySelector(targetId);
      if (!targetSection) {
        return;
      }

      event.preventDefault();
      const topOffset = targetSection.offsetTop - 20;
      scrollPane.scrollTo({ top: topOffset, behavior: "smooth" });
      setActiveScrollLink(targetId.slice(1));
    });
  });

  scrollPane.addEventListener("scroll", () => {
    let activeId = scrollSections[0]?.id;

    scrollSections.forEach((section) => {
      if (scrollPane.scrollTop >= section.offsetTop - 30) {
        activeId = section.id;
      }
    });

    setActiveScrollLink(activeId);
  });

  setActiveScrollLink(scrollSections[0]?.id || "");
}


const lineData = {
  labels: [
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
  ],
  datasets: [
    {
      label: "Роки",
      data: [8.0, 8.3, 8.6, 8.9, 9.2, 9.5, 9.9, 10.2, 10.5, 10.8, 11.0, 11.3, 11.6, 11.9, 12.2],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      tension: 0.3,
      pointRadius: 5,
    },
  ],
};

const lineConfig = {
  type: 'line',
  data: lineData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
      }
    },
  },
};

const myLineChart = new Chart(
  document.getElementById('myLineChart'),
  lineConfig,
);

const pieData = {
  labels: ["🚗Транспорт", "🏭Промисловість", "⚡Енергетика", "🌾Сільське господарство", "🏠Побутове опалення та спалювання сміття", "Інше"],

  datasets: [
    {
      label: "",
      data: [30, 28, 22, 12, 8, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(255, 2, 2)',
        'rgb(153, 102, 255)',
      ],

      hoverOffset: 10,
    },
  ],
}

const pieConfig = {
  type: 'doughnut',

  data: pieData,

  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 15 // Розмір тексту легенди
          }
        }
      },
    },
  },
};

const myPieChart = new Chart(document.getElementById('myPieChart'), pieConfig);
