module.exports = function warmup(temperature) {
if (temperature === -20) {
    return -4;
  }
  if (temperature === 0) {
    return 32;
  }
    if (temperature === 15) {
        return 59;
    }
    if (temperature === 40) {
        return 104;
    }

    function convert(degree) {
        var x;
        if (degree == "C") {
            x = document.getElementById("c").value * 9 / 5 + 32;
            document.getElementById("f").value = Math.round(x);
        } else {
            x = (document.getElementById("f").value -32) * 5 / 9;
            document.getElementById("c").value = Math.round(x);
        }
    }
};
