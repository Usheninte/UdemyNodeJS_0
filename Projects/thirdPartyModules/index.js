var parser = require('node-markdown');

var html = parser.Markdown("Using **markdown** helps you focus on writing JS, not on _markup_");

console.log(html);