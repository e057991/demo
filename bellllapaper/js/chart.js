window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  theme: "light2", // "light1", "light2", "dark1", "dark2"
  title:{
    text: "碩士生就業情況",
    fontFamily: 'Noto Sans TC',
    fontSize: 16
  },


  axisY: {
    title: "%"
  },
  data: [{
    type: "column",
    showInLegend: true,
    legendMarkerColor: "grey",
    legendText: "產業分佈",
    dataPoints: [
      { y: 47, label: "資訊科技" },
      { y: 16,  label: "金融保險" },
      { y: 11,  label: "教育機構" },
      { y: 5,  label: "政府機關" },
      { y: 5,  label: "傳統製造" },
      { y: 3, label: "創業" },
      { y: 13,  label: "其他" }

    ]
  }]
});
chart.render();



}




function toggleDataSeries(e) {
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
        e.dataSeries.visible = false;
    } else {
        e.dataSeries.visible = true;
    }
    chart.render();
}


function toolTipContent(e) {
  var str = "";
  var total = 0;
  var str2, str3;
  for (var i = 0; i < e.entries.length; i++){
    var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: $<strong>"+e.entries[i].dataPoint.y+"</strong>bn<br/>";
    total = e.entries[i].dataPoint.y + total;
    str = str.concat(str1);
  }
  str2 = "<span style = \"color:DodgerBlue;\"><strong>"+(e.entries[0].dataPoint.x).getFullYear()+"</strong></span><br/>";
  total = Math.round(total * 100) / 100;
  str3 = "<span style = \"color:Tomato\">Total:</span><strong> $"+total+"</strong>bn<br/>";
  return (str2.concat(str)).concat(str3);
}