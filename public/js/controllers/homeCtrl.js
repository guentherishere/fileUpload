app.controller('homeCtrl', function ($scope, fileData) {

  var getFiles = function () {
    fileData.getFileData().then(function (response) {
      console.log(response);
      $scope.files = response;
    });
  };
  getFiles();

});
