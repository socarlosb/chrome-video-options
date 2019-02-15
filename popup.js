document.addEventListener(
  "DOMContentLoaded",
  function() {
    var videoSpeed1 = document.getElementById("videoSpeed1");
    var videoSpeed15 = document.getElementById("videoSpeed15");
    var videoSpeed175 = document.getElementById("videoSpeed175");
    var videoSpeed2 = document.getElementById("videoSpeed2");
    var videoSpeedLoop = document.getElementById("videoSpeedLoop");

    function activeBtn(e) {
      e.classList.toggle("active");
    }
    function speedCleanUp() {
      videoSpeed1.classList.remove("active");
      videoSpeed15.classList.remove("active");
      videoSpeed175.classList.remove("active");
      videoSpeed2.classList.remove("active");
    }

    function changeSpeed(val) {
      chrome.tabs.executeScript(null, {
        code:
          'var video = document.querySelector("video"); video.playbackRate = ' +
          val +
          ";"
      });
    }

    function changeLoop() {
      chrome.tabs.executeScript(null, {
        code:
          'var video = document.querySelector("video"); if (video.attributes.loop) {video.removeAttribute("loop");} else {video.setAttribute("loop", true);}'
      });
    }

    function checkVideoSpeed() {
      var videoSpeed = chrome.tabs.get(null, {
        code:
          'document.querySelector("video").playbackRate;console.log("nice speed", document.querySelector("video").playbackRate);'
      });
      console.log(videoSpeed);
      return videoSpeed;
    }

    // function doStuffWithDom(domContent) {
    //   console.log("I received the following DOM content:\n" + domContent);
    // }

    // chrome.tabs.se(tab.id, { text: "report_back" }, doStuffWithDom);

    // var test = checkVideoSpeed();
    // switch (test) {
    //   case "1":
    //     activeBtn(videoSpeed1);
    //     break;lorer
    //     activeBtn(videoSpeed15);
    //     break;
    //   case "1.75":
    //     activeBtn(videoSpeed175);
    //     break;
    //   case "2":
    //     activeBtn(videoSpeed2);
    //     break;
    //   default:
    //     break;
    // }

    videoSpeed1.addEventListener(
      "click",
      function() {
        speedCleanUp();
        activeBtn(videoSpeed1);
        changeSpeed(1);
      },
      false
    );
    videoSpeed15.addEventListener(
      "click",
      function() {
        speedCleanUp();
        activeBtn(videoSpeed15);
        changeSpeed(1.5);
      },
      false
    );
    videoSpeed175.addEventListener(
      "click",
      function() {
        speedCleanUp();
        activeBtn(videoSpeed175);
        changeSpeed(1.75);
      },
      false
    );
    videoSpeed2.addEventListener(
      "click",
      function() {
        speedCleanUp();
        activeBtn(videoSpeed2);
        changeSpeed(2);
      },
      false
    );
    videoSpeedLoop.addEventListener(
      "click",
      function() {
        activeBtn(videoSpeedLoop);
        changeLoop();
      },
      false
    );
  },
  false
);
