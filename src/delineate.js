( function() {

    // Enter a regExp to search for in the text of all CSS rules acting on the current page.
    // Logs the matching selectors and rules to the console.
    // Outlines affected elements in fuchsia.

    function QSA( sel ) {
        return [].slice.call( document.querySelectorAll( sel ) );
    }

    function delineate( selector ) {
        console.log('delineate', selector);
        QSA(selector).forEach(function(elem, i, a) {
            elem.style.outline = "1px fuchsia solid";
        });
    }

    function extend( dst, src ) {
        for ( var k in src ) dst[ k ] = src[ k ];
        return dst;
    }


    // return the CSS rules acting on a dom element (stylesheet and/or inline)
    function cssActingOnElement( domElem ) {
        var o = {};
        var rules = window.getMatchedCSSRules( domElem );
        for ( var r in rules ) {
            extend( o, css2json( rules[ r ].style ) );
            extend( o, css2json( domElem.getAttribute( "style" ) ) );
        }
        return o;
    }


    // converts a set of "attribute: value" css rules to a plain js object
    function css2json( css ) {
        var i, s = {};
        if ( !css ) return s;
        if ( css instanceof CSSStyleDeclaration ) {
            for ( i in css ) {
                if ( ( css[ i ] ).toLowerCase ) {
                    s[ ( css[ i ] ).toLowerCase() ] = ( css[ css[ i ] ] );
                }
            }
        } else if ( typeof css == "string" ) {
            css = css.split( "; " );
            for ( i in css ) {
                var l = css[ i ].split( ": " );
                s[ l[ 0 ].toLowerCase() ] = ( l[ 1 ] );
            }
        }
        return s;
    }


    function delineate( selector ) {
        QSA(selector).forEach(function(elem, i, a) {
            elem.style.outline = "1px fuchsia solid";
        });
    }


    function rummage( ruleRegexString ) {
        console.log( 'working...' );
        function keys( obj ) {var ret = []; for ( var k in obj ) ret.push( k ); return ret; }
        function pairs( obj ) {var ret = []; for ( var k in obj ) ret.push( k + ":" + obj[ k ] ); return ret; }
        function putKey( memo, e, i, a ) {memo[ e ] = 1; return memo; }
        function uniq( arr ) {return keys( arr.reduce( putKey, {} ) ); }
        
        function truthy( v ) {return !!v; }
        function selectorForElem( e ) {return [ e.tagName ].concat( e.className.split( ' ' ) ).filter( truthy ).join( '.' ); }
        
        var rgx = new RegExp( ruleRegexString );
        function ruleMatches( ruleText ) {return rgx.test( ruleText ); }

        var selectorsInPage = uniq( QSA( "*" ).map( selectorForElem ) );
        var matches = selectorsInPage.reduce( function( memo, selector ) {
            var rules = cssActingOnElement( QSA( selector )[ 0 ] );
            var ruleStrings = pairs( rules );
            var matches = ruleStrings.filter( ruleMatches );
            if ( matches.length ) {
                delineate( selector );
                return memo.concat( {
                    selector: selector,
                    matchingRules: matches
                } );
            }
            return memo;
        }, [] );
        return matches;
    }


    function rummageAsString( pat ) {
        return JSON.stringify( rummage( pat ), undefined, 4 );
    }


    if ( !window.getMatchedCSSRules ) {
        alert( 'This bookmarklet requires Chrome or Safari' );
    } else {
        console.log( rummageAsString( prompt( "enter regex to search css rules for:" ) ) );
    }

}() );