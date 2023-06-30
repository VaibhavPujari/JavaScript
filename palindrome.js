

function isPalindrome(str) {

	var rev=str.split("").reverse().join("");


	if(rev == str){
        console.log(`This is Palindrome : ${rev} `);
		// return true
	}else{
        console.log(`This is Not Palindrome : ${rev}`);
    }
	// return false
				
}

isPalindrome("141");
isPalindrome("dad");
isPalindrome("Sunday");
isPalindrome("madam");
isPalindrome("listen");
isPalindrome("mom");



