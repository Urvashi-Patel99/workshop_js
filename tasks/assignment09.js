//palindrome aba = aba true and abc =cba false

function ispalindrome(str){
   const cleanstr = str.toLowerCase().replace(/[^a-z0-9]/g, '')

   const revstr = cleanstr.split('').reverse().join('')

   return cleanstr === revstr

}
 console.log(ispalindrome("aba"))
 console.log(ispalindrome('abc'))
 console.log(ispalindrome('madam'))


 //reverse hello java script == script java hello

function revstrr(str){
  const rev = str.split(' ').reverse().join(' ')
  return rev
}
console.log(revstrr("hello java script"))


 //anagram listen = silent

 function isAnagram(str1, str2){
   const cleanstr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '') 
   const cleanstr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '') 

   const sorted1 = cleanstr1.split('').sort().join('')
   const sorted2 = cleanstr2.split('').sort().join('')

   return sorted1 === sorted2
 }

 console.log(isAnagram("listen","silent"))
 console.log(isAnagram("hello","world"))
