function myfunction(){
    setTimeout(function() {console.log('3')},3000).then(console.log('3'))
}
myfunction();
console.log('2')
