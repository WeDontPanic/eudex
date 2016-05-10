var searchIndex = {};
searchIndex["eudex"] = {"doc":"Eudex is a Soundex-esque phonetic reduction/hashing algorithm, providing locality sensitive\n&quot;hashes&quot; of words, based on the spelling and pronunciation.","items":[[3,"Hash","eudex","A phonetic hash.",null,null],[3,"Difference","","The difference between two words.",null,null],[5,"similar","","Deprecated, do not use.",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"hash"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cmp","","",0,{"inputs":[{"name":"hash"},{"name":"hash"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"hash"},{"name":"hash"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"hash"},{"name":"hash"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"hash"},{"name":"hash"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"hash"},{"name":"hash"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"hash"},{"name":"hash"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"hash"},{"name":"hash"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"hash"},{"name":"hash"}],"output":{"name":"bool"}}],[11,"hash","","",0,null],[11,"clone","","",0,{"inputs":[{"name":"hash"}],"output":{"name":"hash"}}],[11,"new","","Phonetically hash this string.",0,{"inputs":[{"name":"str"}],"output":{"name":"hash"}}],[11,"into","","",0,{"inputs":[{"name":"hash"}],"output":{"name":"u64"}}],[11,"sub","","",0,{"inputs":[{"name":"hash"},{"name":"hash"}],"output":{"name":"difference"}}],[11,"clone","","",1,{"inputs":[{"name":"difference"}],"output":{"name":"difference"}}],[11,"dist","","The &quot;graduated&quot; distance.",1,{"inputs":[{"name":"difference"}],"output":{"name":"u32"}}],[11,"xor","","The XOR distance.",1,{"inputs":[{"name":"difference"}],"output":{"name":"u64"}}],[11,"hamming","","The &quot;flat&quot; Hamming based distance.",1,{"inputs":[{"name":"difference"}],"output":{"name":"u32"}}],[11,"similar","","Does this difference constitute similarity?",1,{"inputs":[{"name":"difference"}],"output":{"name":"bool"}}]],"paths":[[3,"Hash"],[3,"Difference"]]};
initSearch(searchIndex);