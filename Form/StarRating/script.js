const blankSlider = document.getElementById("blank-slider");
const emptyStars = document.querySelector(".empty-stars");
const val = document.getElementById("val");
const wrBtn = document.getElementById("wr-btn");
const backBtn = document.getElementById("back-btn");
const cardFront = document.querySelector(".front");
const cardBack = document.querySelector(".back");
const ratingCard = document.getElementById("rating-card");
const satisfactionTxtContainer = document.getElementById("satisfaction-text");
const goBackBtn = document.getElementById("go-back-btn");
const sentInfo = document.querySelector(".sent");
const rateUsBtn = document.getElementById("rate-us");
const reviewField = document.getElementById("review-field");
const emoticonContainer = document.getElementById("emoticon-container");
const hoverColors = ["red", "orange", "yellow", "chartreuse", "lime"];
const emoticons = [
  "&#128545;",
  "&#128577;",
  "&#128528;",
  "&#128522;",
  "&#129321;",
];
const satisfactionTxt = [
  "Highly Unsatisfied",
  "Slightly Unsatisfied",
  "feeling Indifferent",
  "Quite Satisfied",
  "Extremely Satisfied",
];

// Function to reverse numbers within 100
function reverseValue(value) {
  return 100 - value;
}

// loop through all the empty stars element
for (let i = 0; i < emptyStars.children.length; i++) {
  // Change the color of hovered star on mouseenter event
  emptyStars.children[i].onmouseenter = (e) => {
    emptyStars.children[i].style.color = hoverColors[i];
  };

  // Restore the color of hovered star on mouseleave event
  emptyStars.children[i].onmouseleave = (e) => {
    emptyStars.children[i].style.color = "#333";
  };

  // Update the slider, satisfaction text, and emoticon when any of the empty stars are clicked
  emptyStars.children[i].onclick = (e) => {
    // changes the value of the input field to number rating for the clicked star.
    val.value = i * 2 + 2;

    // sets the width percentage value of the slider to the index value of the clicked star plus 1 times 20 in reverse
    blankSlider.style.width = `${reverseValue((i + 1) * 20)}%`;

    satisfactionTxtContainer.innerHTML = satisfactionTxt[i];
    emoticonContainer.innerHTML = emoticons[i];
  };
}

// Add input event listener to the input value(val) element
val.addEventListener("input", (e) => {
  if (val.value < 0) {
    val.value = 0;
  }

  // Update the slider width based on the input value
  blankSlider.style.width = `${reverseValue(val.value * 10)}%`;

  // Update the satisfaction text and emoticon based on the input value
  const index = Math.min(Math.floor(val.value / 2 - 0.5), 4);

  satisfactionTxtContainer.innerHTML =
    index < 0 || val.value == "" ? "&nbsp;" : satisfactionTxt[index];
  emoticonContainer.innerHTML =
    index < 0 || val.value == "" ? "&nbsp;" : emoticons[index];
});

wrBtn.onclick = () => {
  ratingCard.classList.add("flipped");
  cardFront.classList.add("p-events");
  cardBack.style.pointerEvents = "visible";
};

backBtn.onclick = () => {
  ratingCard.classList.remove("flipped");
  cardFront.classList.remove("p-events");
  cardBack.style.pointerEvents = "none";
};

// user's rating info object.
let userRating = {
  RatingValue: "",
  satisfaction: "",
  review: "",
};

// store the user's rating info
rateUsBtn.onclick = () => {
  ratingCard.style.display = "none";
  sentInfo.style.display = "grid";

  userRating.RatingValue = val.value;
  userRating.satisfaction = satisfactionTxtContainer.textContent;
  userRating.review = reviewField.value;
  console.log(userRating);
};

goBackBtn.onclick = () => {
  ratingCard.style.display = "block";
  sentInfo.style.display = "none";
};
