//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log((10)===(parseFloat("9.8")));
console.log('Both value made exactly same:',(10)===(Math.ceil(parseFloat("9.8"))));