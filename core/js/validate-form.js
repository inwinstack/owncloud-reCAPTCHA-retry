var verify;

var validate = function() {
    if (document.getElementById('robot').style.display !== 'none') {
        if (!verify) {
            alert('請勾選核取方塊');
            return false;
        }
    }
};

var notRobot = function() {
    verify = true;
};
