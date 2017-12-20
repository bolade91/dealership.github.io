var express=require("express"),
    /*mysql=require("mysql"),*/
	bodyParser=require("body-parser")

/*var connection = mysql.createConnection({
					host: 'localhost',
					user: 'root',
					password: 'teddybravoç&',
					database: 'sample'
				});

connection.connect(function(err){
	if(err)
		throw err;
	console.log("Database connected");
});*/

app=express();
var port=process.env.PORT || 3220;
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

var candidats = []

app.get("/", function(req, res){
	res.render("index");
});

app.get("/aboutus", function(req, res){
	res.render("about-us");
}); 

app.get("/gallery", function(req, res){
	res.render("showroom");
});

app.get("/rent", function(req, res){
	res.render("rent");
});

app.get("/sell", function(req, res){
	res.render("sell");
});

app.get("/search", function(req, res){
	res.render("advance-search");
});

app.get("/singlecar", function(req, res){
	res.render("single-car");
});

app.get("/contact", function(req, res){
	res.render("contact");
});

app.listen(3220, "localhost", function(){
	console.log("server listening on port "+port);
});

