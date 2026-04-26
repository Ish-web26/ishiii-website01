document.addEventListener("DOMContentLoaded", function () {

  const text =
`Sukh,
I don’t know where to begin, because every time I try to put you into words, it feels like I’m leaving something important out. You’re not just a person to me—you’re a feeling I carry everywhere, quietly, like a secret that somehow makes everything lighter.

There’s something about you that stays with me even in your absence. The way you speak, the way you exist so effortlessly—it all lingers in my thoughts longer than I’d like to admit.

And maybe I don’t always say it out loud, but you’ve become a part of my everyday in ways I never planned.

I don’t know what name to give this… maybe it’s love, maybe it’s something growing into it. But I do know that when I think of comfort, I think of you.

LOVE YOU BUNNY 💘🫂
Always,
Yours`;

  let i = 0;

  function typeWriter() {
    let el = document.getElementById("typewriter");
    if (!el) return;

    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 40);
    }
  }

  window.nextPage = function (page) {

    let pages = document.querySelectorAll(".card");
    pages.forEach(p => p.classList.remove("active"));

    let currentPage = document.getElementById("page" + page);
    if (currentPage) {
      currentPage.classList.add("active");
    }

    if (page === 3) {
      i = 0;
      document.getElementById("typewriter").innerHTML = "";
      setTimeout(typeWriter, 300);
    }
  };

});
