#!/usr/local/bin/node
var fs = require('fs');
var bookmarkletify = require( 'bookmarkletify' );
var minify = require('uglify-js').minify;

fs.readdirSync( './src' ).forEach( function( srcFileName, i, a ) {
	var inJs = fs.readFileSync( './src/' + srcFileName, {encoding: 'utf8'} );
	var minJs = minify( inJs, { fromString: true } ).code;
	var outJs = bookmarkletify( minJs );
	fs.writeFileSync( './dist/' + srcFileName, outJs );
	
	console.log(' + ',  'src/' + srcFileName, inJs.length + 'b', 
				' -> ', 'dst/' + srcFileName, outJs.length + 'b');
} );
