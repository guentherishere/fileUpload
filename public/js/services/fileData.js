app.service('fileData', function($http, $q) {

  this.getFileData = function() {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://localhost:1337/file',
    }).then(function(response) {
      deferred.resolve(response.data);
    });
    return deferred.promise;
  };

  this.addFileData = function(file) {
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'http://localhost:1337/file',
      data: {
        title: file.title,
        description: file.description,
        price: file.price
      }
    }).then(function(response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.deleteFileData = function(file) {
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: 'http://localhost:1337/api/file/' + file._id
    }).then(function(response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.updateFileData = function(file) {
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'http://localhost:1337/api/file/' + file._id,
      data: {
        title: file.title,
        description: file.description,
        price: file.price
      }
    }).then(function(response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

});
