app.controller('SampleOneController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$state', '$helpers', '$systemUrls', sampleoneController]);

function sampleoneController($scope, $rootScope, $state, $timeout, $http, $state, $helpers, $systemUrls) {
    console.log("sample report one controller started");

    //$http.defaults.headers.common['Authorization'] = 'Basic ostriosvr1:Ostr10Svr123';

    $scope.getReport = function () {
        debugger
        $http({
            method: "GET",
            url: "http://104.45.142.25/E3CoreUser/User.svc/LoadReport/SampleReport1",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            debugger
            if (response.data) {
                $scope.reportData = response.data;
                //step 1: get the DOM object of the iframe.
                var iframe = document.getElementById('framecontent');

                /* if jQuery is available, you may use the get(0) function to obtain the DOM object like this:
                var iframe = $('iframe#target_iframe_id').get(0);
                */

                //step 2: obtain the document associated with the iframe tag
                //most of the browser supports .document. Some supports (such as the NetScape series) .contentDocumet, while some (e.g. IE5/6) supports .contentWindow.document
                //we try to read whatever that exists.
                var iframedoc = iframe.document;
                if (iframe.contentDocument)
                    iframedoc = iframe.contentDocument;
                else if (iframe.contentWindow)
                    iframedoc = iframe.contentWindow.document;

                if (iframedoc) {
                    // Put the content in the iframe
                    iframedoc.open();
                    iframedoc.writeln($scope.reportData);
                    iframedoc.close();
                } else {
                    //just in case of browsers that don't support the above 3 properties.
                    //fortunately we don't come across such case so far.
                    alert('Cannot inject dynamic contents into iframe.');
                }
            } else {
                alert("There was an error: " + response.data.Error.ErrorMessage);
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
        });
    };

    $scope.getReport();
}