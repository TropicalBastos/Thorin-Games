app.filter('mouthWash', function() {

  console.log("mouthWash.js loaded and executing");

  var badWords = [
    "fuck",
    "sex",
    "porn",
    "porno",
    "faen",
    "fakk",
    "føkk",
    "knull",
    "pul",
    "wank",
    "runk",
    "satan",
    "bitch",
    "fitte",
    "fitta",
    "jævl",
    "jævel",
    "mens",
    "kill y",
    "necro",
    "rape",
    "anus",
    "arse",
    "ass",
    "axwound",
    "blow job",
    "blowjob",
    "bollock",
    "bollox",
    "boner",
    "butt",
    "camel toe",
    "chode",
    "clit",
    "cock",
    "cooch",
    "cum",
    "cunt",
    "dick",
    "dildo",
    " fag",
    "gay",
    "homo",
    "handjob",
    "jerk",
    " jack",
    "lesbi",
    "phil",
    "fil ",
    "nigg",
    "paki",
    "penis",
    "pecker",
    "piss",
    " poon ",
    "prick",
    "pussy",
    " shit",
    "slut ",
    "suck",
    "twat",
    " tit",
    "tard ",
    "tards ",
    "vagin",
    "whore",
    "4r5e",
    "5h1t",
    "5hit",
    "a55",
    "anal",
    "ar5e",
    "arrse",
    "ass-fucker",
    "asses",
    "assfucker",
    "assfukka",
    "asshole",
    "assholes",
    "asswhole",
    "a_s_s",
    "b!tch",
    "b00bs",
    "b17ch",
    "b1tch",
    "ballbag",
    "balls",
    "ballsack",
    "bastard",
    "beastial",
    "beastiality",
    "bellend",
    "bestial",
    "bestiality",
    "bich",
    "biatch",
    "bitcher",
    "bitchers",
    "bitches",
    "bitchin",
    "bitching",
    "bloody",
    "blowjobs",
    "boiolas",
    "bollok",
    "boob",
    "boobs",
    "booobs",
    "boooobs",
    "booooobs",
    "booooooobs",
    "breasts",
    "buceta",
    "bugger",
    "bum",
    "bunny fucker",
    "butthole",
    "buttmuch",
    "buttplug",
    "c0ck",
    "c0cksucker",
    "carpet muncher",
    "cawk",
    "chink",
    "cipa",
    "cl1t",
    "clitoris",
    "clits",
    "cnut",
    "cock-sucker",
    "cockface",
    "cockhead",
    "cockmunch",
    "cockmuncher",
    "cocks",
    "cocksuck ",
    "cocksucked ",
    "cocksucker",
    "cocksucking",
    "cocksucks ",
    "cocksuka",
    "cocksukka",
    "cok",
    "cokmuncher",
    "coksucka",
    "coon",
    "cox",
    "crap",
    "cummer",
    "cumming",
    "cums",
    "cumshot",
    "cunilingus",
    "cunillingus",
    "cunnilingus",
    "cuntlick ",
    "cuntlicker ",
    "cuntlicking ",
    "cunts",
    "cyalis",
    "cyberfuc",
    "cyberfuck ",
    "cyberfucked ",
    "cyberfucker",
    "cyberfuckers",
    "cyberfucking ",
    "d1ck",
    "damn",
    "dickhead",
    "dildos",
    "dink",
    "dinks",
    "dirsa",
    "dlck",
    "dog-fucker",
    "doggin",
    "dogging",
    "donkeyribber",
    "doosh",
    "duche",
    "dyke",
    "ejaculate",
    "ejaculated",
    "ejaculates ",
    "ejaculating ",
    "ejaculatings",
    "ejaculation",
    "ejakulate",
    "f u c k",
    "f4nny",
    "fag",
    "fagging",
    "faggitt",
    "faggot",
    "faggs",
    "fagot",
    "fagots",
    "fags",
    "fanny",
    "fannyflaps",
    "fannyfucker",
    "fanyy",
    "fatass",
    "fcuk",
    "fcuker",
    "fcuking",
    "feck",
    "fecker",
    "felching",
    "fellate",
    "fellatio",
    "fingerfuck ",
    "fingerfucked ",
    "fingerfucker ",
    "fingerfuckers",
    "fingerfucking ",
    "fingerfucks ",
    "fistfuck",
    "fistfucked ",
    "fistfucker ",
    "fistfuckers ",
    "fistfucking ",
    "fistfuckings ",
    "fistfucks ",
    "flange",
    "fook",
    "fooker",
    "fucka",
    "fucked",
    "fucker",
    "fuckers",
    "fuckhead",
    "fuckheads",
    "fuckin",
    "fucking",
    "fuckings",
    "fuckingshitmotherfucker",
    "fuckme ",
    "fucks",
    "fuckwhit",
    "fuckwit",
    "fudge packer",
    "fudgepacker",
    "fuk",
    "fuker",
    "fukker",
    "fukkin",
    "fuks",
    "fukwhit",
    "fukwit",
    "fux",
    "fux0r",
    "f_u_c_k",
    "gangbang",
    "gaylord",
    "gaysex",
    "goatse",
    "god-dam",
    "god-damned",
    "goddamn",
    "goddamned",
    "hardcoresex ",
    "hell",
    "heshe",
    "hoar",
    "hoare",
    "hoer",
    "hore",
    "horniest",
    "horny",
    "hotsex",
    "jack-off ",
    "jackoff",
    "jap",
    "jerk-off ",
    "jism",
    "jiz ",
    "jizm ",
    "jizz",
    "kawk",
    "knob",
    "knobead",
    "knobed",
    "knobend",
    "knobhead",
    "knobjocky",
    "knobjokey",
    "kock",
    "kondum",
    "kondums",
    "kum",
    "kummer",
    "kumming",
    "kums",
    "kunilingus",
    "l3ich",
    "l3itch",
    "labia",
    "lust",
    "lusting",
    "m0f0",
    "m0fo",
    "m45terbate",
    "ma5terb8",
    "ma5terbate",
    "masochist",
    "master-bate",
    "masterb8",
    "masterbat",
    "masterbat3",
    "masterbate",
    "masterbation",
    "masterbations",
    "masturbate",
    "mo-fo",
    "mof0",
    "mofo",
    "mothafuck",
    "mothafucka",
    "mothafuckas",
    "mothafuckaz",
    "mothafucked ",
    "mothafucker",
    "mothafuckers",
    "mothafuckin",
    "mothafucking ",
    "mothafuckings",
    "mothafucks",
    "mother fucker",
    "motherfuck",
    "motherfucked",
    "motherfucker",
    "motherfuckers",
    "motherfuckin",
    "motherfucking",
    "motherfuckings",
    "motherfuckka",
    "motherfucks",
    "muff",
    "mutha",
    "muthafecker",
    "muthafuckker",
    "muther",
    "mutherfucker",
    "n1gga",
    "n1gger",
    "nazi",
    "nigg3r",
    "nigg4h",
    "nigga",
    "niggah",
    "niggas",
    "niggaz",
    "nigger",
    "niggers ",
    "nob",
    "nob jokey",
    "nobhead",
    "nobjocky",
    "nobjokey",
    "numbnuts",
    "nutsack",
    "orgasim ",
    "orgasims ",
    "orgasm",
    "orgasms ",
    "p0rn",
    "pawn",
    "penisfucker",
    "phonesex",
    "phuck",
    "phuk",
    "phuked",
    "phuking",
    "phukked",
    "phukking",
    "phuks",
    "phuq",
    "pigfucker",
    "pimpis",
    "pissed",
    "pisser",
    "pissers",
    "pisses ",
    "pissflaps",
    "pissin ",
    "pissing",
    "pissoff ",
    "poop",
    "pornography",
    "pornos",
    "pricks ",
    "pron",
    "pube",
    "pusse",
    "pussi",
    "pussies",
    "pussys ",
    "rectum",
    "retard",
    "rimjaw",
    "rimming",
    "s hit",
    "s.o.b.",
    "sadist",
    "schlong",
    "screwing",
    "scroat",
    "scrote",
    "scrotum",
    "semen",
    "sh!",
    "sh!t",
    "sh1t",
    "shag",
    "shagger",
    "shaggin",
    "shagging",
    "shemale",
    "shi",
    "shit",
    "shitdick",
    "shite",
    "shited",
    "shitey",
    "shitfuck",
    "shitfull",
    "shithead",
    "shiting",
    "shitings",
    "shits",
    "shitted",
    "shitter",
    "shitters ",
    "shitting",
    "shittings",
    "shitty ",
    "skank",
    "sluts",
    "smegma",
    "smut",
    "snatch",
    "son-of-a-bitch",
    " spac ",
    "spunk",
    "s_h_i_t",
    "t1tt1e5",
    "t1tties",
    "teets",
    "teez",
    "testical",
    "testicle",
    " tit",
    "titfuck",
    "tits",
    "titt",
    "tittie5",
    "tittiefucker",
    "titties",
    "tittyfuck",
    "tittywank",
    "titwank",
    "tosser",
    "turd",
    "tw4t",
    "twathead",
    "twatty",
    "twunt",
    "twunter",
    "v14gra",
    "v1gra",
    "vagina",
    "viagra",
    "vulva",
    "w00se",
    "wang",
    "wanker",
    "wanky",
    "whoar",
    "willies",
    "willy",
    "xrated",
    "xxx",
    "fy fader"
  ];

  return function(input, scope) {
    if (!scope.master.verifiedUser && typeof input !== "undefined") {
      angular.forEach(badWords, function(word){
        var regEx = new RegExp(word.split('').join('\\s*'), 'gi');
        input = input.replace(regEx, "mooh");
      });
    }
    return input;
  };

});
