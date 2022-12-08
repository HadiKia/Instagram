const likePost1 = document.querySelector(".likePost1");
const likePost2 = document.querySelector(".likePost2");
const likeNum1 = document.querySelector(".likeNum1");
const likeNum2 = document.querySelector(".likeNum2");

function likePost(like) {
  if (like.classList.contains("fal")) {
    like.classList = "fas fa-heart like";
    like.style.color = "#F01A1A";
  } else {
    like.classList = "fal fa-heart like";
    like.style.color = "#2d2d2d";
  }
  if (likePost1.classList == "fas fa-heart like") {
    likeNum1.innerHTML = "360 likes";
  } else {
    likeNum1.innerHTML = "359 likes";
  }
  if (likePost2.classList == "fas fa-heart like") {
    likeNum2.innerHTML = "451 likes";
  } else {
    likeNum2.innerHTML = "450 likes";
  }
}

function savePost(save) {
  if (save.classList.contains("fal")) {
    save.classList = "fas fa-bookmark save";
  } else {
    save.classList = "fal fa-bookmark save";
  }
}
