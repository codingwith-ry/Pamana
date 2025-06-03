app.service("PamanaService", function ($http) {

    this.insertuser = function (signupInfo) {
        var response = $http({
            method: "post",
            url: "/Home/AddUser",
            params: {
                firstName: signupInfo.firstName,
                lastName: signupInfo.lastName,
                phoneNum: signupInfo.phoneNum,
                email: signupInfo.email,
                password: signupInfo.password
            }
        });
        return response;
    };

    this.fetchusers = function () {
        var response = $http({
            method: "get",
            url: "/Home/GetUsers"
        });
        return response;
    };

    this.fetchreservations = function () {
        var response = $http({
            method: "get",
            url: "/Home/GetReservations"
        });

        return response;
    };

    this.fetchRelatedReservations = function (user_ID) {
        var response = $http({
            method: "post",
            url: "/Home/GetRelatedReservations",
            params: {
                userID: user_ID
            }
        });

        return response;
    };

    this.fetchRelatedReservations = function (user_ID) {
        var response = $http({
            method: "post",
            url: "/Home/GetRelatedReservations",
            params: {
                userID: user_ID
            }
        });

        return response;
    };
    this.cancelReservation = function (reservation_ID) {
        var response = $http({
            method: "post",
            url: "/Home/CancelReservation",
            params: {
                reservationID: reservation_ID
            }
        });

        return response;
    };



    this.insertReservation = function (reservationInfo) {
        var response = $http({
            method: "post",
            url: "/Home/AddReservation",
            params: {
                userID: reservationInfo.userID,
                date: reservationInfo.date,
                time: reservationInfo.time,
                people: reservationInfo.people
            }
        });
    }

    this.fetchCancelledReservations = function (user_ID) {
        var response = $http({
            method: "post",
            url: "/Home/GetCancelledReservations",
            params: {
                userID: user_ID
            }
        });

        return response;
    };
});