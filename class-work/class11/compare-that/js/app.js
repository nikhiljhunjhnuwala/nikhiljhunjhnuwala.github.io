$('#submit').click(function(){
    var a = $('#a').val();
    var b = $('#b').val();
    if (a>b){
        $('#comparison').html(`>`);
        console.log(`${a} is greater than ${b}`);
    } else if (a<b){
        $('#comparison').html(`<`)
        console.log(`${a} is less than ${b}`);
    } else if (a==b){
        $('#comparison').html(`=`)
        console.log(`${a} is equal to ${b}`);
    } 
})