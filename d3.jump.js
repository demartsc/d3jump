d3.jump = {};

d3.jump.hop = function(xAxis, yAxis, hType, clearInd) {
  function hop(d, i) {
//    if (t.a < s.a) x = t, t = s, s = x;
//    var a1 = s.a + (t.a - s.a) / 3, // control point start + 1/3
//        a2 = t.a - (t.a - s.a) / 3; // control point end - 1/3

  if (clearInd == "y") {
    d.value = 0;
  }

  if (hType == "c") {
    //cubic
    return "M" + xAxis(d.source+1) + "," + yAxis(d.source+1) // starting point // this section (and the one above) is drawing M=moveto command of svg path
        + "C" + xAxis(d.source+1) + "," + yAxis(d.value) //control point 1 // C curveto command of svg path
        + " " + xAxis(d.target+1) + "," + yAxis(d.value) //control point 2
        + " " + xAxis(d.target+1) + "," + yAxis(d.target+1); //ending point
  }
  else {
    //quadratic
    return "M" + xAxis(d.source+1) + "," + yAxis(d.source+1) // starting point // this section (and the one above) is drawing M=moveto command of svg path
        + "Q" + xAxis(((d.target-d.source)/2)+d.source+1) + "," + yAxis(d.value*2) //control point 1 // C curveto command of svg path
        + " " + xAxis(d.target+1) + "," + yAxis(d.target+1); //ending point
  }
}
  hop.source = function(_) {
    if (!arguments.length) return source;
    source = _;
    return hop;
  };

  hop.target = function(_) {
    if (!arguments.length) return target;
    target = _;
    return hop;
  };

  hop.hop = function(_) {
    if (!arguments.length) return hop;
    hop = _;
    return hop;
  };

  return hop;
};