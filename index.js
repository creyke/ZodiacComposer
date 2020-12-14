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
	'R': ['┴','E','T','X','Z'],
	'S': ['P','-','J','U'],
	'T': ['■','▄','ϕ','ᴥ','ᵜ','G'],
	'U': ['/','▣','Ό'],
	'V': ['●'],
	'W': ['ꝋ','W'],
	'Y': ['├','C']
};

var start = {
	'I': 1,
	'O': 2,
	'E': 5,
	'Y': 1,
	'U': 1,
	'A': 1,
	'R': 1
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

var message = "i hope you are having lots of fun in trying to catch me that wasnt me on the tv show which brings up a point about me i am not afraid of the gas chamber because it will send me to paradice all the sooner because i now have enough slaves to work for me where everyone else has nothing when they reach paradice so they are afraid of death i am afraid because i know that my new life is life will be an easy one in paradice death".toLocaleUpperCase().split(' ').join('').split('');

var encoded = message.map(x => {
	if (key[x] != null)
	{
		return { c: x, s: key[x][start[x] != null ? start[x] : 0] }
	}
	return '?'
});

var grid = [];

var mapId = 0;
encoded.map(e => {
	for (var x = 0; x < 17; x++) {
		for (var y = 0; y < 20; y++) {
			var c = parseInt(transposition[x][y]);
			if (c === mapId) {
				if (grid[x] == null) {
					grid[x] = [];
				}
				grid[x][y] = e;
				console.log({i:mapId, c:c, x:x, y:y});
			}
		}
	}
	mapId++;
});

function makeTable(array) {
    var table = document.createElement('table');
    for (var i = 0; i < array.length; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < array[i].length; j++) {
            var cell = document.createElement('td');
            cell.textContent = array[i][j].c;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    return table;
}

document.getElementsByTagName('body')[0].appendChild(makeTable(grid));