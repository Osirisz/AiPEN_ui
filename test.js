function closeExtendContent() {
  var a = document.getElementsByClassName("test");
  var b = document.getElementsByClassName("mt-2 contentTestProj");
  var c = document.getElementsByClassName("detailContentProj");
  var d = document.getElementsByClassName("content-wrapper divTestProj");
  var e = document.getElementsByClassName("col-md-4 cardTestProj");
  var f = document.getElementsByClassName("mt-2 contentTestInfra");
  var g = document.getElementsByClassName("detailContentInfra");
  var h = document.getElementsByClassName("content-wrapper divTestInfra");
  var i = document.getElementsByClassName("col-md-4 cardTestInfra");
  var j = document.getElementsByClassName("mt-2 contentTestServ");
  var k = document.getElementsByClassName("detailContentServ");
  var l = document.getElementsByClassName("content-wrapper divTestServ");
  var m = document.getElementsByClassName("col-md-4 cardTestServ");

  var countTest;
  for (countTest = 0; countTest < a.length; countTest++) {
      a[countTest].style.display = "none";
  }

  var countMt2ContentTestProj;
  for (countMt2ContentTestProj = 0; countMt2ContentTestProj < b.length; countMt2ContentTestProj++) {
      b[countMt2ContentTestProj].removeAttribute("style");
  }

  var countDetailContentProj;
  for (countDetailContentProj = 0; countDetailContentProj < c.length; countDetailContentProj++) {
      c[countDetailContentProj].removeAttribute("style");
  }

  var countContentWrapperDivTestProj;
  for (countContentWrapperDivTestProj = 0; countContentWrapperDivTestProj < d.length; countContentWrapperDivTestProj++) {
      d[countContentWrapperDivTestProj].removeAttribute("style");
  }

  var countCol4CardTestProj;
  for (countCol4CardTestProj = 0; countCol4CardTestProj < e.length; countCol4CardTestProj++) {
      e[countCol4CardTestProj].removeAttribute("style");
  }

  var countMt2ContentTestInfra;
  for (countMt2ContentTestInfra = 0; countMt2ContentTestInfra < f.length; countMt2ContentTestInfra++) {
      f[countMt2ContentTestInfra].removeAttribute("style");
  }

  var countDetailContentInfra;
  for (countDetailContentInfra = 0; countDetailContentInfra < g.length; countDetailContentInfra++) {
      g[countDetailContentInfra].removeAttribute("style");
  }

  var countContentWrapperDivTestInfra;
  for (countContentWrapperDivTestInfra = 0; countContentWrapperDivTestInfra < h.length; countContentWrapperDivTestInfra++) {
      h[countContentWrapperDivTestInfra].removeAttribute("style");
  }

  var countCol4CardTestInfra;
  for (countCol4CardTestInfra = 0; countCol4CardTestInfra < i.length; countCol4CardTestInfra++) {
      i[countCol4CardTestInfra].removeAttribute("style");
  }

  var countMt2ContentTestServ;
  for (countMt2ContentTestServ = 0; countMt2ContentTestServ < j.length; countMt2ContentTestServ++) {
      j[countMt2ContentTestServ].removeAttribute("style");
  }

  var countDetailContentServ;
  for (countDetailContentServ = 0; countDetailContentServ < k.length; countDetailContentServ++) {
      k[countDetailContentServ].removeAttribute("style");
  }

  var countContentWrapperDivTestServ;
  for (countContentWrapperDivTestServ = 0; countContentWrapperDivTestServ < l.length; countContentWrapperDivTestServ++) {
      l[countContentWrapperDivTestServ].removeAttribute("style");
  }

  var countCol4CardTestInServ;
  for (countCol4CardTestInServ = 0; countCol4CardTestInServ < m.length; countCol4CardTestInServ++) {
      m[countCol4CardTestInServ].removeAttribute("style");
  }
  document.getElementById("graphTest").style.width = "1062px";
}
function extendContent() {
    var a = document.getElementsByClassName("test");
    var b = document.getElementsByClassName("mt-2 contentTestProj");
    var c = document.getElementsByClassName("detailContentProj");
    var d = document.getElementsByClassName("content-wrapper divTestProj");
    var e = document.getElementsByClassName("col-md-4 cardTestProj");
    var f = document.getElementsByClassName("mt-2 contentTestInfra");
    var g = document.getElementsByClassName("detailContentInfra");
    var h = document.getElementsByClassName("content-wrapper divTestInfra");
    var i = document.getElementsByClassName("col-md-4 cardTestInfra");
    var j = document.getElementsByClassName("mt-2 contentTestServ");
    var k = document.getElementsByClassName("detailContentServ");
    var l = document.getElementsByClassName("content-wrapper divTestServ");
    var m = document.getElementsByClassName("col-md-4 cardTestServ");

    var countTest;
    for (countTest = 0; countTest < a.length; countTest++) {
        a[countTest].style.width = "500px";
        a[countTest].style.position = "fixed";
        a[countTest].style.zIndex = "1";
        a[countTest].style.height = "580px";
        a[countTest].style.float = "right";
        a[countTest].style.right = "0";
        a[countTest].style.margin = "0";
        a[countTest].style.padding = "0";
        a[countTest].style.display = "block";
    }

    var countMt2ContentTestProj;
    for (countMt2ContentTestProj = 0; countMt2ContentTestProj < b.length; countMt2ContentTestProj++) {
        b[countMt2ContentTestProj].style.marginLeft = "80px";
        b[countMt2ContentTestProj].style.width = "100%";
        b[countMt2ContentTestProj].style.position = "relative";
    }

    var countDetailContentProj;
    for (countDetailContentProj = 0; countDetailContentProj < c.length; countDetailContentProj++) {
        c[countDetailContentProj].style.margin = "20px";
        c[countDetailContentProj].style.overflowY = "auto";
        c[countDetailContentProj].style.height = "450px";
    }

    var countContentWrapperDivTestProj;
    for (countContentWrapperDivTestProj = 0; countContentWrapperDivTestProj < d.length; countContentWrapperDivTestProj++) {
        d[countContentWrapperDivTestProj].style.width = "900px";
    }

    var countCol4CardTestProj;
    for (countCol4CardTestProj = 0; countCol4CardTestProj < e.length; countCol4CardTestProj++) {
        e[countCol4CardTestProj].style.width = "50%";
    }

    var countMt2ContentTestInfra;
    for (countMt2ContentTestInfra = 0; countMt2ContentTestInfra < f.length; countMt2ContentTestInfra++) {
        f[countMt2ContentTestInfra].style.marginLeft = "80px";
        f[countMt2ContentTestInfra].style.width = "100%";
        f[countMt2ContentTestInfra].style.position = "relative";
    }

    var countDetailContentInfra;
    for (countDetailContentInfra = 0; countDetailContentInfra < g.length; countDetailContentInfra++) {
        g[countDetailContentInfra].style.margin = "20px";
        g[countDetailContentInfra].style.overflowY = "auto";
        g[countDetailContentInfra].style.height = "450px";
    }

    var countContentWrapperDivTestInfra;
    for (countContentWrapperDivTestInfra = 0; countContentWrapperDivTestInfra < h.length; countContentWrapperDivTestInfra++) {
        h[countContentWrapperDivTestInfra].style.width = "900px";
    }

    var countCol4CardTestInfra;
    for (countCol4CardTestInfra = 0; countCol4CardTestInfra < i.length; countCol4CardTestInfra++) {
        i[countCol4CardTestInfra].style.width = "50%";
    }

    var countMt2ContentTestServ;
    for (countMt2ContentTestServ = 0; countMt2ContentTestServ < j.length; countMt2ContentTestServ++) {
        j[countMt2ContentTestServ].style.marginLeft = "80px";
        j[countMt2ContentTestServ].style.width = "100%";
        j[countMt2ContentTestServ].style.position = "relative";
    }

    var countDetailContentServ;
    for (countDetailContentServ = 0; countDetailContentServ < k.length; countDetailContentServ++) {
        k[countDetailContentServ].style.margin = "20px";
        k[countDetailContentServ].style.overflowY = "auto";
        k[countDetailContentServ].style.height = "450px";
    }

    var countContentWrapperDivTestServ;
    for (countContentWrapperDivTestServ = 0; countContentWrapperDivTestServ < l.length; countContentWrapperDivTestServ++) {
        l[countContentWrapperDivTestServ].style.width = "900px";
    }

    var countCol4CardTestInServ;
    for (countCol4CardTestInServ = 0; countCol4CardTestInServ < m.length; countCol4CardTestInServ++) {
        m[countCol4CardTestInServ].style.width = "50%";
    }
    document.getElementById("graphTest").style.width = "850px";

}
