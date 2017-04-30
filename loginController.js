var app = angular.module('loginModule',["ngRoute"])
    .controller('loginController', function($scope, $http) {

        // modelo de datos.
        $scope.ida = "";
        $scope.pass = "";

        /**
         * Ejecuta el inicio de sesión.
         */

        $scope.doLogin = function () {
                var id=$scope.ida;
                var pass=$scope.pass;

                if (id=="1" && pass=="1") {

                    window.location.href = ('main/MainView.html');
                } else {
                    alert("Credenciales incorrectas");
                }
        }

        /**
         * Guarda la sesión en el almacenamiento local del navegador.
         * @param json JSON de origen.
         */
        function saveSession(json) {
            localStorage.setItem("session.token", json.session.token);
            localStorage.setItem("session.owner", JSON.stringify(json.user));
            console.log("Sesión guardada.");
        }
    });