// RUMMAGE

// Highlight elements on the page that have a specified CSS property value

// You can search by regex:

//      "border.*radius.*8px"

// NOTE: Your pattern must match against the property value and the long-form name of the property

//      border-bottom-right-radius: 8px; // OK
//      border.*radius.*8px              // OK
//      border.*red                      // OK; will match "border-color: red"
//      border-bottom-right-radius.*     // NO; will match all elements
//      border-radius: 8px;              // NO; will match 0 elements bc border-radius is shorthand


// HTMLElement -> String
function elemCss(e){
    return window.getComputedStyle(e).cssText;
}

// String -> [HTMLElement]
function rummage(ruleRegexString) {
    var rx = new RegExp(ruleRegexString);
    var es = Array.from(document.querySelectorAll('body *'))
    var matches = es.filter(function(e){ return rx.test(elemCss(e)) });
    return matches;
}

var query = prompt( 'enter css fragment regex (e.g. "bottom.*32px")' );
var mm = (rummage(query))
mm.forEach(function(e) { e.style.outline = '1px fuchsia solid' });
console.dir(mm);
