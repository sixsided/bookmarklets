#!/usr/local/bin/node
var fs = require('fs');
var uglifyjs = require('uglify-js');


fs.readdirSync( './src' ).forEach( function( srcFileName, i, a ) {
	var inJs = fs.readFileSync( './src/' + srcFileName, {encoding: 'utf8'} );
	var minJs = uglifyjs.minify( inJs ).code;
	var outJs = `javascript:${encodeURI( minJs )}`;
	fs.writeFileSync( './dist/' + srcFileName, outJs );
	
	console.log(' + ',  'src/' + srcFileName, inJs.length + 'b', 
				' -> ', 'dist/' + srcFileName, outJs.length + 'b');
} );
