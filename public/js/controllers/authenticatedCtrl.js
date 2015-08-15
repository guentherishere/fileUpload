app.controller('authenticatedCtrl', function ($scope, fileData) {
  var getFiles = function () {
    fileData.getFileData().then(function (response) {
      $scope.files = response;
    });
  };
  getFiles();

  $scope.addNewFile = function (isValid) {
    if (isValid) {
      fileData.addFileData($scope.file).then(function (response) {
        getFiles();
      });
    }
  };

  $scope.deleteFile = function (file) {
    console.log(file);
    fileData.deleteFileData(file).then(function (response) {
      getFiles();
    });
  };

  $scope.updateFile = function (file) {
    fileData.updateFileData(file).then(function (response) {
      getFiles();
    });
  };

});
