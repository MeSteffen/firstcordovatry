
angular.module('sata.dependencies').controller('StartscreenCtrl', function ($scope, $stateParams) {
    $scope.openBrowser = function () {
        var ref = window.open('http://apache.org', '_blank', 'location=yes');
        ref.addEventListener('loadstart', function (event) { alert('start: ' + event.url); });
        ref.addEventListener('loadstop', function (event) { alert('stop: ' + event.url); });
        ref.addEventListener('loaderror', function (event) { alert('error: ' + event.message); });
        ref.addEventListener('exit', function (event) { alert(event.type); });
    }

    $scope.openPage = function () {
        var req = new XMLHttpRequest();
        req.open('GET', 'http://www.google.com', true);
        req.send();
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if ((req.status == 200) || (req.status == 0)) {
                    document.getElementById('content').innerHTML = req.responseText;
                    //$scope.data.innerHtml = xmlhttp.responseText;
                }
                else {
                    document.getElementById('log').innerHTML = "Error";
                }
            }
        }
    }
}); 