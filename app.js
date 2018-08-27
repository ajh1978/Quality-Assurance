let functions = {};

functions.argument = function(argument) {
  if(argument === null){
    return 'null';
  }

  if(argument === undefined){
    return 'need an argument';
  }

  return typeof argument;
}

functions.longestWord = function(string) {
  if(typeof string === "string") {
  var wordList = string.split(' ');
  var longestWord = wordList.sort(function(a, b) { return b.length - a.length; });
  return longestWord[0];
  }
  else {
    return 'argument is not a string';
  }
}

functions.vowelCount = function(string) {
  if(typeof string === "string") {
    var vowels = 'aeiouyåäöAEIOUYÅÄÖ';
    var vowelCount = 0;

    for(let i = 0; i < string.length ; i++)
    {
      if (vowels.indexOf(string[i]) !== -1)
      {
        vowelCount += 1;
      }

    }
      return vowelCount;
    }
  else {
    return 'argument is not a string';
  }
}
module.exports = functions;
