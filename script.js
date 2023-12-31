var projects = document.getElementById("projects");
var files = document.getElementById("files");
var footer = document.getElementById("footer");
var linksSection = document.createElement("div");
linksSection.classList.add("links");
footer.appendChild(linksSection);

//createing the cards
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

//creating the footer links
function createLinks(data) {
  data?.map((item) => {
    var link = document.createElement("div");
    var linkTag = document.createElement("a");
    var linkName = document.createElement("p");

    link.classList.add("link");
    linkName.classList.add("link-name");

    linkName.textContent = item.name;
    linkTag.setAttribute("href", item.link);

    linkTag.appendChild(linkName);
    link.appendChild(linkTag);

    linksSection.appendChild(link);
  });
}

//creating the footer contact info
function createContactInfo() {
  var contacts = document.createElement("div");
  var emailContact = document.createElement("a");
  emailContact.setAttribute("href", "mailto:" + mainData.email);
  emailContact.textContent = mainData.email;
  var phoneContact = document.createElement("a");
  phoneContact.setAttribute("href", "tel:" + mainData.phone);
  phoneContact.textContent = mainData.phone;

  contacts.classList.add("contacts");
  emailContact.classList.add("contact");
  phoneContact.classList.add("contact");

  contacts.appendChild(emailContact);
  contacts.appendChild(phoneContact);
  footer.appendChild(contacts);
}

createCards(repoData);
createLinks(links);
createContactInfo();

//setting the website title & website favicon
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
