var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-One': { 
    title :'Article One | sri ',
    heading : 'Article one',
    date : 'August 14 2017',
    content : `
             <p>
                    This is new content for article one html page,This is new content for article one html page,This is new content for article one html page,
            </p>
            
            <p>This is new content for article one html page,This is new content for article one html page,This is new content for article one html page
            </p>
            
            <p>
                    This is new content for article one html page,This is new content for article one html page,This is new content for article one html page, 
            </p>`},
    'article-Two': {
    title :'Article Two | sri ',
    heading : 'Article Two',
    date : 'August 14 2017',
    content : `
             <p>
                    This is new content for article two html page,This is new content for article one html page,This is new content for article one html page,
            </p>
            
            <p>This is new content for article two  html page,This is new content for article one html page,This is new content for article one html page
            </p>
            
            <p>
                    This is new content for article two html page,This is new content for article one html page,This is new content for article one html page, 
            </p>`
    },
    'article-Three': {
    title :'Article Three  | sri ',
    heading : 'Article one',
    date : 'August 14 2017',
    content : `
             <p>
                    This is new content for article three  html page,This is new content for article one html page,This is new content for article one html page,
            </p>
            
            <p>This is new content for article three html page,This is new content for article one html page,This is new content for article one html page
            </p>
            
            <p>
                    This is new content for article three html page,This is new content for article one html page,This is new content for article one html page, 
            </p>`
    },
   
};

function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name = "viewport" content = "width=device-width,intial-scale = 1" />
            <link href="/ui/style.css" rel="stylesheet" />  
        </head>
    <body>
        <div class = "container">
            <div>
                <a href = "/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
               ${content}
            </div>
        </div>
    </body>

    </html>


`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    //articleName ==article-one
    //articles[articleName] ==  {} content objecct for article one
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
}); 