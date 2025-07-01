function isPalindrome(str){
    str=str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverse=str.split('').reverse().join('');
    return str===reverse;
}
console.log(isPalindrome("malayalam"));
