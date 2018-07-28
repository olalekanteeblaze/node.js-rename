var events = require('events');
var fs = require('fs')
var eventEmitter =  new events.EventEmitter();



var moveFile = function(){
        fs.rename( 'test1/hello.txt', 'test2/hello.txt', (err) => {
            if(err) return console.log("unable to move file")
        });
        fs.rename( 'test1/hello_1.txt', 'test2/hello_!.txt', (err) => {
            if(err) return console.log("unable to move file")
        });
        fs.rename( 'test1/hello_2.txt', 'test2/hello_2.txt', (err) => {
            if(err) return console.log("unable to move file")
        });
        fs.rename( 'test1/hello_3.txt', 'test2/hello_3.txt', (err) => {
            if(err) return console.log("unable to move file")
        });
        fs.rename( 'test1/hello_4.txt', 'test2/hello_4.txt', (err) => {
            if(err) return console.log("unable to move file")
        });
        fs.rename( 'test1/hello_5.txt', 'test2/hello_5.txt', (err) => {
            if(err) return console.log("unable to move file")
        });
        fs.rename( 'test1/hello_6.txt', 'test2/hello_6.txt', (err) => {
            if(err) return console.log("unable to move file")
        });
        fs.rename( 'test1/hello_7.txt', 'test2/hello_7.txt', (err) => {
            if(err) return console.log("unable to move file")
        });
        fs.rename( 'test1/hello_8.txt', 'test2/hello_8.txt', (err) => {
            if(err) return console.log("unable to move file")
        })
        fs.rename( 'test1/hello_9.txt', 'test2/hello_9.txt', (err) => {
            if(err) return console.log("unable to move file")
        })
        fs.rename( 'test1/hello_10.txt', 'test2/hello_10.txt', (err) => {
            if(err) return console.log("unable to move file")
        })
}

eventEmitter.on('done', moveFile())

eventEmitter.emit('done')