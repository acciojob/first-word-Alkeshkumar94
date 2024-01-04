function firstWord(s) {
  // your code here
	if(!s)
	{
		return s;
	}
	s=s.trim(' ');
	const spaceindex=s.indexOf(' ');
	if(spaceindex===-1)
	{
		return s;
	}
	const firstword=s.substring(0,spaceindex);
	return firstword;
}

// Do not change the code below



const s = prompt("Enter String:");
alert(firstWord(s));
