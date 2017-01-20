(function chooser(global){

    global.initMap = function initMap() {
        const opt = document.getElementById('mapType');
        if(opt.value == "def")
        {
            global.initBasic();
        }
        else
        {
            global.initCirle();
        }      
    }

})(window);