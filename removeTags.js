var fs = require('fs')
const Entities = require('html-entities').AllHtmlEntities;

const entities = new Entities();

var striptags = require('striptags');
 
fs.readFile('Document.htm', 'utf8', function (err, data) {
            if (err) throw err;
            //Do your processing, MD5, send a satellite to the moon, etc.
            
			// striptags(data, '<strong>');
			// striptags(data, ['a']);
			// striptags(data, [], '\n');
            fs.writeFile ('Document.txt', entities.decode(striptags(data)), function(err) {
                if (err) throw err;
                console.log('complete');
            });
        });
 
