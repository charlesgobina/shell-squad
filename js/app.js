const linuxCategories = document.querySelector(".linux-categories");
const linuxCatFilter = linuxCategories.querySelectorAll(".category");
const linuxDistroName = document.querySelector(".linux-distro-name");
const distroFilterList = linuxDistroName.querySelectorAll(".distro");

let distroIndex = 0
distroFilterList.forEach((distro) => {
  distro.style.viewTransitionName = `distro-${distroIndex++}`;
});


linuxCatFilter.forEach((category) => {
  category.addEventListener("click", (e) => {
    const cateEvent = e.target.getAttribute("data-category");
    console.log(cateEvent);
    document.startViewTransition(() => {
      updateCategory(e.target);
      performFiltering(cateEvent);
    });
    
  });
});

function updateCategory(cateEvent) {
  linuxCategories.querySelector(".active").classList.remove("active");
  cateEvent.classList.toggle("active");
}

function performFiltering(cateEvent) {
  distroFilterList.forEach((distro) => {
    let distroCategory = distro.getAttribute("data-filter");
    if (distroCategory == cateEvent || cateEvent == "all") {
      distro.classList.remove("hidden");
    } else {
      distro.classList.add("hidden");
    }
  });
}
3
