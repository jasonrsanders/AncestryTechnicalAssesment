angular.module('app').controller('homeCtrl', function($scope, $http) {

  // Monitor required fields and disable/enable the submit button depending on status
  if(document.location.href.indexOf('thankyou') === -1) {
    var interval = window.setInterval(function() {
      var name = document.forms["theform"]["name"].value;
      var email = document.forms["theform"]["email"].value;
      if(name && email) {
        document.getElementById('submitFeedback').classList.remove("disabled");
        document.getElementById('button-disabled').setAttribute("style", "display:none");
      }
      else {
        document.getElementById('submitFeedback').classList.add("disabled");
        document.getElementById('button-disabled').setAttribute("style", "display:block");
      }
    }, 50);
  }
  function removeInterval() {
    clearInterval(interval);
  }

  // Remove the interval when changing views
  window.addEventListener("hashchange", removeInterval, false);

  // Send data to the backend on button click
    // Wasn't able to get this working in time
  $scope.submitFeedback = function(){
    $scope.data.originpage = document.referrer;
    // If you want page name instead of url: $scope.data.originpage = utag.data['cp.gpv_pn'];
    console.log('clicked submit');
    console.log($scope.data);

    // var data = $.param({
    //   feedback: JSON.stringify({
    //     name: $scope.data.name,
    //     email : $scope.data.email,
    //     age : $scope.data.age,
    //     gender : $scope.data.gender,
    //     country : $scope.data.country,
    //     rating : $scope.data.rating,
    //     improvements : $scope.data.improvements,
    //     // originpage : $scope.document.referrer
    //   })
    // });
    // console.log(data);

    // $http.post("/api/suggestions/", $scope.data)
    //   .error((data, status, header, config) => {
    //     console.log(data);
    //     console.log(status);
    //     console.log(header);
    //     console.log(config);
    //   })
    //   .success((data, status) => {
    //     console.log('Data posted successfully');
    //   })
    // .then((httpResponse) => {
    //   console.log('response:', httpResponse);
    // })
  }
});
