'use strict';

var fs = require('fs');
var html2md = require('html-markdown');
var ghost = require('./wp2ghost.json');
var plugin = require('./wp2ghost_export_1523785447.json')

ghost.data.posts.forEach((post,index) => { 
    console.log(post.id);
    var idnum = post.id;

    // Covert html to markdown 
    post.markdown = html2md.html2mdFromString(post.markdown);
    
    // Get image from wp ghost export file
    var pickedobj = plugin.data.posts.find(o => o.id === idnum);
    post.image = pickedobj.image;
});

let data = JSON.stringify(ghost);  
fs.writeFileSync('ghost_migration.json', data);  