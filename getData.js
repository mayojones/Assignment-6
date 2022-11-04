
$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
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
