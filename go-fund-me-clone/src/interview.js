const hashMap = (str) => {
	let total = 0;

	for(let i = 0; i < str.length; i++){
		if(str[i] === 'a'){
			total += 1;
		}
		if(str[i] === 'b'){
			total += 2;
		}
		if(str[i] === 'c'){
			total += 3;
		}
		if(str[i] === 'd'){
			total += 4;
		}
		if(str[i] === 'e'){
			total += 5;
		}
		if(str[i] === 'f'){
			total += 6;
		}
		if(str[i] === 'g'){
			total += 7;
		}
		if(str[i] === 'h'){
			total += 8;
		}
		if(str[i] === 'i'){
			total += 9;
		}
		if(str[i] === 'j'){
			total += 10;
		}
		if(str[i] === 'k'){
			total += 11;
		}
		if(str[i] === 'l'){
			total += 12;
		}
		if(str[i] === 'm'){
			total += 13;
		}
		if(str[i] === 'n'){
			total += 14;
		}
		if(str[i] === 'o'){
			total += 15;
		}
		if(str[i] === 'p'){
			total += 16;
		}
		if(str[i] === 'q'){
			total += 17
		}
		if(str[i] === 'r'){
			total += 18;
		}
		if(str[i] === 's'){
			total += 19;
		}
		if(str[i] === 't'){
			total += 20;
		}
		if(str[i] === 'u'){
			total += 21;
		}
		if(str[i] === 'v'){
			total += 22;
		}
		if(str[i] === 'w'){
			total += 23;
		}
		if(str[i] === 'x'){
			total += 24;
		}
		if(str[i] === 'y'){
			total += 25;
		}
		if(str[i] === 'z'){
			total += 26;
		}


}

return total;
}


function anagramDetector(str1, str2){
	return hashMap(str1) === hashMap(str2);

}


console.log(anagramDetector('elevator', 'overlatey'));
console.log(anagramDetector('tear', 'rate'));
console.log(anagramDetector('', ''));
console.log(anagramDetector('cat', 'rat'));