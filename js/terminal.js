$('#screen input').focus();
$('#screen input').keypress(function (e) {
    var key = e.which;
    if(key == 13) {
        
        var $this = $(this), val = $this.val()
        $this.focus().val('');
        if (val === "python hello_world.py") {
            $('#screen p').text('hello to you!');
        } else if (val === "ls") {
            $('#screen p').text("hello_world.py");
        } else if (val == "help") {
            $('#screen p').text('ls - enter to display directory file commands');
        } else {
            if (val.indexOf(".py") != -1) {
                $('#screen p').text("python (.py) scripts must have prefix command 'python' ---  try 'python <command>'");
            } else {
                $('#screen p').text("unrecognized command: use 'help' command for, well, help!");
            }
        }
    }
});