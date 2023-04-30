let request;
$(document).ready(function () {
  $('#form').submit(function (e) {
    e.preventDefault();

    if (request) {
      request.abort();
    }

    const height = $('#range').val();
    const sex = $('input[name="sex"]:checked').val();

    request = $.ajax({
      type:'POST',
      url:'php/a3.php',
      data: {
        height: height,
        sex: sex
      }
    })

    request.done(function (response,textStatus,jqXHR) {
      console.log('success');
      $('#result').text('Ideal weight: ' + response  + 'kg');
    })

    request.fail(function (textStatus,jqXHR,errorThrown) {
      console.log('failure');
      $('#result').text('Ideal weight: ' + errorThrown);
    })
  })
  $(document).on('input','#range',function () {
    const val = $('#range').val();
    const elem = $('#height');
    elem.text('Height: ' + val + 'cm');
  })
})
