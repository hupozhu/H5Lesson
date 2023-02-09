(
    function (p) {
     if (!p || !p.timing) return; 
     var t = p.timing, s = t.navigationStart, sc = t.secureConnectionStart, dc = t.domComplete, lee = t.loadEventEnd; 
     return JSON.stringify({ dns: t.domainLookupEnd - t.domainLookupStart, c: t.connectEnd - t.connectStart, scs: sc > 0 ? sc - s : 0, req: t.requestStart - s, rps: t.responseStart - s, rpe: t.responseEnd - s, dl: t.domLoading - s, dcl: t.domContentLoadedEventEnd - s, dc: dc > 0 ? dc - s : 0, lee: lee > 0 ? lee - s : 0 }) 
    }
)(window.performance)