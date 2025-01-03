const accordianItems = document.querySelectorAll(".accordian__item");

const toggleClass = (evt) => {
  const classList = evt.currentTarget.classList;
  if (classList.contains("accordian__item--expanded")) {
    classList.remove("accordian__item--expanded");
  } else {
    classList.add("accordian__item--expanded");
  }
};

Array.from(accordianItems).map((item) =>
  item.addEventListener("click", toggleClass)
);
