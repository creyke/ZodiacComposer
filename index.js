var target = 306;

var key = {
	'A': ['╘','K','O','⅃','±'],
	'B': ['□','ꟻ'],
	'C': ['ꟼ'],
	'D': ['ʘ','A','S'],
	'E': ['┤','B','N','𐐒','ɔ','I'],
	'F': ['F'],
	'G': ['L'],
	'H': ['+'],
	'I': ['<','H','P','ꓘ','ʎ'],
	'L': ['◬','Ɑ','⊥'],
	'M': ['┴'],
	'N': ['·','△','>','D','Y'],
	'O': ['M','R','V','^'],
	'P': ['▲','j'],
	'R': ['┬','E','T','X','Z'],
	'S': ['P','-','J','u'],
	'T': ['■','▄','ϕ','ᴥ','ᵜ','G'],
	'U': ['/','▣','Ό'],
	'V': ['●'],
	'W': ['ꝋ','W'],
	'Y': ['├','C']
};

var picks = {
	'I': [1,3,0,2,3,2,3,0,1,4,4,4,2,0,1,0,4,0,4],
	'O': [0,2,1,2,0,3,2,1,1,1,3,0,3,1,1,0,2,1,2,2,3,0,1,0,3,3],
	'E': [5,1,5,3,0,5,1,4,1,2,4,2,4,0,5,2,3,5,5,4,4,5,1,5,4,4,1,1,4,3,1,1,2,0,4,1,1],
	'Y': [1,0,1,0,1,1],
	'U': [1,0,2,0,2,0],
	'A': [1,0,4,2,3,2,1,1,4,2,0,1,3,4,2,0,4,3,4,3,0,4,2,3,4,2,4,1,0,1,2,2,0,0],
	'R': [1,4,4,0,0,3,1,1,4,2,2,0,3,2,0,2],
	'L': [1,0,2,1,1,1,2,2,0],
	'T': [2,0,2,5,5,1,0,2,2,0,0,1,4,5,3,5,5,2,4,5,2,3,2,0],
	'S': [3,0,2,2,3,1,1,2,3,3,1,2,0,3,1],
	'N': [1,1,2,2,3,3,4,0,1,4,2,0,3,4,0,0,1,1,0],
	'W': [1,1,0,0,0,0,1,1,1,0],
	'B': [1,0,0,1,1,1],
	'P': [0,0,1,1,0],
	'D': [2,1,0,2,0,2]
}

var cursor = {
	'E': 0,
	'A': 0,
	'I': 0,
	'O': 0,
	'N': 0,
	'T': 0,
	'R': 0,
	'W': 0,
	'Y': 0,
	'S': 0,
	'L': 0,
	'U': 0,
	'P': 0,
	'B': 0,
	'D': 0
}

var transposition = [
	[  0,  9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99,108,117,126,135,144],
	[136,145,  1, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91,100,109,118,127],
	[119,128,137,146,  2, 11, 20, 29, 38, 47, 56, 65, 74, 83, 92,101,110],
	[102,111,120,129,138,147,  3, 12, 21, 30, 39, 48, 57, 66, 75, 84, 93],
	[ 85, 94,103,112,121,130,139,148,  4, 13, 22, 31, 40, 49, 58, 67, 76],
	[ 68, 77, 86, 95,104,113,122,131,140,149,  5, 14, 23, 32, 41, 50, 59],
	[ 51, 60, 69, 78, 87, 96,105,114,123,132,141,150,  6, 15, 24, 33, 42],
	[ 34, 43, 52, 61, 70, 79, 88, 97,106,115,124,133,142,151,  7, 16, 25],
	[ 17, 26, 35, 44, 53, 62, 71, 80, 89, 98,107,116,125,134,143,152,  8],
	
	[153,162,171,180,189,198,207,216,225,234,243,300,301,302,303,304,305],
	[284,292,154,163,172,181,190,199,208,217,226,235,244,252,260,268,276],
	[269,277,285,293,155,164,173,182,191,200,209,218,227,236,245,253,261],
	[254,262,270,278,286,294,156,165,174,183,192,201,210,219,228,237,246],
	[238,247,255,263,271,279,287,295,157,166,175,184,193,202,211,220,229],
	[221,230,239,256,264,272,280,288,296,158,167,176,185,194,203,212,248],
	[204,213,222,231,240,249,257,265,273,281,289,297,159,168,177,186,195],
	[187,196,205,214,223,232,241,250,258,266,274,282,290,298,160,169,178],
	[170,179,188,197,206,215,224,233,242,251,259,267,275,283,291,299,161],
	
	[309,308,307,306,310,311,312,313,315,314,317,316,318,319,320,321,324],
	[323,322,326,325,334,333,332,331,330,329,328,327,335,336,337,338,339]
];

//transposition.flatMap(x => x).sort((a, b) => a - b).forEach(x => console.log(x))

// up to ...                                         |
var message = "i hope you are having lots of fan in trying to catch me that wasnt me on the tv show which bringo up a point about me i am not afraid of the gas chamber becaase it will send me to paradlce all the soohvr because e now have enough slaves to worv for me where vveryonv else has nothing when they reach paramice so they are afraid of death i am not afraid because i vnow that my new life is life will be an easy one in paradice death".toLocaleUpperCase().split(' ').join('').split('');


function getAndIncreaseCursor(c) {
	var cur = cursor[c];
	cursor[c] = cur + 1 > picks[c].length - 1 ? -1000000 : cur + 1;
	return cur;
}

var id = 0;
var encoded = message.map(x => {
	if (key[x] != null)
	{
		return { id:id++, c: x, s: key[x][picks[x] != null
			? (picks[x].constructor === Array
				? picks[x][getAndIncreaseCursor(x)]
				: picks[x])
			: 0
		] }
	}
	id++;
	return '?'
});

var grid = [];

var mapId = 0;
encoded.map(e => {
	for (var x = 0; x < 20; x++) {
		for (var y = 0; y < 17; y++) {
			//console.log("x: " + x + ", y: " + y);
			var c = parseInt(transposition[x][y]);
			//if (c > 302) console.log(c);
			if (c === mapId) {
				if (grid[x] == null) {
					grid[x] = [];
				}
				grid[x][y] = e;
				//console.log(e);
			}
		}
	}
	mapId++;
});

function toColor(num) {
    num >>>= 0;
    var b = num & 0xFF,
        g = (num & 0xFF00) >>> 8,
        r = (num & 0xFF0000) >>> 16,
        a = ( (num & 0xFF000000) >>> 24 ) / 255 ;
    return "rgba(" + [r, g, b, a].join(",") + ")";
}

const lerpColor = function(a, b, amount) {
    const ar = a >> 16,
          ag = a >> 8 & 0xff,
          ab = a & 0xff,

          br = b >> 16,
          bg = b >> 8 & 0xff,
          bb = b & 0xff,

          rr = ar + amount * (br - ar),
          rg = ag + amount * (bg - ag),
          rb = ab + amount * (bb - ab);

    return (rr << 16) + (rg << 8) + (rb | 0);
};

function makeTable(array, type) {
    var table = document.createElement('table');
    for (var i = 0; i < array.length; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < array[i].length; j++) {
			var gridCell = array[i][j];
            var cell = document.createElement('td');
			cell.width = "24px";
			cell.height = "24px";
			//console.log("id = " + gridCell.id);
			if (gridCell.id > target) {}
			else if (gridCell.id == target)
			{
				cell.style.backgroundColor = "#00ff00";
			}
			else if (gridCell.id != undefined) {
				cell.style.backgroundColor = gridCell.id < 128
					? "#ff" + (gridCell.id * 2).toString(16).padStart(4, '0')
					: gridCell.id < 256
						? "#" + ((gridCell.id - 128) * 2).toString(16).padStart(4, '0') + "ffff"
						: "#ffff" + ((gridCell.id - 256) * 8).toString(16).padStart(2, '0') + "";
			}
            row.appendChild(cell);
			var cent = document.createElement('center');
            cent.textContent = type == 0 ? gridCell.s : type == 1 ? gridCell.c : gridCell.id;
            cell.appendChild(cent);
        }
        table.appendChild(row);
    }
    return table;
}

var targetInstance = 0;
for (var i in encoded) {
	if (i <= target && message[i] == message[target]) {
		targetInstance++;
	}
}
var div = document.createElement('div');
div.textContent = /*"" + message[target] + " " + */targetInstance + "(" + (picks[message[target]] == undefined ? "N/A" : picks[message[target]].length) + ")" + " " + (key[message[target]].length == 1 ? "Unique" : "Multiple");
document.getElementsByTagName('body')[0].appendChild(div);

var divMsgB = document.createElement('div');
divMsgB.textContent = message.slice(target - 10, target).join('');
document.getElementsByTagName('body')[0].appendChild(divMsgB);

var divMsg = document.createElement('div');
divMsg.textContent = message.slice(target, target + 1).join('');
document.getElementsByTagName('body')[0].appendChild(divMsg);

var divMsgA = document.createElement('div');
divMsgA.textContent = message.slice(target + 1, target + 10).join('');
document.getElementsByTagName('body')[0].appendChild(divMsgA);

document.getElementsByTagName('body')[0].appendChild(makeTable(grid, 0));
document.getElementsByTagName('body')[0].appendChild(document.createElement('br'));
document.getElementsByTagName('body')[0].appendChild(makeTable(grid, 1));
document.getElementsByTagName('body')[0].appendChild(document.createElement('br'));
document.getElementsByTagName('body')[0].appendChild(makeTable(grid, 2));
