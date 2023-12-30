var projects = document.getElementById("projects");
var files = document.getElementById("files");
var footer = document.getElementById("footer");

function createCards(data) {
  data.map((item) => {
    var description = document.createElement("p");
    var title = document.createElement("h3");
    var image = document.createElement("img");
    var link = document.createElement("a");
    var card = document.createElement("div");

    if (mainData.showTags) {
      var tags = document.createElement("div");

      var tagList = item.tags;
      tagArray = tagList.split(",");
      tagArray?.map((tag) => {
        tagElement = document.createElement("div");
        tagElement.classList.add("tag");
        tagElement.textContent = tag.trim();
        tags.appendChild(tagElement);
      });

      tags.classList.add("tags");
    }

    card.classList.add("project-card");

    link.appendChild(image);
    link.appendChild(title);
    link.appendChild(description);
    card.appendChild(link);

    if (mainData.showTags) {
      card.appendChild(tags);
    }
    projects.appendChild(card);

    description.textContent = item.description;
    title.textContent = item.title;
    image.setAttribute("alt", item.title);
    image.setAttribute("src", item.image);
    link.setAttribute("href", item.link);
    link.setAttribute("style", "text-decoration: none");
  });
}

function createLinks(data) {
  data.map((item) => {
    var link = document.createElement("div");
    var linkName = document.createElement("p");
    var linkTag = document.createElement("a");

    link.classList.add("link");
    linkName.classList.add("link-name");

    linkName.textContent = item.name;
    linkTag.setAttribute("href", item.link);

    linkTag.appendChild(linkName);
    link.appendChild(linkTag);

    footer.appendChild(link);
  });
}

createCards(repoData);
createLinks(links);

var websiteTitle = document.getElementById("website-title");
websiteTitle.textContent = mainData.name;

document.addEventListener("DOMContentLoaded", function () {
  document.title = mainData.name + " - " + mainData.title;

  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const favicon = document.querySelector("link[rel='icon']");
  function setFavicon() {
    if (isDarkMode) {
      favicon.href = mainData.white_favicon;
    } else {
      favicon.href = mainData.black_favIcon;
    }
  }
  setFavicon();

  // Listen for changes in color scheme (if supported)
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addListener(setFavicon);
  }
});
