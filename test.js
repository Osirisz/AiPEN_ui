function extendContent() {
    var a = document.getElementsByClassName("test");
    var b = document.getElementsByClassName("topic");
    var c = document.getElementsByClassName("detailContentBut");
    var d = document.getElementsByClassName("mt-2 contentTestProj");
    var e = document.getElementsByClassName("detailContentProj");
    var f = document.getElementsByClassName("content-wrapper.divTestProj");
    var g = document.getElementsByClassName("col-md-4 cardTestProj");
    var h = document.getElementsByClassName("mt-2 contentTestInfra");
    var i = document.getElementsByClassName("detailContentInfra");
    var j = document.getElementsByClassName("content-wrapper divTestInfra");
    var k = document.getElementsByClassName("col-md-4 cardTestInfra");
    var l = document.getElementsByClassName("mt-2 contentTestServ");
    var m = document.getElementsByClassName("detailContentServ");
    var n = document.getElementsByClassName("content-wrapper divTestServ");
    var o = document.getElementsByClassName("col-md-4 cardTestServ");

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

    var countTopic;
    for (countTopic = 0; countTopic < b.length; countTopic++) {
        b[countTopic].style.color = "grey";
        b[countTopic].style.fontSize = "22px";
    }

    var countDetailContentBut;
    for (countDetailContentBut = 0; countDetailContentBut < c.length; countDetailContentBut++) {
        c[countDetailContentBut].style.marginRight = "30px";
    }

    var countMt2ContentTestProj;
    for (countMt2ContentTestProj = 0; countMt2ContentTestProj < d.length; countMt2ContentTestProj++) {
        d[countMt2ContentTestProj].style.marginLeft = "80px";
        d[countMt2ContentTestProj].style.width = "100%";
        d[countMt2ContentTestProj].style.position = "relative";
    }

    var countDetailContentProj;
    for (countDetailContentProj = 0; countDetailContentProj < e.length; countDetailContentProj++) {
        e[countDetailContentProj].style.margin = "20px";
        e[countDetailContentProj].style.overflowY = "auto";
        e[countDetailContentProj].style.height = "450px";
    }

    var countContentWrapperDivTestProj;
    for (countContentWrapperDivTestProj = 0; countContentWrapperDivTestProj < f.length; countContentWrapperDivTestProj++) {
        f[countContentWrapperDivTestProj].style.width = "900px";
    }

    var countCol4CardTestProj;
    for (countCol4CardTestProj = 0; countCol4CardTestProj < g.length; countCol4CardTestProj++) {
        g[countCol4CardTestProj].style.width = "50%";
    }

    var countMt2ContentTestInfra;
    for (countMt2ContentTestInfra = 0; countMt2ContentTestInfra < h.length; countMt2ContentTestInfra++) {
        h[countMt2ContentTestInfra].style.marginLeft = "80px";
        h[countMt2ContentTestInfra].style.width = "100%";
        h[countMt2ContentTestInfra].style.position = "relative";
    }

    var countDetailContentInfra;
    for (countDetailContentInfra = 0; countDetailContentInfra < i.length; countDetailContentInfra++) {
        i[countDetailContentInfra].style.margin = "20px";
        i[countDetailContentInfra].style.overflowY = "auto";
        i[countDetailContentInfra].style.height = "450px";
    }

    var countContentWrapperDivTestInfra;
    for (countContentWrapperDivTestInfra = 0; countContentWrapperDivTestInfra < j.length; countContentWrapperDivTestInfra++) {
        j[countContentWrapperDivTestInfra].style.width = "900px";
    }

    var countCol4CardTestInfra;
    for (countCol4CardTestInfra = 0; countCol4CardTestInfra < k.length; countCol4CardTestInfra++) {
        k[countCol4CardTestInfra].style.width = "50%";
    }

    var countMt2ContentTestServ;
    for (countMt2ContentTestServ = 0; countMt2ContentTestServ < l.length; countMt2ContentTestServ++) {
        l[countMt2ContentTestServ].style.marginLeft = "80px";
        l[countMt2ContentTestServ].style.width = "100%";
        l[countMt2ContentTestServ].style.position = "relative";
    }

    var countDetailContentServ;
    for (countDetailContentServ = 0; countDetailContentServ < m.length; countDetailContentServ++) {
        m[countDetailContentServ].style.margin = "20px";
        m[countDetailContentServ].style.overflowY = "auto";
        m[countDetailContentServ].style.height = "450px";
    }

    var countContentWrapperDivTestServ;
    for (countContentWrapperDivTestServ = 0; countContentWrapperDivTestServ < n.length; countContentWrapperDivTestServ++) {
        n[countContentWrapperDivTestServ].style.width = "900px";
    }

    var countCol4CardTestInServ;
    for (countCol4CardTestInServ = 0; countCol4CardTestInServ < o.length; countCol4CardTestInServ++) {
        o[countCol4CardTestInServ].style.width = "50%";
    }
}
