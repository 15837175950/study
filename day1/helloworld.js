
function up1(){
    console.log("1====updating....");
    var start=new Date().getTime();
    while(new Date().getTime()<start+3000);
}
up1();
console.log("1====i am complete");
console.log("1====i like node.js");


function up2(done){
    console.log("2====i am updating...")
    setTimeout(() => {
        done();
    }, 3000);
}
up2(function(){
    console.log("2====i am compleate")
});
console.log("2=====i like node.js")