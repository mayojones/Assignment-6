
$.getJSON('https://mayojones.github.io/Assignment-6/data.js', function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    data['people'].forEach(function (d) {
        if (d['craft'] == 'Tiangong'){
            $('#astroNames1').append('<li>' + d['name'] + '</li>');
        } else{
            $('#astroNames2').append('<li>' + d['name'] + '</li>');
        }
        
    });

    
});
