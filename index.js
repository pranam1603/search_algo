const search = document.getElementById("Search")
const space = document.getElementById("kd")

const arr = [
	{
		"id": "FD0001",
		"veg": true,
		"category_id": "CM",
		"name": "Aam Ras",
		"image": "cm015.jpg",
		"calories": 112,
		"servings": "katori"
	},
	{
		"id": "FD0002",
		"veg": true,
		"category_id": "CM",
		"name": "Almond Icecream",
		"image": "cm015.jpg",
		"calories": 214,
		"servings": "scoop"
	},
	{
		"id": "FD0003",
		"veg": true,
		"category_id": "CM",
		"name": "Almond Milkshake",
		"image": "cm015.jpg",
		"calories": 232.8,
		"servings": "glass"
	},
	{
		"id": "FD0004",
		"veg": true,
		"category_id": "CM",
		"name": "Almonds",
		"image": "cm015.jpg",
		"calories": 655,
		"servings": "katori"
	},
	{
		"id": "FD0005",
		"veg": true,
		"category_id": "CM",
		"name": "Aloo Chaat",
		"image": "cm015.jpg",
		"calories": 98.6,
		"servings": "katori"
	},
	{
		"id": "FD0006",
		"veg": true,
		"category_id": "CM",
		"name": "Aloo Gobhi",
		"image": "cm015.jpg",
		"calories": 164.6,
		"servings": "katori"
	},
	{
		"id": "FD0007",
		"veg": true,
		"category_id": "CM",
		"name": "Aloo Mutter",
		"image": "cm015.jpg",
		"calories": 144.6,
		"servings": "katori"
	},
	{
		"id": "FD0008",
		"veg": true,
		"category_id": "CM",
		"name": "Aloo Palak",
		"image": "cm015.jpg",
		"calories": 108.6,
		"servings": "katori"
	},
	{
		"id": "FD0009",
		"veg": true,
		"category_id": "CM",
		"name": "Aloo Paratha",
		"image": "cm015.jpg",
		"calories": 290,
		"servings": "piece"
	},
	{
		"id": "FD0010",
		"veg": true,
		"category_id": "CM",
		"name": "Aloo Patty",
		"image": "cm015.jpg",
		"calories": 10.5,
		"servings": "piece"
	},
	{
		"id": "FD0011",
		"veg": true,
		"category_id": "CM",
		"name": "Aloo Tikki",
		"image": "cm015.jpg",
		"calories": 97,
		"servings": "piece"
	},
	{
		"id": "FD0012",
		"veg": true,
		"category_id": "CM",
		"name": "American Chopsuey",
		"image": "cm015.jpg",
		"calories": 373,
		"servings": "bowl"
	},
	{
		"id": "FD0013",
		"veg": true,
		"category_id": "CM",
		"name": "Amla",
		"image": "cm015.jpg",
		"calories": 58,
		"servings": "katori"
	},
	{
		"id": "FD0014",
		"veg": true,
		"category_id": "CM",
		"name": "Anjir Icecream",
		"image": "cm015.jpg",
		"calories": 240,
		"servings": "scoop"
	},
	{
		"id": "FD0015",
		"veg": true,
		"category_id": "CM",
		"name": "Anjir Milkshake",
		"image": "cm015.jpg",
		"calories": 268.8,
		"servings": "glass"
	},
	{
		"id": "FD0016",
		"veg": true,
		"category_id": "CM",
		"name": "Anjir Nuts",
		"image": "cm015.jpg",
		"calories": 550,
		"servings": "katori"
	},
	{
		"id": "FD0017",
		"veg": true,
		"category_id": "CM",
		"name": "Appam",
		"image": "cm015.jpg",
		"calories": 141.5,
		"servings": "piece"
	},
	{
		"id": "FD0018",
		"veg": true,
		"category_id": "CM",
		"name": "Apple",
		"image": "cm015.jpg",
		"calories": 59,
		"servings": "piece"
	},
	{
		"id": "FD0019",
		"veg": true,
		"category_id": "CM",
		"name": "Apple Milkshake",
		"image": "cm015.jpg",
		"calories": 200,
		"servings": "glass"
	},
	{
		"id": "FD0020",
		"veg": true,
		"category_id": "CM",
		"name": "Apple Milkshake With Icecream",
		"image": "cm015.jpg",
		"calories": 293.6,
		"servings": "glass"
	},
	{
		"id": "FD0021",
		"veg": true,
		"category_id": "CM",
		"name": "Apple Pie",
		"image": "cm015.jpg",
		"calories": 217,
		"servings": "piece"
	},
	{
		"id": "FD0022",
		"veg": true,
		"category_id": "CM",
		"name": "Avocado",
		"image": "cm015.jpg",
		"calories": 144,
		"servings": "katori"
	},
	{
		"id": "FD0023",
		"veg": true,
		"category_id": "CM",
		"name": "Badam Pista Icecream",
		"image": "cm015.jpg",
		"calories": 214,
		"servings": "scoop"
	},
	{
		"id": "FD0024",
		"veg": true,
		"category_id": "CM",
		"name": "Bajra Bhakri",
		"image": "cm015.jpg",
		"calories": 216,
		"servings": "piece"
	},
	{
		"id": "FD0025",
		"veg": true,
		"category_id": "CM",
		"name": "Bajra Khakhra",
		"image": "cm015.jpg",
		"calories": 5.4,
		"servings": "piece"
	},
	{
		"id": "FD0026",
		"veg": true,
		"category_id": "CM",
		"name": "Bajra Roti",
		"image": "cm015.jpg",
		"calories": 108,
		"servings": "piece"
	},
	{
		"id": "FD0027",
		"veg": true,
		"category_id": "CM",
		"name": "Baked Corns",
		"image": "cm015.jpg",
		"calories": 79.3,
		"servings": "katori"
	},
	{
		"id": "FD0028",
		"veg": true,
		"category_id": "CM",
		"name": "Baked Potato",
		"image": "cm015.jpg",
		"calories": 116.5,
		"servings": "piece"
	},
	{
		"id": "FD0029",
		"veg": true,
		"category_id": "CM",
		"name": "Baked Sev",
		"image": "cm015.jpg",
		"calories": 452,
		"servings": "katori"
	},
	{
		"id": "FD0030",
		"veg": true,
		"category_id": "CM",
		"name": "Baked Soya Puri",
		"image": "cm015.jpg",
		"calories": 64,
		"servings": "piece"
	},
	{
		"id": "FD0031",
		"veg": true,
		"category_id": "CM",
		"name": "Baked Stuffed Potato",
		"image": "cm015.jpg",
		"calories": 123,
		"servings": "piece"
	},
	{
		"id": "FD0032",
		"veg": true,
		"category_id": "CM",
		"name": "Banana",
		"image": "cm015.jpg",
		"calories": 116,
		"servings": "katori"
	},
	{
		"id": "FD0033",
		"veg": true,
		"category_id": "CM",
		"name": "Banana Custard",
		"image": "cm015.jpg",
		"calories": 212.6,
		"servings": "katori"
	},
	{
		"id": "FD0034",
		"veg": true,
		"category_id": "CM",
		"name": "Banana Milkshake",
		"image": "cm015.jpg",
		"calories": 248,
		"servings": "glass"
	},
	{
		"id": "FD0035",
		"veg": true,
		"category_id": "CM",
		"name": "Banana Raita",
		"image": "cm015.jpg",
		"calories": 171,
		"servings": "katori"
	},
	{
		"id": "FD0036",
		"veg": true,
		"category_id": "CM",
		"name": "Banana Wafers",
		"image": "cm015.jpg",
		"calories": 210,
		"servings": "katori"
	},
	{
		"id": "FD0037",
		"veg": true,
		"category_id": "CM",
		"name": "Banana Walnut Cake",
		"image": "cm015.jpg",
		"calories": 421,
		"servings": "piece"
	},
	{
		"id": "FD0038",
		"veg": true,
		"category_id": "CM",
		"name": "Batatawada",
		"image": "cm015.jpg",
		"calories": 160,
		"servings": "piece"
	},
	{
		"id": "FD0039",
		"veg": true,
		"category_id": "CM",
		"name": "Beer",
		"image": "cm015.jpg",
		"calories": 98,
		"servings": "glass"
	},
	{
		"id": "FD0040",
		"veg": true,
		"category_id": "CM",
		"name": "Beetlenut / Supari",
		"image": "cm015.jpg",
		"calories": 249,
		"servings": "piece"
	},
	{
		"id": "FD0041",
		"veg": true,
		"category_id": "CM",
		"name": "Beetroot",
		"image": "cm015.jpg",
		"calories": 43,
		"servings": "katori"
	},
	{
		"id": "FD0042",
		"veg": true,
		"category_id": "CM",
		"name": "Bengali Sweet",
		"image": "cm015.jpg",
		"calories": 290,
		"servings": "piece"
	},
	{
		"id": "FD0043",
		"veg": true,
		"category_id": "CM",
		"name": "Besan Ladoo",
		"image": "cm015.jpg",
		"calories": 195,
		"servings": "piece"
	},
	{
		"id": "FD0044",
		"veg": true,
		"category_id": "CM",
		"name": "Bhatura",
		"image": "cm015.jpg",
		"calories": 235,
		"servings": "piece"
	},
	{
		"id": "FD0045",
		"veg": true,
		"category_id": "CM",
		"name": "Bhindi",
		"image": "cm015.jpg",
		"calories": 79.3,
		"servings": "katori"
	},
	{
		"id": "FD0046",
		"veg": true,
		"category_id": "CM",
		"name": "Big Puri",
		"image": "cm015.jpg",
		"calories": 96,
		"servings": "piece"
	},
	{
		"id": "FD0047",
		"veg": true,
		"category_id": "CM",
		"name": "Big White Bread",
		"image": "cm015.jpg",
		"calories": 73.5,
		"servings": "piece"
	},
	{
		"id": "FD0048",
		"veg": true,
		"category_id": "CM",
		"name": "Black Coffee",
		"image": "cm015.jpg",
		"calories": 40,
		"servings": "cup"
	},
	{
		"id": "FD0049",
		"veg": true,
		"category_id": "CM",
		"name": "Black Currant Icecream",
		"image": "cm015.jpg",
		"calories": 214,
		"servings": "scoop"
	},
	{
		"id": "FD0050",
		"veg": true,
		"category_id": "CM",
		"name": "Black Currants",
		"image": "cm015.jpg",
		"calories": 316,
		"servings": "katori"
	},
	{
		"id": "FD0051",
		"veg": true,
		"category_id": "CM",
		"name": "Black Forest Cake",
		"image": "cm015.jpg",
		"calories": 318,
		"servings": "piece"
	},
	{
		"id": "FD0052",
		"veg": true,
		"category_id": "CM",
		"name": "Black Magic Cake",
		"image": "cm015.jpg",
		"calories": 295,
		"servings": "piece"
	},
	{
		"id": "FD0053",
		"veg": true,
		"category_id": "CM",
		"name": "Black Tea",
		"image": "cm015.jpg",
		"calories": 40,
		"servings": "cup"
	},
	{
		"id": "FD0054",
		"veg": true,
		"category_id": "CM",
		"name": "Blue Grapes",
		"image": "cm015.jpg",
		"calories": 58,
		"servings": "katori"
	},
	{
		"id": "FD0055",
		"veg": true,
		"category_id": "CM",
		"name": "Boiled Chana",
		"image": "cm015.jpg",
		"calories": 72,
		"servings": "katori"
	},
	{
		"id": "FD0056",
		"veg": true,
		"category_id": "CM",
		"name": "Boiled Chana Dal",
		"image": "cm015.jpg",
		"calories": 74,
		"servings": "katori"
	},
	{
		"id": "FD0057",
		"veg": false,
		"category_id": "CM",
		"name": "Boiled Egg",
		"image": "cm015.jpg",
		"calories": 85,
		"servings": "piece"
	},
	{
		"id": "FD0058",
		"veg": true,
		"category_id": "CM",
		"name": "Boiled Masoor",
		"image": "cm015.jpg",
		"calories": 68,
		"servings": "katori"
	},
	{
		"id": "FD0059",
		"veg": true,
		"category_id": "CM",
		"name": "Boiled Moong Dal",
		"image": "cm015.jpg",
		"calories": 69.3,
		"servings": "katori"
	},
	{
		"id": "FD0060",
		"veg": true,
		"category_id": "CM",
		"name": "Boiled Moth",
		"image": "cm015.jpg",
		"calories": 66,
		"servings": "katori"
	},
	{
		"id": "FD0061",
		"veg": true,
		"category_id": "CM",
		"name": "Boiled Noodles",
		"image": "cm015.jpg",
		"calories": 145,
		"servings": "bowl"
	},
	{
		"id": "FD0062",
		"veg": true,
		"category_id": "CM",
		"name": "Boiled Rajmah",
		"image": "cm015.jpg",
		"calories": 68.6,
		"servings": "katori"
	},
	{
		"id": "FD0063",
		"veg": true,
		"category_id": "CM",
		"name": "Boiled Soya Been",
		"image": "cm015.jpg",
		"calories": 86,
		"servings": "katori"
	},
	{
		"id": "FD0064",
		"veg": true,
		"category_id": "CM",
		"name": "Boiled Tur Dal",
		"image": "cm015.jpg",
		"calories": 66.6,
		"servings": "katori"
	},
	{
		"id": "FD0065",
		"veg": false,
		"category_id": "CM",
		"name": "Bombay Duck Curry",
		"image": "cm015.jpg",
		"calories": 396.6,
		"servings": "katori"
	},
	{
		"id": "FD0066",
		"veg": false,
		"category_id": "CM",
		"name": "Bombay Duck Fry",
		"image": "cm015.jpg",
		"calories": 94.5,
		"servings": "piece"
	},
	{
		"id": "FD0067",
		"veg": true,
		"category_id": "CM",
		"name": "Boondi Raita",
		"image": "cm015.jpg",
		"calories": 163,
		"servings": "katori"
	},
	{
		"id": "FD0068",
		"veg": true,
		"category_id": "CM",
		"name": "Bourbon Biscuit",
		"image": "cm015.jpg",
		"calories": 63,
		"servings": "piece"
	},
	{
		"id": "FD0069",
		"veg": true,
		"category_id": "CM",
		"name": "Brandy",
		"image": "cm015.jpg",
		"calories": 198,
		"servings": "glass"
	},
	{
		"id": "FD0070",
		"veg": true,
		"category_id": "CM",
		"name": "Bread & Butter Pudding",
		"image": "cm015.jpg",
		"calories": 21,
		"servings": "katori"
	},
	{
		"id": "FD0071",
		"veg": true,
		"category_id": "CM",
		"name": "Bread Butter",
		"image": "cm015.jpg",
		"calories": 91,
		"servings": "slice"
	},
	{
		"id": "FD0072",
		"veg": true,
		"category_id": "CM",
		"name": "Bread Jam",
		"image": "cm015.jpg",
		"calories": 86.5,
		"servings": "slice"
	},
	{
		"id": "FD0073",
		"veg": true,
		"category_id": "CM",
		"name": "Bread Pudding",
		"image": "cm015.jpg",
		"calories": 133,
		"servings": "katori"
	},
	{
		"id": "FD0074",
		"veg": true,
		"category_id": "CM",
		"name": "Bread Roll",
		"image": "cm015.jpg",
		"calories": 263,
		"servings": "piece"
	},
	{
		"id": "FD0075",
		"veg": true,
		"category_id": "CM",
		"name": "Bread Stick",
		"image": "cm015.jpg",
		"calories": 100,
		"servings": "piece"
	},
	{
		"id": "FD0076",
		"veg": true,
		"category_id": "CM",
		"name": "Bread Upma",
		"image": "cm015.jpg",
		"calories": 117.3,
		"servings": "katori"
	},
	{
		"id": "FD0077",
		"veg": true,
		"category_id": "CM",
		"name": "Brinjal",
		"image": "cm015.jpg",
		"calories": 68.6,
		"servings": "katori"
	},
	{
		"id": "FD0078",
		"veg": true,
		"category_id": "CM",
		"name": "Brinjal Bharta",
		"image": "cm015.jpg",
		"calories": 106.6,
		"servings": "katori"
	},
	{
		"id": "FD0079",
		"veg": true,
		"category_id": "CM",
		"name": "Brown Bread Butter",
		"image": "cm015.jpg",
		"calories": 66.5,
		"servings": "slice"
	},
	{
		"id": "FD0080",
		"veg": true,
		"category_id": "CM",
		"name": "Bun Bread",
		"image": "cm015.jpg",
		"calories": 150,
		"servings": "piece"
	},
	{
		"id": "FD0081",
		"veg": true,
		"category_id": "CM",
		"name": "Boondi Ladoo",
		"image": "cm015.jpg",
		"calories": 185,
		"servings": "piece"
	},
	{
		"id": "FD0082",
		"veg": true,
		"category_id": "CM",
		"name": "Barfi",
		"image": "cm015.jpg",
		"calories": 124.5,
		"servings": "piece"
	},
	{
		"id": "FD0083",
		"veg": false,
		"category_id": "CM",
		"name": "Butter Chicken",
		"image": "cm015.jpg",
		"calories": 195.5,
		"servings": "katori"
	},
	{
		"id": "FD0084",
		"veg": true,
		"category_id": "CM",
		"name": "Butter Cookies",
		"image": "cm015.jpg",
		"calories": 99.5,
		"servings": "piece"
	},
	{
		"id": "FD0085",
		"veg": true,
		"category_id": "CM",
		"name": "Butter Dosa Plain",
		"image": "cm015.jpg",
		"calories": 145,
		"servings": "piece"
	},
	{
		"id": "FD0086",
		"veg": true,
		"category_id": "CM",
		"name": "Butter Idli",
		"image": "cm015.jpg",
		"calories": 90,
		"servings": "piece"
	},
	{
		"id": "FD0087",
		"veg": false,
		"category_id": "CM",
		"name": "Butter Milk",
		"image": "cm015.jpg",
		"calories": 30,
		"servings": "glass"
	},
	{
		"id": "FD0088",
		"veg": true,
		"category_id": "CM",
		"name": "Butter Naan",
		"image": "cm015.jpg",
		"calories": 235,
		"servings": "piece"
	},
	{
		"id": "FD0089",
		"veg": true,
		"category_id": "CM",
		"name": "Butter Toast",
		"image": "cm015.jpg",
		"calories": 85,
		"servings": "piece"
	},
	{
		"id": "FD0090",
		"veg": true,
		"category_id": "CM",
		"name": "Butter Uttapam",
		"image": "cm015.jpg",
		"calories": 200,
		"servings": "piece"
	},
	{
		"id": "FD0091",
		"veg": false,
		"category_id": "CM",
		"name": "Buttersotch Icecream",
		"image": "cm015.jpg",
		"calories": 215,
		"servings": "scoop"
	},
	{
		"id": "FD0092",
		"veg": false,
		"category_id": "CM",
		"name": "Chutney & Butter Sandwich",
		"image": "cm015.jpg",
		"calories": 97,
		"servings": "piece"
	},
	{
		"id": "FD0093",
		"veg": true,
		"category_id": "CM",
		"name": "Citra",
		"image": "cm015.jpg",
		"calories": 111,
		"servings": "bottle"
	},
	{
		"id": "FD0094",
		"veg": true,
		"category_id": "CM",
		"name": "Citra",
		"image": "cm015.jpg",
		"calories": 124,
		"servings": "can"
	},
	{
		"id": "FD0095",
		"veg": true,
		"category_id": "CM",
		"name": "Coca Cola",
		"image": "cm015.jpg",
		"calories": 131,
		"servings": "bottle"
	},
	{
		"id": "FD0096",
		"veg": false,
		"category_id": "CM",
		"name": "Cocktail",
		"image": "cm015.jpg",
		"calories": 172,
		"servings": "glass"
	},
	{
		"id": "FD0097",
		"veg": true,
		"category_id": "CM",
		"name": "Coconut Barfi",
		"image": "cm015.jpg",
		"calories": 100,
		"servings": "piece"
	},
	{
		"id": "FD0098",
		"veg": true,
		"category_id": "CM",
		"name": "Coconut Chikki",
		"image": "cm015.jpg",
		"calories": 150,
		"servings": "piece"
	},
	{
		"id": "FD0099",
		"veg": true,
		"category_id": "CM",
		"name": "Coconut Chutney",
		"image": "cm015.jpg",
		"calories": 30,
		"servings": "spoon"
	},
	{
		"id": "FD0100",
		"veg": false,
		"category_id": "CM",
		"name": "Coconut Milk",
		"image": "cm015.jpg",
		"calories": 2.15,
		"servings": "glass"
	},
	{
		"id": "FD0101",
		"veg": true,
		"category_id": "CM",
		"name": "Coconut Raita",
		"image": "cm015.jpg",
		"calories": 80,
		"servings": "katori"
	},
	{
		"id": "FD0102",
		"veg": true,
		"category_id": "CM",
		"name": "Coconut Rice",
		"image": "cm015.jpg",
		"calories": 368,
		"servings": "plate"
	},
	{
		"id": "FD0103",
		"veg": true,
		"category_id": "CM",
		"name": "Coconut Water",
		"image": "cm015.jpg",
		"calories": 48,
		"servings": "glass"
	},
	{
		"id": "FD0104",
		"veg": true,
		"category_id": "CM",
		"name": "Coffee",
		"image": "cm015.jpg",
		"calories": 98,
		"servings": "cup"
	},
	{
		"id": "FD0105",
		"veg": true,
		"category_id": "CM",
		"name": "Coke",
		"image": "cm015.jpg",
		"calories": 144,
		"servings": "can"
	},
	{
		"id": "FD0106",
		"veg": true,
		"category_id": "CM",
		"name": "Cold Coffee",
		"image": "cm015.jpg",
		"calories": 168,
		"servings": "glass"
	},
	{
		"id": "FD0107",
		"veg": true,
		"category_id": "CM",
		"name": "Cold Coffe with Icecream",
		"image": "cm015.jpg",
		"calories": 227.2,
		"servings": "glass"
	},
	{
		"id": "FD0108",
		"veg": true,
		"category_id": "CM",
		"name": "Colocasia Leaves",
		"image": "cm015.jpg",
		"calories": 133.3,
		"servings": "katori"
	},
	{
		"id": "FD0109",
		"veg": true,
		"category_id": "CM",
		"name": "Condensed Milk",
		"image": "cm015.jpg",
		"calories": 50,
		"servings": "spoon"
	},
	{
		"id": "FD0110",
		"veg": true,
		"category_id": "CM",
		"name": "Cooked Chana Dal",
		"image": "cm015.jpg",
		"calories": 107.3,
		"servings": "katori"
	},
	{
		"id": "FD0111",
		"veg": true,
		"category_id": "CM",
		"name": "Cooked Banana",
		"image": "cm015.jpg",
		"calories": 134.6,
		"servings": "katori"
	},
	{
		"id": "FD0112",
		"veg": true,
		"category_id": "CM",
		"name": "Cooked Chana",
		"image": "cm015.jpg",
		"calories": 105.3,
		"servings": "katori"
	},
	{
		"id": "FD0113",
		"veg": true,
		"category_id": "CM",
		"name": "Cooked Karela",
		"image": "cm015.jpg",
		"calories": 94,
		"servings": "katori"
	},
	{
		"id": "FD0114",
		"veg": true,
		"category_id": "CM",
		"name": "Cooked Moong Dal",
		"image": "cm015.jpg",
		"calories": 102.6,
		"servings": "katori"
	},
	{
		"id": "FD0115",
		"veg": true,
		"category_id": "CM",
		"name": "Cooked Moong Dry",
		"image": "cm015.jpg",
		"calories": 100,
		"servings": "katori"
	},
	{
		"id": "FD0116",
		"veg": true,
		"category_id": "CM",
		"name": "Cooked Mothbeans",
		"image": "cm015.jpg",
		"calories": 99.3,
		"servings": "katori"
	},
	{
		"id": "FD0117",
		"veg": true,
		"category_id": "CM",
		"name": "Cooked Soya Bean",
		"image": "cm015.jpg",
		"calories": 120,
		"servings": "katori"
	},
	{
		"id": "FD0118",
		"veg": true,
		"category_id": "CM",
		"name": "Cooked Tur Dal",
		"image": "cm015.jpg",
		"calories": 100,
		"servings": "katori"
	},
	{
		"id": "FD0119",
		"veg": true,
		"category_id": "CM",
		"name": "Coriander Chutney with Coconut",
		"image": "cm015.jpg",
		"calories": 16.6,
		"servings": "spoon"
	},
	{
		"id": "FD0120",
		"veg": true,
		"category_id": "CM",
		"name": "Coriander Chutney with Groudnut",
		"image": "cm015.jpg",
		"calories": 11.6,
		"servings": "spoon"
	},
	{
		"id": "FD0121",
		"veg": true,
		"category_id": "CM",
		"name": "Coriander Leaves",
		"image": "cm015.jpg",
		"calories": 44,
		"servings": "katori"
	},
	{
		"id": "FD0122",
		"veg": true,
		"category_id": "CM",
		"name": "Corn Croquettes",
		"image": "cm015.jpg",
		"calories": 183.5,
		"servings": "piece"
	},
	{
		"id": "FD0123",
		"veg": true,
		"category_id": "CM",
		"name": "Corn Flakes with milk",
		"image": "cm015.jpg",
		"calories": 230,
		"servings": "katori"
	},
	{
		"id": "FD0124",
		"veg": true,
		"category_id": "CM",
		"name": "Corn Pizza",
		"image": "cm015.jpg",
		"calories": 642,
		"servings": "piece"
	},
	{
		"id": "FD0125",
		"veg": true,
		"category_id": "CM",
		"name": "Cornetto King Cone",
		"image": "cm015.jpg",
		"calories": 480,
		"servings": "piece"
	},
	{
		"id": "FD0126",
		"veg": true,
		"category_id": "CM",
		"name": "Cornflakes",
		"image": "cm015.jpg",
		"calories": 228,
		"servings": "katori"
	},
	{
		"id": "FD0127",
		"veg": true,
		"category_id": "CM",
		"name": "Cow Pea Leaves",
		"image": "cm015.jpg",
		"calories": 106,
		"servings": "katori"
	},
	{
		"id": "FD0128",
		"veg": true,
		"category_id": "CM",
		"name": "Cow's Milk",
		"image": "cm015.jpg",
		"calories": 134,
		"servings": "glass"
	},
	{
		"id": "FD0129",
		"veg": true,
		"category_id": "CM",
		"name": "Cream of Palak Soup",
		"image": "cm015.jpg",
		"calories": 115,
		"servings": "bowl"
	},
	{
		"id": "FD0130",
		"veg": true,
		"category_id": "CM",
		"name": "Cream of Peas Soup",
		"image": "cm015.jpg",
		"calories": 260,
		"servings": "bowl"
	},
	{
		"id": "FD0131",
		"veg": true,
		"category_id": "CM",
		"name": "Cream of Tomato Soup",
		"image": "cm015.jpg",
		"calories": 115,
		"servings": "bowl"
	},
	{
		"id": "FD0132",
		"veg": true,
		"category_id": "CM",
		"name": "Cucumber",
		"image": "cm015.jpg",
		"calories": 13,
		"servings": "katori"
	},
	{
		"id": "FD0133",
		"veg": true,
		"category_id": "CM",
		"name": "Cucumber Poha",
		"image": "cm015.jpg",
		"calories": 106.6,
		"servings": "katori"
	},
	{
		"id": "FD0134",
		"veg": true,
		"category_id": "CM",
		"name": "Cucumber Raita",
		"image": "cm015.jpg",
		"calories": 38,
		"servings": "katori"
	},
	{
		"id": "FD0135",
		"veg": true,
		"category_id": "CM",
		"name": "Curd",
		"image": "cm015.jpg",
		"calories": 60,
		"servings": "katori"
	},
	{
		"id": "FD0136",
		"veg": true,
		"category_id": "CM",
		"name": "Curd Rice",
		"image": "cm015.jpg",
		"calories": 190,
		"servings": "plate"
	},
	{
		"id": "FD0137",
		"veg": true,
		"category_id": "CM",
		"name": "Curry Leaves",
		"image": "cm015.jpg",
		"calories": 108,
		"servings": "katori"
	},
	{
		"id": "FD0138",
		"veg": true,
		"category_id": "CM",
		"name": "Custard",
		"image": "cm015.jpg",
		"calories": 106.6,
		"servings": "katori"
	},
	{
		"id": "FD0139",
		"veg": false,
		"category_id": "CM",
		"name": "Custard Egg",
		"image": "cm015.jpg",
		"calories": 174,
		"servings": "katori"
	},
	{
		"id": "FD0140",
		"veg": true,
		"category_id": "CM",
		"name": "Dahi Batata Puri",
		"image": "cm015.jpg",
		"calories": 565,
		"servings": "plate"
	},
	{
		"id": "FD0141",
		"veg": true,
		"category_id": "CM",
		"name": "Bahi Bhalle",
		"image": "cm015.jpg",
		"calories": 121,
		"servings": "plate"
	},
	{
		"id": "FD0142",
		"veg": true,
		"category_id": "CM",
		"name": "Dahi Wada",
		"image": "cm015.jpg",
		"calories": 300,
		"servings": "plate"
	},
	{
		"id": "FD0143",
		"veg": true,
		"category_id": "CM",
		"name": "Dahi Dhokli",
		"image": "cm015.jpg",
		"calories": 200,
		"servings": "plate"
	},
	{
		"id": "FD0144",
		"veg": true,
		"category_id": "CM",
		"name": "Dal Fried",
		"image": "cm015.jpg",
		"calories": 118,
		"servings": "katori"
	},
	{
		"id": "FD0145",
		"veg": true,
		"category_id": "CM",
		"name": "Dal Makhani",
		"image": "cm015.jpg",
		"calories": 130.6,
		"servings": "katori"
	},
	{
		"id": "FD0146",
		"veg": true,
		"category_id": "CM",
		"name": "Dal Soup",
		"image": "cm015.jpg",
		"calories": 150,
		"servings": "bowl"
	},
	{
		"id": "FD0147",
		"veg": true,
		"category_id": "CM",
		"name": "Dalia",
		"image": "cm015.jpg",
		"calories": 160.6,
		"servings": "katori"
	},
	{
		"id": "FD0148",
		"veg": true,
		"category_id": "CM",
		"name": "Date & Tamarind",
		"image": "cm015.jpg",
		"calories": 15,
		"servings": "spoon"
	},
	{
		"id": "FD0149",
		"veg": true,
		"category_id": "CM",
		"name": "Date & Walnut Cake",
		"image": "cm015.jpg",
		"calories": 412,
		"servings": "piece"
	},

	{
		"id": "FD0150",
		"veg": true,
		"category_id": "CM",
		"name": "Date Heart Biscuit",
		"image": "cm015.jpg",
		"calories": 35,
		"servings": "piece"
	},
	{
		"id": "FD0151",
		"veg": true,
		"category_id": "CM",
		"name": "Dates",
		"image": "cm015.jpg",
		"calories": 144,
		"servings": "katori"
	},
	{
		"id": "FD0152",
		"veg": true,
		"category_id": "CM",
		"name": "Dates Dried",
		"image": "cm015.jpg",
		"calories": 317,
		"servings": "katori"
	},
	{
		"id": "FD0153",
		"veg": true,
		"category_id": "CM",
		"name": "Delight",
		"image": "cm015.jpg",
		"calories": 140,
		"servings": "piece"
	},
	{
		"id": "FD0154",
		"veg": true,
		"category_id": "CM",
		"name": "Dhokla Sandwich",
		"image": "cm015.jpg",
		"calories": 49.27,
		"servings": "piece"
	},
	{
		"id": "FD0155",
		"veg": false,
		"category_id": "CM",
		"name": "Dried Chicken with Chilli",
		"image": "cm015.jpg",
		"calories": 253.3,
		"servings": "katori"
	},
	{
		"id": "FD0156",
		"veg": true,
		"category_id": "CM",
		"name": "Double Katchi Rati",
		"image": "cm015.jpg",
		"calories": 352,
		"servings": "piece"
	},
	{
		"id": "FD0157",
		"veg": true,
		"category_id": "CM",
		"name": "Drumstick",
		"image": "cm015.jpg",
		"calories": 142,
		"servings": "katori"
	},
	{
		"id": "FD0158",
		"veg": true,
		"category_id": "CM",
		"name": "Dry Paneer Tikka",
		"image": "cm015.jpg",
		"calories": 231.3,
		"servings": "katori"
	},
	{
		"id": "FD0159",
		"veg": true,
		"category_id": "CM",
		"name": "Dryfruit Milkshake",
		"image": "cm015.jpg",
		"calories": 280,
		"servings": "glass"
	},
	{
		"id": "FD0160",
		"veg": true,
		"category_id": "CM",
		"name": "Dryfruit Milkshake with Icecream",
		"image": "cm015.jpg",
		"calories": 384,
		"servings": "glass"
	},
	{
		"id": "FD0161",
		"veg": true,
		"category_id": "CM",
		"name": "Dudh Pak",
		"image": "cm015.jpg",
		"calories": 245.33,
		"servings": "katori"
	},
	{
		"id": "FD0162",
		"veg": true,
		"category_id": "CM",
		"name": "Dum Aloo",
		"image": "cm015.jpg",
		"calories": 184,
		"servings": "katori"
	},
	{
		"id": "FD0163",
		"veg": false,
		"category_id": "CM",
		"name": "Egg & Dal Cutlets",
		"image": "cm015.jpg",
		"calories": 140,
		"servings": "piece"
	},
	{
		"id": "FD0164",
		"veg": false,
		"category_id": "CM",
		"name": "Egg & Cutlets",
		"image": "cm015.jpg",
		"calories": 140,
		"servings": "piece"
	},
	{
		"id": "FD0165",
		"veg": false,
		"category_id": "CM",
		"name": "Egg & Dal Curry",
		"image": "cm015.jpg",
		"calories": 188,
		"servings": "katori"
	},
	{
		"id": "FD0166",
		"veg": false,
		"category_id": "CM",
		"name": "Egg Burji",
		"image": "cm015.jpg",
		"calories": 130,
		"servings": "katori"
	},
	{
		"id": "FD0167",
		"veg": false,
		"category_id": "CM",
		"name": "Egg Cheese Toast",
		"image": "cm015.jpg",
		"calories": 375,
		"servings": "piece"
	},
	{
		"id": "FD0168",
		"veg": false,
		"category_id": "CM",
		"name": "Egg Curry",
		"image": "cm015.jpg",
		"calories": 184.6,
		"servings": "katori"
	},
	{
		"id": "FD0169",
		"veg": false,
		"category_id": "CM",
		"name": "Egg Cutlets",
		"image": "cm015.jpg",
		"calories": 582,
		"servings": "piece"
	},
	{
		"id": "FD0170",
		"veg": false,
		"category_id": "CM",
		"name": "Egg Flip",
		"image": "cm015.jpg",
		"calories": 363,
		"servings": "glass"
	},
	{
		"id": "FD0171",
		"veg": false,
		"category_id": "CM",
		"name": "Egg Fried Rice",
		"image": "cm015.jpg",
		"calories": 373,
		"servings": "plate"
	},
	{
		"id": "FD0172",
		"veg": false,
		"category_id": "CM",
		"name": "Egg Masala",
		"image": "cm015.jpg",
		"calories": 120,
		"servings": "katori"
	},
	{
		"id": "FD0173",
		"veg": false,
		"category_id": "CM",
		"name": "Egg Molee",
		"image": "cm015.jpg",
		"calories": 279.3,
		"servings": "katori"
	},
	{
		"id": "FD0174",
		"veg": false,
		"category_id": "CM",
		"name": "Egg Omlette",
		"image": "cm015.jpg",
		"calories": 130,
		"servings": "piece"
	},
	{
		"id": "FD0175",
		"veg": false,
		"category_id": "CM",
		"name": "Egg Omlette Sandwich",
		"image": "cm015.jpg",
		"calories": 468,
		"servings": "plate"
	},
	{
		"id": "FD0176",
		"veg": false,
		"category_id": "CM",
		"name": "Egg on Potatoes",
		"image": "cm015.jpg",
		"calories": 254,
		"servings": "plate"
	},
	{
		"id": "FD0177",
		"veg": false,
		"category_id": "CM",
		"name": "Egg on Tomatoes",
		"image": "cm015.jpg",
		"calories": 129.3,
		"servings": "katori"
	},
	{
		"id": "FD0178",
		"veg": false,
		"category_id": "CM",
		"name": "Egg Pattice",
		"image": "cm015.jpg",
		"calories": 190,
		"servings": "piece"
	},
	{
		"id": "FD0179",
		"veg": false,
		"category_id": "CM",
		"name": "Egg Sandwich",
		"image": "cm015.jpg",
		"calories": 258,
		"servings": "plate"
	},
	{
		"id": "FD0180",
		"veg": false,
		"category_id": "CM",
		"name": "Egg Stew",
		"image": "cm015.jpg",
		"calories": 263,
		"servings": "bowl"
	},
	{
		"id": "FD0181",
		"veg": true,
		"category_id": "CM",
		"name": "Eggless Chocolate Cake",
		"image": "cm015.jpg",
		"calories": 177,
		"servings": "piece"
	},
	{
		"id": "FD0182",
		"veg": true,
		"category_id": "CM",
		"name": "Eggless Sponge Cake",
		"image": "cm015.jpg",
		"calories": 161,
		"servings": "piece"
	},
	{
		"id": "FD0183",
		"veg": true,
		"category_id": "CM",
		"name": "Elaichi Cream Biscuit",
		"image": "cm015.jpg",
		"calories": 50,
		"servings": "piece"
	},
	{
		"id": "FD0184",
		"veg": false,
		"category_id": "CM",
		"name": "Enchiladas",
		"image": "cm015.jpg",
		"calories": 433,
		"servings": "piece"
	},
	{
		"id": "FD0185",
		"veg": true,
		"category_id": "CM",
		"name": "Energee",
		"image": "cm015.jpg",
		"calories": 205,
		"servings": "glass"
	},
	{
		"id": "FD0186",
		"veg": true,
		"category_id": "CM",
		"name": "Falooda",
		"image": "cm015.jpg",
		"calories": 240,
		"servings": "glass"
	},
	{
		"id": "FD0187",
		"veg": true,
		"category_id": "CM",
		"name": "Fanta (bottle)",
		"image": "cm015.jpg",
		"calories": 141,
		"servings": "bottle"
	},
	{
		"id": "FD0188",
		"veg": true,
		"category_id": "CM",
		"name": "Fanta (can)",
		"image": "cm015.jpg",
		"calories": 155,
		"servings": "can"
	},
	{
		"id": "FD0189",
		"veg": true,
		"category_id": "CM",
		"name": "Fatless Chocolate Cake",
		"image": "cm015.jpg",
		"calories": 123,
		"servings": "piece"
	},
	{
		"id": "FD0190",
		"veg": true,
		"category_id": "CM",
		"name": "Fatless Sponge Cake",
		"image": "cm015.jpg",
		"calories": 107,
		"servings": "piece"
	},
	{
		"id": "FD0191",
		"veg": true,
		"category_id": "CM",
		"name": "Fenugreek Leaves",
		"image": "cm015.jpg",
		"calories": 116.6,
		"servings": "katori"
	},
	{
		"id": "FD0192",
		"veg": true,
		"category_id": "CM",
		"name": "Figs",
		"image": "cm015.jpg",
		"calories": 37,
		"servings": "katori"
	},
	{
		"id": "FD0193",
		"veg": true,
		"category_id": "CM",
		"name": "Finger Chips",
		"image": "cm015.jpg",
		"calories": 15,
		"servings": "piece"
	},
	{
		"id": "FD0194",
		"veg": false,
		"category_id": "CM",
		"name": "Fish Boiled",
		"image": "cm015.jpg",
		"calories": 113.3,
		"servings": "katori"
	},
	{
		"id": "FD0195",
		"veg": false,
		"category_id": "CM",
		"name": "Fish Curry",
		"image": "cm015.jpg",
		"calories": 323.3,
		"servings": "katori"
	},
	{
		"id": "FD0196",
		"veg": false,
		"category_id": "CM",
		"name": "Fish Cutlet",
		"image": "cm015.jpg",
		"calories": 222.5,
		"servings": "piece"
	},
	{
		"id": "FD0197",
		"veg": false,
		"category_id": "CM",
		"name": "Fish Fingers",
		"image": "cm015.jpg",
		"calories": 184,
		"servings": "plate"
	},
	{
		"id": "FD0198",
		"veg": false,
		"category_id": "CM",
		"name": "Fish Molee",
		"image": "cm015.jpg",
		"calories": 318.6,
		"servings": "katori"
	},
	{
		"id": "FD0199",
		"veg": false,
		"category_id": "CM",
		"name": "Fish Stew",
		"image": "cm015.jpg",
		"calories": 175.3,
		"servings": "katori"
	},
	{
		"id": "FD0200",
		"veg": false,
		"category_id": "CM",
		"name": "Fish Sukha",
		"image": "cm015.jpg",
		"calories": 249.3,
		"servings": "katori"
	},
	{
		"id": "FD0201",
		"veg": true,
		"category_id": "CM",
		"name": "French Beans, Peas & Onion",
		"image": "cm015.jpg",
		"calories": 69.3,
		"servings": "katori"
	},
	{
		"id": "FD0202",
		"veg": true,
		"category_id": "CM",
		"name": "French Fries",
		"image": "cm015.jpg",
		"calories": 140,
		"servings": "katori"
	},
	{
		"id": "FD0203",
		"veg": true,
		"category_id": "CM",
		"name": "French Toast",
		"image": "cm015.jpg",
		"calories": 232,
		"servings": "plate"
	},
	{
		"id": "FD0204",
		"veg": true,
		"category_id": "CM",
		"name": "Fried Brinjal",
		"image": "cm015.jpg",
		"calories": 114,
		"servings": "piece"
	},
	{
		"id": "FD0205",
		"veg": true,
		"category_id": "CM",
		"name": "Fried Chana Dal",
		"image": "cm015.jpg",
		"calories": 300,
		"servings": "katori"
	},
	{
		"id": "FD0206",
		"veg": false,
		"category_id": "CM",
		"name": "Fried Chicken",
		"image": "cm015.jpg",
		"calories": 443,
		"servings": "piece"
	},
	{
		"id": "FD0207",
		"veg": true,
		"category_id": "CM",
		"name": "Fried Chivda",
		"image": "cm015.jpg",
		"calories": 590,
		"servings": "katori"
	},
	{
		"id": "FD0208",
		"veg": false,
		"category_id": "CM",
		"name": "Fried Egg",
		"image": "cm015.jpg",
		"calories": 175,
		"servings": "piece"
	},
	{
		"id": "FD0209",
		"veg": false,
		"category_id": "CM",
		"name": "Fried Fish",
		"image": "cm015.jpg",
		"calories": 363,
		"servings": "piece"
	},
	{
		"id": "FD0210",
		"veg": true,
		"category_id": "CM",
		"name": "Fried Tricolor Sandwich",
		"image": "cm015.jpg",
		"calories": 503,
		"servings": "piece"
	},
	{
		"id": "FD0211",
		"veg": true,
		"category_id": "CM",
		"name": "Fruit Bread",
		"image": "cm015.jpg",
		"calories": 70,
		"servings": "piece"
	},
	{
		"id": "FD0212",
		"veg": true,
		"category_id": "CM",
		"name": "Fruit Cake",
		"image": "cm015.jpg",
		"calories": 304,
		"servings": "piece"
	},
	{
		"id": "FD0213",
		"veg": true,
		"category_id": "CM",
		"name": "Fruit Chat",
		"image": "cm015.jpg",
		"calories": 53.2,
		"servings": "katori"
	},
	{
		"id": "FD0214",
		"veg": true,
		"category_id": "CM",
		"name": "Fruit Custard",
		"image": "cm015.jpg",
		"calories": 114.6,
		"servings": "katori"
	},
	{
		"id": "FD0215",
		"veg": true,
		"category_id": "CM",
		"name": "Fruit Salad",
		"image": "cm015.jpg",
		"calories": 150,
		"servings": "katori"
	},
	{
		"id": "FD0216",
		"veg": true,
		"category_id": "CM",
		"name": "Fruit Salad with Custard",
		"image": "cm015.jpg",
		"calories": 158,
		"servings": "katori"
	},
	{
		"id": "FD0217",
		"veg": true,
		"category_id": "CM",
		"name": "Fruit Triffle",
		"image": "cm015.jpg",
		"calories": 330,
		"servings": "piece"
	},
	{
		"id": "FD0218",
		"veg": true,
		"category_id": "CM",
		"name": "Fry Idli",
		"image": "cm015.jpg",
		"calories": 100,
		"servings": "piece"
	},
	{
		"id": "FD0219",
		"veg": true,
		"category_id": "CM",
		"name": "Garlic Bread Stick",
		"image": "cm015.jpg",
		"calories": 15,
		"servings": "piece"
	},
	{
		"id": "FD0220",
		"veg": true,
		"category_id": "CM",
		"name": "Gathia",
		"image": "cm015.jpg",
		"calories": 260,
		"servings": "katori"
	},
	{
		"id": "FD0221",
		"veg": true,
		"category_id": "CM",
		"name": "Gems",
		"image": "cm015.jpg",
		"calories": 70,
		"servings": "piece"
	},
	{
		"id": "FD0222",
		"veg": true,
		"category_id": "CM",
		"name": "Ghee Dosa",
		"image": "cm015.jpg",
		"calories": 155,
		"servings": "piece"
	},
	{
		"id": "FD0223",
		"veg": true,
		"category_id": "CM",
		"name": "Ghee Uttapam",
		"image": "cm015.jpg",
		"calories": 210,
		"servings": "piece"
	},
	{
		"id": "FD0224",
		"veg": true,
		"category_id": "CM",
		"name": "Gin",
		"image": "cm015.jpg",
		"calories": 107,
		"servings": "peg"
	},
	{
		"id": "FD0225",
		"veg": true,
		"category_id": "CM",
		"name": "Gingely Seed Til",
		"image": "cm015.jpg",
		"calories": 563,
		"servings": "katori"
	},
	{
		"id": "FD0226",
		"veg": true,
		"category_id": "CM",
		"name": "Ginger Biscuit",
		"image": "cm015.jpg",
		"calories": 25,
		"servings": "piece"
	},
	{
		"id": "FD0227",
		"veg": true,
		"category_id": "CM",
		"name": "Gingerale",
		"image": "cm015.jpg",
		"calories": 40,
		"servings": "glass"
	},
	{
		"id": "FD0228",
		"veg": true,
		"category_id": "CM",
		"name": "Glucose Biscuit",
		"image": "cm015.jpg",
		"calories": 33.5,
		"servings": "piece"
	},
	{
		"id": "FD0229",
		"veg": true,
		"category_id": "CM",
		"name": "Gobhi Parataha",
		"image": "cm015.jpg",
		"calories": 270,
		"servings": "piece"
	},
	{
		"id": "FD0230",
		"veg": true,
		"category_id": "CM",
		"name": "Good Day Biscuit",
		"image": "cm015.jpg",
		"calories": 50,
		"servings": "piece"
	},
	{
		"id": "FD0231",
		"veg": true,
		"category_id": "CM",
		"name": "Grape Juice",
		"image": "cm015.jpg",
		"calories": 145.6,
		"servings": "glass"
	},
	{
		"id": "FD0232",
		"veg": true,
		"category_id": "CM",
		"name": "Green Peas",
		"image": "cm015.jpg",
		"calories": 106.6,
		"servings": "katori"
	},
	{
		"id": "FD0233",
		"veg": true,
		"category_id": "CM",
		"name": "Green Salad",
		"image": "cm015.jpg",
		"calories": 53.3,
		"servings": "katori"
	},
	{
		"id": "FD0234",
		"veg": true,
		"category_id": "CM",
		"name": "Grilled Cheese Sandwich",
		"image": "cm015.jpg",
		"calories": 454,
		"servings": "plate"
	},
	{
		"id": "FD0235",
		"veg": true,
		"category_id": "CM",
		"name": "Grilled Chicken in Lemon Sauce",
		"image": "cm015.jpg",
		"calories": 252,
		"servings": "katori"
	},
	{
		"id": "FD0236",
		"veg": true,
		"category_id": "CM",
		"name": "Grilled Sandwich",
		"image": "cm015.jpg",
		"calories": 367,
		"servings": "plate"
	},
	{
		"id": "FD0237",
		"veg": true,
		"category_id": "CM",
		"name": "Groundnut Chikki",
		"image": "cm015.jpg",
		"calories": 119.5,
		"servings": "piece"
	},
	{
		"id": "FD0238",
		"veg": true,
		"category_id": "CM",
		"name": "Groundnut Ladoo",
		"image": "cm015.jpg",
		"calories": 141.5,
		"servings": "piece"
	},
	{
		"id": "FD0239",
		"veg": true,
		"category_id": "CM",
		"name": "Groundnuts",
		"image": "cm015.jpg",
		"calories": 567,
		"servings": "katori"
	},
	{
		"id": "FD0240",
		"veg": true,
		"category_id": "CM",
		"name": "Guava",
		"image": "cm015.jpg",
		"calories": 51,
		"servings": "katori"
	},
	{
		"id": "FD0241",
		"veg": true,
		"category_id": "CM",
		"name": "Gulab Jamun",
		"image": "cm015.jpg",
		"calories": 150,
		"servings": "piece"
	},
	{
		"id": "FD0242",
		"veg": true,
		"category_id": "CM",
		"name": "Gur Papdi",
		"image": "cm015.jpg",
		"calories": 250,
		"servings": "piece"
	},
	{
		"id": "FD0243",
		"veg": true,
		"category_id": "CM",
		"name": "Guvar / Cluster Beans",
		"image": "cm015.jpg",
		"calories": 55.3,
		"servings": "katori"
	},
	{
		"id": "FD0244",
		"veg": false,
		"category_id": "CM",
		"name": "Hakka Noodles with Prawn",
		"image": "cm015.jpg",
		"calories": 187.5,
		"servings": "katori"
	},
	{
		"id": "FD0245",
		"veg": false,
		"category_id": "CM",
		"name": "Ham",
		"image": "cm015.jpg",
		"calories": 250,
		"servings": "katori"
	},
	{
		"id": "FD0246",
		"veg": false,
		"category_id": "CM",
		"name": "Hamburger",
		"image": "cm015.jpg",
		"calories": 600,
		"servings": "piece"
	},
	{
		"id": "FD0247",
		"veg": true,
		"category_id": "CM",
		"name": "Handvi",
		"image": "cm015.jpg",
		"calories": 110,
		"servings": "piece"
	},
	{
		"id": "FD0248",
		"veg": true,
		"category_id": "CM",
		"name": "Hyderabadi Sandwich",
		"image": "cm015.jpg",
		"calories": 424,
		"servings": "plate"
	},
	{
		"id": "FD0249",
		"veg": true,
		"category_id": "CM",
		"name": "Idli (Big)",
		"image": "cm015.jpg",
		"calories": 66,
		"servings": "piece"
	},
	{
		"id": "FD0250",
		"veg": true,
		"category_id": "CM",
		"name": "Idli (small)",
		"image": "cm015.jpg",
		"calories": 55,
		"servings": "piece"
	},
	{
		"id": "FD0251",
		"veg": true,
		"category_id": "CM",
		"name": "Indian Pau",
		"image": "cm015.jpg",
		"calories": 75,
		"servings": "piece"
	},
	{
		"id": "FD0252",
		"veg": true,
		"category_id": "CM",
		"name": "Jackfruit",
		"image": "cm015.jpg",
		"calories": 88,
		"servings": "katori"
	},
	{
		"id": "FD0253",
		"veg": true,
		"category_id": "CM",
		"name": "Jalebi",
		"image": "cm015.jpg",
		"calories": 85,
		"servings": "piece"
	},
	{
		"id": "FD0254",
		"veg": true,
		"category_id": "CM",
		"name": "Jam",
		"image": "cm015.jpg",
		"calories": 13,
		"servings": "spoon"
	},
	{
		"id": "FD0255",
		"veg": true,
		"category_id": "CM",
		"name": "Jamun",
		"image": "cm015.jpg",
		"calories": 62,
		"servings": "katori"
	},
	{
		"id": "FD0256",
		"veg": true,
		"category_id": "CM",
		"name": "Jawar Roti",
		"image": "cm015.jpg",
		"calories": 104,
		"servings": "piece"
	},
	{
		"id": "FD0257",
		"veg": true,
		"category_id": "CM",
		"name": "Jelly",
		"image": "cm015.jpg",
		"calories": 60,
		"servings": "katori"
	},
	{
		"id": "FD0258",
		"veg": true,
		"category_id": "CM",
		"name": "Jelly Custard",
		"image": "cm015.jpg",
		"calories": 76.6,
		"servings": "katori"
	},
	{
		"id": "FD0259",
		"veg": true,
		"category_id": "CM",
		"name": "Jelly with Fruit",
		"image": "cm015.jpg",
		"calories": 99.3,
		"servings": "katori"
	},
	{
		"id": "FD0260",
		"veg": true,
		"category_id": "CM",
		"name": "Jowar Khakra",
		"image": "cm015.jpg",
		"calories": 16,
		"servings": "piece"
	},
	{
		"id": "FD0261",
		"veg": true,
		"category_id": "CM",
		"name": "Jowar Ladoo",
		"image": "cm015.jpg",
		"calories": 30,
		"servings": "piece"
	},
	{
		"id": "FD0262",
		"veg": true,
		"category_id": "CM",
		"name": "Kabuli Chole",
		"image": "cm015.jpg",
		"calories": 134.6,
		"servings": "katori"
	},
	{
		"id": "FD0263",
		"veg": false,
		"category_id": "CM",
		"name": "Kadai Chicken",
		"image": "cm015.jpg",
		"calories": 343,
		"servings": "plate"
	},
	{
		"id": "FD0264",
		"veg": true,
		"category_id": "CM",
		"name": "Kadhi",
		"image": "cm015.jpg",
		"calories": 88,
		"servings": "katori"
	},
	{
		"id": "FD0265",
		"veg": true,
		"category_id": "CM",
		"name": "Kaju Anjir Milkshake",
		"image": "cm015.jpg",
		"calories": 274.4,
		"servings": "glass"
	},
	{
		"id": "FD0266",
		"veg": true,
		"category_id": "CM",
		"name": "Kaju Katri",
		"image": "cm015.jpg",
		"calories": 100,
		"servings": "piece"
	},
	{
		"id": "FD0267",
		"veg": true,
		"category_id": "CM",
		"name": "Kaju Milkshake",
		"image": "cm015.jpg",
		"calories": 211.2,
		"servings": "glass"
	},
	{
		"id": "FD0268",
		"veg": true,
		"category_id": "CM",
		"name": "Kaju Mattar Masala",
		"image": "cm015.jpg",
		"calories": 181.3,
		"servings": "katori"
	},
	{
		"id": "FD0269",
		"veg": true,
		"category_id": "CM",
		"name": "Kaju Puri",
		"image": "cm015.jpg",
		"calories": 229.5,
		"servings": "piece"
	},
	{
		"id": "FD0270",
		"veg": true,
		"category_id": "CM",
		"name": "Kajudraksha Icecream",
		"image": "cm015.jpg",
		"calories": 219,
		"servings": "scoop"
	},
	{
		"id": "FD0271",
		"veg": true,
		"category_id": "CM",
		"name": "Kashmiri Pulav",
		"image": "cm015.jpg",
		"calories": 362,
		"servings": "plate"
	},
	{
		"id": "FD0272",
		"veg": true,
		"category_id": "CM",
		"name": "Kashmiri Soda",
		"image": "cm015.jpg",
		"calories": 75,
		"servings": "bottle"
	},
	{
		"id": "FD0273",
		"veg": true,
		"category_id": "CM",
		"name": "Kesar Pista Icecream",
		"image": "cm015.jpg",
		"calories": 218,
		"servings": "scoop"
	},
	{
		"id": "FD0274",
		"veg": true,
		"category_id": "CM",
		"name": "Kesar Pista Milkshake",
		"image": "cm015.jpg",
		"calories": 211.2,
		"servings": "glass"
	},
	{
		"id": "FD0275",
		"veg": true,
		"category_id": "CM",
		"name": "Khaja",
		"image": "cm015.jpg",
		"calories": 105.5,
		"servings": "piece"
	},
	{
		"id": "FD0276",
		"veg": true,
		"category_id": "CM",
		"name": "Khakhra without Ghee",
		"image": "cm015.jpg",
		"calories": 102,
		"servings": "piece"
	},
	{
		"id": "FD0277",
		"veg": true,
		"category_id": "CM",
		"name": "Khaman Dhokla",
		"image": "cm015.jpg",
		"calories": 220,
		"servings": "plate"
	},
	{
		"id": "FD0278",
		"veg": true,
		"category_id": "CM",
		"name": "Khandvi",
		"image": "cm015.jpg",
		"calories": 34,
		"servings": "piece"
	},
	{
		"id": "FD0279",
		"veg": false,
		"category_id": "CM",
		"name": "Kheema Curry",
		"image": "cm015.jpg",
		"calories": 186.6,
		"servings": "katori"
	},
	{
		"id": "FD0280",
		"veg": false,
		"category_id": "CM",
		"name": "Kheeme Kofta Curry",
		"image": "cm015.jpg",
		"calories": 406.6,
		"servings": "katori"
	},
	{
		"id": "FD0281",
		"veg": true,
		"category_id": "CM",
		"name": "Kheer",
		"image": "cm015.jpg",
		"calories": 130,
		"servings": "katori"
	},
	{
		"id": "FD0282",
		"veg": true,
		"category_id": "CM",
		"name": "Khichdi",
		"image": "cm015.jpg",
		"calories": 103,
		"servings": "plate"
	},
	{
		"id": "FD0283",
		"veg": true,
		"category_id": "CM",
		"name": "Kopra Pak",
		"image": "cm015.jpg",
		"calories": 80,
		"servings": "piece"
	},
	{
		"id": "FD0284",
		"veg": true,
		"category_id": "CM",
		"name": "KrackJack Biscuit",
		"image": "cm015.jpg",
		"calories": 50,
		"servings": "piece"
	},
	{
		"id": "FD0285",
		"veg": true,
		"category_id": "CM",
		"name": "Kulcha",
		"image": "cm015.jpg",
		"calories": 107.5,
		"servings": "piece"
	},
	{
		"id": "FD0286",
		"veg": true,
		"category_id": "CM",
		"name": "Kurmura",
		"image": "cm015.jpg",
		"calories": 194,
		"servings": "piece"
	},
	{
		"id": "FD0287",
		"veg": true,
		"category_id": "CM",
		"name": "Kurmura Chikki",
		"image": "cm015.jpg",
		"calories": 47,
		"servings": "piece"
	},
	{
		"id": "FD0288",
		"veg": true,
		"category_id": "CM",
		"name": "Kurmura Ladoo",
		"image": "cm015.jpg",
		"calories": 44,
		"servings": "piece"
	},
	{
		"id": "FD0289",
		"veg": true,
		"category_id": "CM",
		"name": "Lemon",
		"image": "cm015.jpg",
		"calories": 57,
		"servings": "katori"
	},
	{
		"id": "FD0290",
		"veg": true,
		"category_id": "CM",
		"name": "Lemon Mousse",
		"image": "cm015.jpg",
		"calories": 170,
		"servings": "katori"
	},
	{
		"id": "FD0291",
		"veg": true,
		"category_id": "CM",
		"name": "Lemon Rice",
		"image": "cm015.jpg",
		"calories": 185,
		"servings": "plate"
	},
	{
		"id": "FD0292",
		"veg": true,
		"category_id": "CM",
		"name": "Lemonade",
		"image": "cm015.jpg",
		"calories": 131,
		"servings": "bottle"
	},
	{
		"id": "FD0293",
		"veg": true,
		"category_id": "CM",
		"name": "Lentil Soup",
		"image": "cm015.jpg",
		"calories": 113,
		"servings": "bowl"
	},
	{
		"id": "FD0294",
		"veg": true,
		"category_id": "CM",
		"name": "Lettuce",
		"image": "cm015.jpg",
		"calories": 21,
		"servings": "katori"
	},
	{
		"id": "FD0295",
		"veg": true,
		"category_id": "CM",
		"name": "Lichee",
		"image": "cm015.jpg",
		"calories": 61,
		"servings": "katori"
	},
	{
		"id": "FD0296",
		"veg": true,
		"category_id": "CM",
		"name": "Lichee Icecream",
		"image": "cm015.jpg",
		"calories": 178,
		"servings": "scoop"
	},
	{
		"id": "FD0297",
		"veg": true,
		"category_id": "CM",
		"name": "Lichee Milkshake",
		"image": "cm015.jpg",
		"calories": 204,
		"servings": "glass"
	},
	{
		"id": "FD0298",
		"veg": true,
		"category_id": "CM",
		"name": "Lichee Milkshake with Icecream",
		"image": "cm015.jpg",
		"calories": 296,
		"servings": "glass"
	},
	{
		"id": "FD0299",
		"veg": true,
		"category_id": "CM",
		"name": "Limca (bottle)",
		"image": "cm015.jpg",
		"calories": 150,
		"servings": "bottle"
	},
	{
		"id": "FD0300",
		"veg": true,
		"category_id": "CM",
		"name": "Limca (can)",
		"image": "cm015.jpg",
		"calories": 165,
		"servings": "can"
	},
	{
		"id": "FD0301",
		"veg": true,
		"category_id": "CM",
		"name": "Lime Split",
		"image": "cm015.jpg",
		"calories": 210,
		"servings": "piece"
	},
	{
		"id": "FD0302",
		"veg": false,
		"category_id": "CM",
		"name": "Liver Masala",
		"image": "cm015.jpg",
		"calories": 330,
		"servings": "plate"
	},
	{
		"id": "FD0303",
		"veg": false,
		"category_id": "CM",
		"name": "Lobster Boiled",
		"image": "cm015.jpg",
		"calories": 12,
		"servings": "piece"
	},
	{
		"id": "FD0304",
		"veg": false,
		"category_id": "CM",
		"name": "Lobster Curry",
		"image": "cm015.jpg",
		"calories": 263.3,
		"servings": "katori"
	},
	{
		"id": "FD0305",
		"veg": false,
		"category_id": "CM",
		"name": "Lobster Fried",
		"image": "cm015.jpg",
		"calories": 36,
		"servings": "piece"
	},
	{
		"id": "FD0306",
		"veg": true,
		"category_id": "CM",
		"name": "Macaroni",
		"image": "cm015.jpg",
		"calories": 148,
		"servings": "bowl"
	},
	{
		"id": "FD0307",
		"veg": true,
		"category_id": "CM",
		"name": "Macaroni Cheese Fritters",
		"image": "cm015.jpg",
		"calories": 396,
		"servings": "plate"
	},
	{
		"id": "FD0308",
		"veg": false,
		"category_id": "CM",
		"name": "Macakrel Curry",
		"image": "cm015.jpg",
		"calories": 263.3,
		"servings": "katori"
	},
	{
		"id": "FD0309",
		"veg": false,
		"category_id": "CM",
		"name": "Macakarel Fried",
		"image": "cm015.jpg",
		"calories": 3.64,
		"servings": "piece"
	},
	{
		"id": "FD0310",
		"veg": false,
		"category_id": "CM",
		"name": "Mackerel Molee",
		"image": "cm015.jpg",
		"calories": 258.6,
		"servings": "katori"
	},
	{
		"id": "FD0311",
		"veg": false,
		"category_id": "CM",
		"name": "Mackerel Stew",
		"image": "cm015.jpg",
		"calories": 113.3,
		"servings": "katori"
	},
	{
		"id": "FD0312",
		"veg": true,
		"category_id": "CM",
		"name": "Magaj",
		"image": "cm015.jpg",
		"calories": 259.5,
		"servings": "piece"
	},
	{
		"id": "FD0313",
		"veg": true,
		"category_id": "CM",
		"name": "makai",
		"image": "cm015.jpg",
		"calories": 62,
		"servings": "piece"
	},
	{
		"id": "FD0314",
		"veg": true,
		"category_id": "CM",
		"name": "Mal Pua",
		"image": "cm015.jpg",
		"calories": 156,
		"servings": "piece"
	},
	{
		"id": "FD0315",
		"veg": true,
		"category_id": "CM",
		"name": "Malai ki Roti",
		"image": "cm015.jpg",
		"calories": 170,
		"servings": "piece"
	},
	{
		"id": "FD0316",
		"veg": true,
		"category_id": "CM",
		"name": "Malai Peda",
		"image": "cm015.jpg",
		"calories": 158,
		"servings": "piece"
	},
	{
		"id": "FD0317",
		"veg": false,
		"category_id": "CM",
		"name": "Mandelli Curry",
		"image": "cm015.jpg",
		"calories": 374,
		"servings": "katori"
	},
	{
		"id": "FD0318",
		"veg": false,
		"category_id": "CM",
		"name": "Mandelli Fry",
		"image": "cm015.jpg",
		"calories": 19.6,
		"servings": "piece"
	},
	{
		"id": "FD0319",
		"veg": true,
		"category_id": "CM",
		"name": "Mango",
		"image": "cm015.jpg",
		"calories": 74,
		"servings": "katori"
	},
	{
		"id": "FD0320",
		"veg": true,
		"category_id": "CM",
		"name": "Mango Bhajia",
		"image": "cm015.jpg",
		"calories": 19.37,
		"servings": "piece"
	},
	{
		"id": "FD0321",
		"veg": true,
		"category_id": "CM",
		"name": "Mango Duet",
		"image": "cm015.jpg",
		"calories": 210,
		"servings": "piece"
	},
	{
		"id": "FD0322",
		"veg": true,
		"category_id": "CM",
		"name": "Mango Icecream",
		"image": "cm015.jpg",
		"calories": 178,
		"servings": "scoop"
	},
	{
		"id": "FD0323",
		"veg": true,
		"category_id": "CM",
		"name": "Mango Icestick",
		"image": "cm015.jpg",
		"calories": 40,
		"servings": "piece"
	},
	{
		"id": "FD0324",
		"veg": true,
		"category_id": "CM",
		"name": "Mango Juice",
		"image": "cm015.jpg",
		"calories": 150.4,
		"servings": "glass"
	},
	{
		"id": "FD0325",
		"veg": true,
		"category_id": "CM",
		"name": "Mango Milkshake",
		"image": "cm015.jpg",
		"calories": 216,
		"servings": "glass"
	},
	{
		"id": "FD0326",
		"veg": true,
		"category_id": "CM",
		"name": "Mango Milkshake with Icecream",
		"image": "cm015.jpg",
		"calories": 304,
		"servings": "glass"
	},
	{
		"id": "FD0327",
		"veg": true,
		"category_id": "CM",
		"name": "Mango Shrikhand",
		"image": "cm015.jpg",
		"calories": 233.3,
		"servings": "katori"
	},
	{
		"id": "FD0328",
		"veg": true,
		"category_id": "CM",
		"name": "Mangola",
		"image": "cm015.jpg",
		"calories": 160,
		"servings": "glass"
	},
	{
		"id": "FD0329",
		"veg": true,
		"category_id": "CM",
		"name": "Marie Biscuit",
		"image": "cm015.jpg",
		"calories": 28,
		"servings": "piece"
	},
	{
		"id": "FD0330",
		"veg": true,
		"category_id": "CM",
		"name": "Marshamallow Pudding",
		"image": "cm015.jpg",
		"calories": 92,
		"servings": "katori"
	},
	{
		"id": "FD0331",
		"veg": true,
		"category_id": "CM",
		"name": "Martini",
		"image": "cm015.jpg",
		"calories": 145,
		"servings": "glass"
	},
	{
		"id": "FD0332",
		"veg": true,
		"category_id": "CM",
		"name": "Masala Dosa",
		"image": "cm015.jpg",
		"calories": 283,
		"servings": "piece"
	},
	{
		"id": "FD0333",
		"veg": true,
		"category_id": "CM",
		"name": "Masala Khakhra",
		"image": "cm015.jpg",
		"calories": 150,
		"servings": "piece"
	},
	{
		"id": "FD0334",
		"veg": true,
		"category_id": "CM",
		"name": "Masala Kurmura",
		"image": "cm015.jpg",
		"calories": 284,
		"servings": "katori"
	},
	{
		"id": "FD0335",
		"veg": true,
		"category_id": "CM",
		"name": "Masala Potato Waffers",
		"image": "cm015.jpg",
		"calories": 370,
		"servings": "katori"
	},
	{
		"id": "FD0336",
		"veg": true,
		"category_id": "CM",
		"name": "Masala Peanuts",
		"image": "cm015.jpg",
		"calories": 322,
		"servings": "katori"
	},
	{
		"id": "FD0337",
		"veg": true,
		"category_id": "CM",
		"name": "Masoor Dal",
		"image": "cm015.jpg",
		"calories": 110,
		"servings": "katori"
	},
	{
		"id": "FD0338",
		"veg": true,
		"category_id": "CM",
		"name": "Mathia",
		"image": "cm015.jpg",
		"calories": 198,
		"servings": "piece"
	},
	{
		"id": "FD0339",
		"veg": true,
		"category_id": "CM",
		"name": "Mathri",
		"image": "cm015.jpg",
		"calories": 129.5,
		"servings": "piece"
	},
	{
		"id": "FD0340",
		"veg": true,
		"category_id": "CM",
		"name": "Mawa Cake",
		"image": "cm015.jpg",
		"calories": 261,
		"servings": "piece"
	},
	{
		"id": "FD0341",
		"veg": false,
		"category_id": "CM",
		"name": "Meat Balls",
		"image": "cm015.jpg",
		"calories": 56.22,
		"servings": "piece"
	},
	{
		"id": "FD0342",
		"veg": true,
		"category_id": "CM",
		"name": "Medu Vada",
		"image": "cm015.jpg",
		"calories": 130,
		"servings": "piece"
	},
	{
		"id": "FD0343",
		"veg": true,
		"category_id": "CM",
		"name": "Melon",
		"image": "cm015.jpg",
		"calories": 17,
		"servings": "piece"
	},
	{
		"id": "FD0344",
		"veg": true,
		"category_id": "CM",
		"name": "Methi Khakhra",
		"image": "cm015.jpg",
		"calories": 150,
		"servings": "piece"
	},
	{
		"id": "FD0345",
		"veg": true,
		"category_id": "CM",
		"name": "Methi Thepla",
		"image": "cm015.jpg",
		"calories": 162,
		"servings": "piece"
	},
	{
		"id": "FD0346",
		"veg": true,
		"category_id": "CM",
		"name": "Mexican Rixe",
		"image": "cm015.jpg",
		"calories": 230,
		"servings": "plate"
	},
	{
		"id": "FD0347",
		"veg": true,
		"category_id": "CM",
		"name": "Mexican Tacos",
		"image": "cm015.jpg",
		"calories": 211.5,
		"servings": "piece"
	},
	{
		"id": "FD0348",
		"veg": true,
		"category_id": "CM",
		"name": "Milk",
		"image": "cm015.jpg",
		"calories": 234,
		"servings": "glass"
	},
	{
		"id": "FD0349",
		"veg": true,
		"category_id": "CM",
		"name": "Milk Ukalo",
		"image": "cm015.jpg",
		"calories": 254,
		"servings": "glass"
	},
	{
		"id": "FD0350",
		"veg": true,
		"category_id": "CM",
		"name": "Milk with Bournvita",
		"image": "cm015.jpg",
		"calories": 374,
		"servings": "glass"
	},
	{
		"id": "FD0351",
		"veg": true,
		"category_id": "CM",
		"name": "Milk with Complan",
		"image": "cm015.jpg",
		"calories": 389,
		"servings": "glass"
	},
	{
		"id": "FD0352",
		"veg": true,
		"category_id": "CM",
		"name": "Milk with Horlicks",
		"image": "cm015.jpg",
		"calories": 366,
		"servings": "glass"
	},
	{
		"id": "FD0353",
		"veg": true,
		"category_id": "CM",
		"name": "Milk with Kesar",
		"image": "cm015.jpg",
		"calories": 374,
		"servings": "glass"
	},
	{
		"id": "FD0354",
		"veg": true,
		"category_id": "CM",
		"name": "Milk with Milo",
		"image": "cm015.jpg",
		"calories": 386,
		"servings": "glass"
	},
	{
		"id": "FD0355",
		"veg": true,
		"category_id": "CM",
		"name": "Milk with Rose favour",
		"image": "cm015.jpg",
		"calories": 374,
		"servings": "glass"
	},
	{
		"id": "FD0356",
		"veg": true,
		"category_id": "CM",
		"name": "Millet Biscuit",
		"image": "cm015.jpg",
		"calories": 19,
		"servings": "piece"
	},
	{
		"id": "FD0357",
		"veg": true,
		"category_id": "CM",
		"name": "Minestrone Soup",
		"image": "cm015.jpg",
		"calories": 199,
		"servings": "bowl"
	},
	{
		"id": "FD0358",
		"veg": true,
		"category_id": "CM",
		"name": "Mint Raita",
		"image": "cm015.jpg",
		"calories": 38,
		"servings": "katori"
	},
	{
		"id": "FD0359",
		"veg": true,
		"category_id": "CM",
		"name": "Mirinda (bottle)",
		"image": "cm015.jpg",
		"calories": 141,
		"servings": "bottle"
	},
	{
		"id": "FD0360",
		"veg": true,
		"category_id": "CM",
		"name": "Mirinda (can)",
		"image": "cm015.jpg",
		"calories": 155,
		"servings": "can"
	},
	{
		"id": "FD0361",
		"veg": true,
		"category_id": "CM",
		"name": "Misal",
		"image": "cm015.jpg",
		"calories": 298,
		"servings": "plate"
	},
	{
		"id": "FD0362",
		"veg": true,
		"category_id": "CM",
		"name": "Mix Vegetable Raita",
		"image": "cm015.jpg",
		"calories": 60,
		"servings": "katori"
	},
	{
		"id": "FD0363",
		"veg": true,
		"category_id": "CM",
		"name": "Mix Vegetables",
		"image": "cm015.jpg",
		"calories": 198.6,
		"servings": "katori"
	},
	{
		"id": "FD0364",
		"veg": true,
		"category_id": "CM",
		"name": "Mixed Hakka Noodles",
		"image": "cm015.jpg",
		"calories": 416,
		"servings": "bowl"
	},
	{
		"id": "FD0365",
		"veg": true,
		"category_id": "CM",
		"name": "Modak",
		"image": "cm015.jpg",
		"calories": 225,
		"servings": "piece"
	},
	{
		"id": "FD0366",
		"veg": true,
		"category_id": "CM",
		"name": "Mohanthal",
		"image": "cm015.jpg",
		"calories": 207.5,
		"servings": "piece"
	},
	{
		"id": "FD0367",
		"veg": true,
		"category_id": "CM",
		"name": "Monaco Biscuit",
		"image": "cm015.jpg",
		"calories": 25,
		"servings": "piece"
	},
	{
		"id": "FD0368",
		"veg": true,
		"category_id": "CM",
		"name": "Monginis Slice Cake",
		"image": "cm015.jpg",
		"calories": 95,
		"servings": "piece"
	},
	{
		"id": "FD0369",
		"veg": true,
		"category_id": "CM",
		"name": "Moong Dal Chila",
		"image": "cm015.jpg",
		"calories": 132,
		"servings": "piece"
	},
	{
		"id": "FD0370",
		"veg": true,
		"category_id": "CM",
		"name": "Moong Dal Fried",
		"image": "cm015.jpg",
		"calories": 190,
		"servings": "katori"
	},
	{
		"id": "FD0371",
		"veg": true,
		"category_id": "CM",
		"name": "Moong Dal Halwa",
		"image": "cm015.jpg",
		"calories": 324.6,
		"servings": "katori"
	},
	{
		"id": "FD0372",
		"veg": true,
		"category_id": "CM",
		"name": "Moong Dal Kachori",
		"image": "cm015.jpg",
		"calories": 181,
		"servings": "piece"
	},
	{
		"id": "FD0373",
		"veg": true,
		"category_id": "CM",
		"name": "Moong Dal Sheera",
		"image": "cm015.jpg",
		"calories": 236.6,
		"servings": "katori"
	},
	{
		"id": "FD0374",
		"veg": true,
		"category_id": "CM",
		"name": "Moong Dal Vada",
		"image": "cm015.jpg",
		"calories": 101.3,
		"servings": "piece"
	},
	{
		"id": "FD0375",
		"veg": true,
		"category_id": "CM",
		"name": "Moong Usal",
		"image": "cm015.jpg",
		"calories": 140.6,
		"servings": "katori"
	},
	{
		"id": "FD0376",
		"veg": false,
		"category_id": "CM",
		"name": "Moushi Curry",
		"image": "cm015.jpg",
		"calories": 409.2,
		"servings": "katori"
	},
	{
		"id": "FD0377",
		"veg": false,
		"category_id": "CM",
		"name": "Moushi Gry",
		"image": "cm015.jpg",
		"calories": 196.8,
		"servings": "piece"
	},
	{
		"id": "FD0378",
		"veg": true,
		"category_id": "CM",
		"name": "Mulberry",
		"image": "cm015.jpg",
		"calories": 49,
		"servings": "katori"
	},
	{
		"id": "FD0379",
		"veg": true,
		"category_id": "CM",
		"name": "Muli Paratha",
		"image": "cm015.jpg",
		"calories": 257,
		"servings": "piece"
	},
	{
		"id": "FD0380",
		"veg": false,
		"category_id": "CM",
		"name": "Mullet Curry",
		"image": "cm015.jpg",
		"calories": 304.6,
		"servings": "katori"
	},
	{
		"id": "FD0381",
		"veg": false,
		"category_id": "CM",
		"name": "Mullet Fry",
		"image": "cm015.jpg",
		"calories": 196.8,
		"servings": "piece"
	},
	{
		"id": "FD0382",
		"veg": false,
		"category_id": "CM",
		"name": "Mullet Stew",
		"image": "cm015.jpg",
		"calories": 235,
		"servings": "bowl"
	},
	{
		"id": "FD0383",
		"veg": false,
		"category_id": "CM",
		"name": "Mulligatawny Soup",
		"image": "cm015.jpg",
		"calories": 279,
		"servings": "bowl"
	},
	{
		"id": "FD0384",
		"veg": false,
		"category_id": "CM",
		"name": "Murg Masala",
		"image": "cm015.jpg",
		"calories": 176.6,
		"servings": "katori"
	},
	{
		"id": "FD0385",
		"veg": true,
		"category_id": "CM",
		"name": "Mushroom Soup",
		"image": "cm015.jpg",
		"calories": 113,
		"servings": "bowl"
	},
	{
		"id": "FD0386",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Ball Curry",
		"image": "cm015.jpg",
		"calories": 370,
		"servings": "katori"
	},
	{
		"id": "FD0387",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Biryani",
		"image": "cm015.jpg",
		"calories": 470,
		"servings": "plate"
	},
	{
		"id": "FD0388",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Burger",
		"image": "cm015.jpg",
		"calories": 500,
		"servings": "piece"
	},
	{
		"id": "FD0389",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Chilly Fry",
		"image": "cm015.jpg",
		"calories": 308,
		"servings": "piece"
	},
	{
		"id": "FD0390",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Curry",
		"image": "cm015.jpg",
		"calories": 323.3,
		"servings": "katori"
	},
	{
		"id": "FD0391",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Cutlets",
		"image": "cm015.jpg",
		"calories": 234,
		"servings": "piece"
	},
	{
		"id": "FD0392",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Do Pyaaza",
		"image": "cm015.jpg",
		"calories": 175.3,
		"servings": "katori"
	},
	{
		"id": "FD0393",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Egg Chop",
		"image": "cm015.jpg",
		"calories": 308,
		"servings": "katori"
	},
	{
		"id": "FD0394",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Frankie",
		"image": "cm015.jpg",
		"calories": 450,
		"servings": "piece"
	},
	{
		"id": "FD0395",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Hyderabadi",
		"image": "cm015.jpg",
		"calories": 390,
		"servings": "bowl"
	},
	{
		"id": "FD0396",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Korma",
		"image": "cm015.jpg",
		"calories": 142.6,
		"servings": "katori"
	},
	{
		"id": "FD0397",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Minced",
		"image": "cm015.jpg",
		"calories": 175.3,
		"servings": "katori"
	},
	{
		"id": "FD0398",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Mughlai",
		"image": "cm015.jpg",
		"calories": 243.3,
		"servings": "katori"
	},
	{
		"id": "FD0399",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Palak",
		"image": "cm015.jpg",
		"calories": 186.6,
		"servings": "katori"
	},
	{
		"id": "FD0400",
		"veg": false,
		"category_id": "CM",
		"name": "Mutton Mughlai",
		"image": "cm015.jpg",
		"calories": 243.3,
		"servings": "katori"
	}
]

search.addEventListener('keyup', (event) => {
    console.log(event)
    filterFunction(event.target.value)
})

function filterFunction(el) {
    let filterArr = [];
	const input = el.toLowerCase().split('')
    const arr1 = arr.filter(ell => ell.name.toLowerCase().startsWith(el))
    filterArr.push(...arr1)
    const arr2 = arr.filter(ell => ell.name.toLowerCase().includes(el))
    filterArr.push(...arr2)

	arr.map(el => {
		let sum = 0;
		for (let i = 0; i < input.length; i++) {
			if (el.name.toLowerCase().includes(input[i]) === true) {
                sum++;
            }
        }
        if (sum === input.length) {
            filterArr.push(el)
		}
	})

	console.log([...new Set(filterArr)])
 }
