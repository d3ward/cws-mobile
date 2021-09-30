(function() {
    if (!document.location.href.includes('https://chrome.google.com/webstore')) {
        return;
    }
    (function() {
        function createProperty(value) {
            var _value = value;
            function _get() {
                return _value
            }
            function _set(v) {
                _value = v
            }
            return {
                'get': _get,
                'set': _set
            }
        }
        ;function makePropertyWritable(objBase, objScopeName, propName, initValue) {
            var newProp, initObj;
            if (objBase && objScopeName in objBase && propName in objBase[objScopeName]) {
                if (typeof initValue === 'undefined') {
                    initValue = objBase[objScopeName][propName]
                }
                newProp = createProperty(initValue);
                try {
                    Object.defineProperty(objBase[objScopeName], propName, newProp)
                } catch (e) {
                    initObj = {};
                    initObj[propName] = newProp;
                    try {
                        objBase[objScopeName] = Object.create(objBase[objScopeName], initObj)
                    } catch (e) {}
                }
            }
        }
        ;makePropertyWritable(window, 'navigator', 'userAgent');
    }
    )();
    function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
        var startTimeInMs = Date.now();
        !function loopSearch() {
            null == document.querySelector(selector) ? setTimeout((function() {
                timeoutInMs && Date.now() - startTimeInMs > timeoutInMs || loopSearch()
            }
            ), checkFrequencyInMs) : callback()
        }()
    }
    window.navigator.userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.25 Safari/537.36';
    window.addEventListener("load", function() {
        console.log("Inject cws_mobile_script ");
        if (document.getElementById('lrdnjct') == undefined) {
            if (document.location.pathname == '/webstore/unsupported') {
                document.location = '/webstore/';
            }
            document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, initial-scale=1.0");
            var nodeStyle = document.createElement('style');
            nodeStyle.innerHTML = '.showNav{margin:0!important}.a-na-d-cb{border:none}.a-na-d-K-A{margin:0}.g-na-ib-k{padding:0}span.FokDXb.g-Qc-s{margin:0;padding:.4rem}input#searchbox-input{padding:0 .4rem}.a-na-d-Oa{white-space:unset}.a-na-d-K-A-w{flex-direction:column;margin:0}.F-x{width:100%!important}.F-k,.S-Rc-qa .a-na-d,.a-P-d{width:auto!important}.a-K-o{padding-top:8px!important}.h-a-x{text-align:center}.HWJfBb{height:90vh!important;overflow-y:scroll!important;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)!important}.a-na-d-B1neQd-cb,div .a-P-d-k{margin:0;border-radius:5px;padding:5px;width:100%!important;box-sizing:border-box;box-shadow:0 3px 6px rgb(0 0 0 / 16%),0 3px 6px rgb(0 0 0 / 23%)}.e-f-w-Va{width:100%!important}.O-j{padding:.5rem}.O-j-gb{margin:0}.yrk3fc{margin:10px 16px!important}span .h-n-j-Z-ea-aa{margin-top:10px!important}.O-j-Ic-c,.e-f-yb-w-ie,.gpx3nd.Ka-Ia-j,.h-ja-sb{display:none}.PNF6le{text-transform:none!important}img.a-P-d-A,img.a-na-d-A{height:auto!important;width:100%!important;border-radius:.5rem}.h-C-b-i-k{transform:scale(.5)}.e-f-pa,.h-C-b-i-k .i-F-Rb-k,section.e-f-b-x{margin:0}.C-b.e-f-b-x{margin:auto}.e-f-b-j.g-b-j.g-b-j-O{flex-direction:column;height:auto;margin-top:1rem}.F-n-J{position:fixed!important;left:0!important;margin-left:-450px;height:100vh!important;width:100vw!important;max-width:450px;z-index:1149!important;transition:margin .4s ease}.e-f-n-Va{gap:1rem;align-items:center;justify-content:center}.e-f-w{text-overflow:unset;white-space:break-spaces}.h-z-Ba-ca,.z-J-cGXGTb-Fg-c{margin:0}.F-ia-k.S-ph.S-Rc-qa,.h-ba-Eb.ba-Eb.pd-Ye-Qa{padding:0}article.tNOBCb-b-n-x,article.tNOBCb-b-p-x.tNOBCb-b-p-x-cb{margin:0;padding:0;border:0}.Hc-o,.e-f-o,.tNOBCb-b,.z-J-w-k,span.z-Ha-j{flex-direction:column;gap:.5rem}.C-b-p-j.C-b-p-j-Wd.Ka-Ia-j{flex-direction:column;margin:0;padding:.5rem}.C-b-p-j-kk-dk.Ka-Ia-j{margin:0;margin-top:1rem;padding:.5rem;border:0;border-top:1px solid #f1f3f4}div[role=row]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.5rem;padding:.5rem}span.e-f-yb-w{flex-direction:column;gap:.5rem;width:calc(100% + 60px);border-radius:.5rem;padding:.5rem;margin-left:calc(-60px - 1rem);background:#f0f0f0}img.e-f-s{margin-right:0;align-self:baseline}.C-b-i.i-Xa-U-S.i-Xa-Fa .i-Xa-U-S-ti,.i-Xa-U-S-ti{width:25px;height:25px}.f-rd>.e-f{min-width:unset;padding:1rem;box-sizing:border-box}#mnbtn3{float:left;padding:4px;display:inline-block;cursor:pointer;z-index:200}.bar1,.bar2,.bar3{width:25px;height:4px;background-color:#5f6368;margin:3px 0;margin-right:6px;transition:.4s}.change .bar1{-webkit-transform:rotate(-45deg) translate(-5px,5px);transform:rotate(-45deg) translate(-5px,5px)}.change .bar2{opacity:0}.change .bar3{-webkit-transform:rotate(45deg) translate(-5px,-5px);transform:rotate(45deg) translate(-5px,-5px)}';
            document.body.appendChild(nodeStyle);
            console.log('CSS injected');
            var sdnv = document.querySelector(".F-n-J");
            var mnbtn = document.createElement("div");
            var statusS = true;
            var nptsrc = document.querySelector('.h-n-j-Qc-lc');
            console.log('Variables created');
            var lrdnjct = document.createElement('div');
            lrdnjct.id = 'lrdnjct';
            document.body.appendChild(lrdnjct);
            waitForElementToDisplay(".O-j", function() {
                console.log(document.querySelector(".O-j"));
                mnbtn.id = 'mnbtn3';
                mnbtn.innerHTML = '<div class="bar1"></div><div class="bar2"></div><div class="bar3"></div>';
                console.log('mnbtn initialized ');
                console.log(mnbtn);
                var mojbar = document.querySelector(".O-j");
                console.log(mojbar);
                mojbar.insertBefore(mnbtn, mojbar.firstChild);
                console.log('mnbtn inserted');
                console.log('add event listener to mnbtn');
                mnbtn.addEventListener('click', ()=>{
                    if (statusS) {
                        document.querySelector("#mnbtn3").classList.add('change');
                        document.querySelector(".F-n-J").classList.add('showNav');
                    } else {
                        document.querySelector("#mnbtn3").classList.remove('change');
                        document.querySelector(".F-n-J").classList.remove('showNav');
                    }
                    statusS = !statusS;
                }
                );
                nptsrc.addEventListener('keypress', (evt)=>{
                    if (evt.keyCode == 13) {
                        document.querySelector("#mnbtn3").classList.remove('change');
                        document.querySelector(".F-n-J").classList.remove('showNav');
                        statusS = true;
                    }
                }
                );
                console.log("Inject the elements");
            }, 1000, 20000);
        } else {
            console.log("CWS Mobile Script already injected");
        }
    });
}
)();