const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7
      },
      weekly: {
        current: 32,
        previous: 36
      },
      monthly: {
        current: 103,
        previous: 128
      }
    }
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2
      },
      weekly: {
        current: 10,
        previous: 8
      },
      monthly: {
        current: 23,
        previous: 29
      }
    }
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 7
      },
      monthly: {
        current: 13,
        previous: 19
      }
    }
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 5
      },
      monthly: {
        current: 11,
        previous: 18
      }
    }
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3
      },
      weekly: {
        current: 5,
        previous: 10
      },
      monthly: {
        current: 21,
        previous: 23
      }
    }
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 2,
        previous: 2
      },
      monthly: {
        current: 7,
        previous: 11
      }
    }
  }
];

const buttons = document.querySelectorAll(".time-selector");
const currentTime = document.querySelectorAll(".current");
const previousTime = document.querySelectorAll(".previous");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //Checking the selected timeframe
    if (e.target.innerHTML.toLowerCase() === "daily") {
      //Looping through the currentTime array and the data array to change the displayed information
      for (let i = 0; i < currentTime.length; i++) {
        //Changing the current information accordingly
        if (data[i].timeframes.daily.current === 1) {
          currentTime[i].innerHTML = data[i].timeframes.daily.current + "hr";
        } else {
          currentTime[i].innerHTML = data[i].timeframes.daily.current + "hrs";
        }
        //Changing the previous information accordingly
        if (data[i].timeframes.daily.previous === 1) {
          previousTime[i].innerHTML =
            "Yesterday - " + data[i].timeframes.daily.previous + "hr";
        } else {
          previousTime[i].innerHTML =
            "Yesterday - " + data[i].timeframes.daily.previous + "hrs";
        }
      }
    }
    //Checking the selected timeframe
    if (e.target.innerHTML.toLowerCase() === "weekly") {
      //Looping through the currentTime array and the data array to change the displayed information
      for (let i = 0; i < currentTime.length; i++) {
        //Changing the current information accordingly
        if (data[i].timeframes.weekly.current === 1) {
          currentTime[i].innerHTML = data[i].timeframes.weekly.current + "hr";
        } else {
          currentTime[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
        }
        //Changing the previous information accordingly
        if (data[i].timeframes.daily.previous === 1) {
          previousTime[i].innerHTML =
            "Last week - " + data[i].timeframes.weekly.previous + "hr";
        } else {
          previousTime[i].innerHTML =
            "Last week - " + data[i].timeframes.weekly.previous + "hrs";
        }
      }
    }
    if (e.target.innerHTML.toLowerCase() === "monthly") {
      //Looping through the currentTime array and the data array to change the displayed information
      for (let i = 0; i < currentTime.length; i++) {
        //Changing the current information accordingly
        if (data[i].timeframes.monthly.current === 1) {
          currentTime[i].innerHTML = data[i].timeframes.monthly.current + "hr";
        } else {
          currentTime[i].innerHTML = data[i].timeframes.monthly.current + "hrs";
        }
        //Changing the previous information accordingly
        if (data[i].timeframes.daily.previous === 1) {
          previousTime[i].innerHTML =
            "Last month - " + data[i].timeframes.monthly.previous + "hr";
        } else {
          previousTime[i].innerHTML =
            "Last month - " + data[i].timeframes.monthly.previous + "hrs";
        }
      }
    }
  });
});
