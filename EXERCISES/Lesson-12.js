let add = function (){
    console.log(2 + 3)
}
add()
add()

function runTwice(fun){
    console.log('12b')
}
runTwice(function(){
    console.log('12b')
})
runTwice()
runTwice(add())

setTimeout(function change(){
    document.querySelector('.js-start-button').innerHTML = 'Finished'
}, 1000)