document.addEventListener("DOMContentLoaded", function () {
    const activitySelect = document.getElementById("activity-select");
    const header = document.querySelector("h1");
  
    const backgroundImages = {
      hiking: 'url("https://i.postimg.cc/fTtSj4kz/hiking.png")',
      canoeing: 'url("https://i.postimg.cc/PxJ5XZwX/canoeing.png")',
      fishing: 'url("https://i.postimg.cc/DyvJHWCz/fishing.png")',
      crafts: 'url("https://i.postimg.cc/Y9Bj3jGM/crafts.png")',
      archery: 'url("https://i.postimg.cc/rwdm255q/archery.png")'
    };
  
    activitySelect.addEventListener("change", function () {
      const selectedActivity = this.value;
      const imageUrl = backgroundImages[selectedActivity];
      if (imageUrl) {
        header.style.backgroundImage = imageUrl;
      }
    });
  
    document.getElementById("activity-select").required = true;
    activitySelect.querySelector("option").disabled = true;
    activitySelect.querySelector("option").selected = true;
  });
  