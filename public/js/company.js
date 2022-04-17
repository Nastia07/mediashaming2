document.addEventListener("DOMContentLoaded", function (event) {
  const twitter_link = document.getElementById("twitter_button");

  function setTwiterLink() {
    let text = twitter_link.dataset.text.replaceAll(" ", "%20");
    twitter_link.href = "https://twitter.com/intent/tweet?text=".concat(text);
  }

  setTwiterLink();
});
