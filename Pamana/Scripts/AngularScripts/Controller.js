app.controller("PamanaController", function ($scope, PamanaService) {
    $scope.alert = function () {
        alert("hello");
    };

    $scope.timePrompt = function () {
        alert("helloefgfdg");
    };


    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    $scope.currentTab = 0;
    $scope.tabX = document.getElementsByClassName("signTab");
    $scope.tabIndicate = document.getElementsByClassName("step");


    $scope.showTab = function (n) {
        // Hide all tabs
        for (var i = 0; i < $scope.tabX.length; i++) {
            $scope.tabX[i].style.display = "none";
        }
        // Show the current tab
        $scope.tabX[n].style.display = "block";

        // Update button styles and text
        if (n === 0) {
            document.getElementById("buttonSign1").disabled = true;
            $scope.tabIndicate[0].style.backgroundColor = "#2B2B2B";
            $scope.tabIndicate[1].style.backgroundColor = "#BBBBBB";

        } else {
            document.getElementById("buttonSign1").disabled = false;
            $scope.tabIndicate[1].style.backgroundColor = "#2B2B2B";
            $scope.tabIndicate[0].style.backgroundColor = "#BBBBBB";
        }
        if (n === $scope.tabX.length - 1) {
            document.getElementById("buttonSign2").innerHTML = "Submit";
        } else {
            document.getElementById("buttonSign2").innerHTML = "Next";
        }
    };

    $scope.nextPrev = function (n) {
        // Determine the new current tab
        var curTab = $scope.currentTab + n;

        // Validate boundaries of curTab
        if (curTab < 0 || curTab >= $scope.tabX.length) {
            if (curTab = 2 && bool == false) {
                $scope.signUp();
            }
            return false;
        }


        // Update the current tab and show it
        $scope.currentTab = curTab;
        $scope.showTab($scope.currentTab);
    };



    $scope.emailValidate = function () {

        var email = $scope.email;

        $scope.emailBool;
        $scope.emailError;


        if (!email) {
            $scope.emailBool = true;
            $scope.emailError = "Email is empty.";
            console.log($scope.emailError);
        } else if (!regex.test(email)) {
            $scope.emailBool = true;
            $scope.emailError = "Email is not valid.";
        } else {
            $scope.emailBool = false;
            $scope.emailError = '';
        }
    };

    $scope.passValidate = function () {
        var password = $scope.password;
        $scope.passError;
        $scope.passBool;

        if (password == null || password == undefined || password == "") {
            $scope.passBool = true;
            $scope.passError = "Password is empty";
            console.log($scope.passError);
            bool = 0;
        }
        else {
            $scope.passBool = false;
            $scope.passError = '';

        }
    }

    var bool = true;
    $scope.regFirstN = function () {
        var FName = $scope.FName;

        if (FName == null || FName == undefined || FName == "") {
            $scope.FNameError = "First Name is empty";
            $scope.FNameBool = true;
            bool = 0;
        } else if (FName.length < 1) {
            $scope.FNameError = "First Name is too short";
            $scope.FNameBool = true;
            bool = 0;
        } else if (FName.length > 20) {
            $scope.FNameError = "First Name is too long";
            $scope.FNameBool = true;
            bool = 0;
        } else if (FName[0] != FName[0].toUpperCase()) {
            $scope.FNameError = "First letter should be capitalized";
            $scope.FNameBool = true;
            bool = 0;
        }

        else {
            $scope.FNameError = null;
            $scope.FNameBool = false;
            bool = false;
        }
    }

    $scope.regLastN = function () {
        var LName = $scope.LName;

        if (LName == null || LName == undefined || LName == "") {
            $scope.LNameError = "Last Name is empty";
            $scope.LNameBool = true;
            bool = 0;
        } else if (LName.length < 1) {
            $scope.LNameError = "Last Name is too short";
            $scope.LNameBool = true;
            bool = 0;
        } else if (LName.length > 20) {
            $scope.LNameError = "Last Name is too long";
            $scope.LNameBool = true;
            bool = 0;
        } else if (LName[0] != LName[0].toUpperCase()) {
            $scope.LNameError = "First letter should be capitalized";
            $scope.LNameBool = true;
            bool = 0;
        }

        else {
            $scope.LNameError = null;
            $scope.LNameBool = false;
            bool = false;
        }
    }

    $scope.regEmail = function () {
        var emailInfo = $scope.registerEmail;

        if (emailInfo == null || emailInfo == undefined || emailInfo == "") {
            $scope.regEmailErr = "Email is empty";
            $scope.regemailBool = true;
            bool = 0;
        } else if (!regex.test(emailInfo)) {
            $scope.regEmailErr = "Email is not valid";
            $scope.regemailBool = true;
            bool = 0;
        } else if (emailInfo.length < 10) {
            $scope.regEmailErr = "Email is too short";
            $scope.regemailBool = true;
            bool = 0;
        } else if (emailInfo.length > 50) {
            $scope.regEmailErr = "Email is too long";
            $scope.regemailBool = true;
            bool = 0;
        } else {
            $scope.regEmailErr = null;
            $scope.regemailBool = false;
            bool = false;
        }
    }

    $scope.regPhoneN = function () {
        var phoneNumber = $scope.phoneNum;
        if (phoneNumber == null || phoneNumber == undefined || phoneNumber == "") {
            $scope.phoneNumError = "Phone Number is empty";
            $scope.phoneBool = true;
            bool = 0;
        } else if (phoneNumber.length < 11 || phoneNumber.length > 11) {
            $scope.phoneNumError = "The value is not a valid phone number";
            $scope.phoneBool = true;
            bool = 0;
        } else {
            $scope.phoneNumError = "";
            $scope.phoneBool = false;
            bool = false;
        }
    }

    $scope.regPass = function () {
        var passwordInfo = $scope.regPassword;
        var passRegex = /^(?!.*(?:123456789|987654321|password|qwerty|abcdefg)).{8,}$/;
        var passRegex2 = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;


        if (passwordInfo == null || passwordInfo == undefined || passwordInfo == "") {
            $scope.regpassError = "Password is empty";
            $scope.regpassBool = true;
            bool = 0;
        } else if (passwordInfo.length <= 8) {
            $scope.regpassError = "Password should be at least 8 characters";
            $scope.regpassBool = true;
            bool = 0;
        } else if (!passRegex2.test(passwordInfo)) {
            $scope.regpassError = "Password should have at least one capitalized letter, a special character, and a number";
            $scope.regpassBool = true;
            bool = 0;
        }
        else if (passwordInfo.length > 25) {
            $scope.regpassError = "Password is too long";
            $scope.regpassBool = true;
            bool = 0;
        } else {
            $scope.regpassError = "";
            $scope.regpassBool = null;
            bool = false;
            $scope.confPass(passwordInfo);
        }
    }

    $scope.confPass = function (passwordInfo) {

        var confirmPasswordInfo = $scope.confirmPass;
        var bool = false;
        if (confirmPasswordInfo !== passwordInfo) {
            $scope.regConfError = "Passwords do not match";
            $scope.regConfBool = true;
            bool = 0;
        } else {
            $scope.regConfError = null;
            $scope.regConfBool = false;
            bool = false;
        }
    }


    $scope.signUp = function () {
        if (bool == false) {
            var signupInfo = {
                firstName: $scope.FName,
                lastName: $scope.LName,
                phoneNum: $scope.phoneNum,
                email: $scope.registerEmail,
                password: $scope.regPassword
            }

            var searchRes = PamanaService.fetchusers();
            searchRes.then(function (ReturnedData) {
                var returnedValue = ReturnedData.data;
                var currUsers = returnedValue.find(USearch => USearch.userFName.trim().toLowerCase() === signupInfo.firstName
                    && USearch.userLName.trim().toLowerCase() === signupInfo.lastName
                    && USearch.userEmail.trim().toLowerCase() === signupInfo.email
                    && USearch.userPhone.trim() === signupInfo.phoneNum);

                if (currUsers === undefined) {
                    PamanaService.insertuser(signupInfo);
                    alert("Congratulations! You have successfully signed up!" + signupInfo.firstName);
                    window.location.href = "Login";
                } else {
                    alert('Account already exists!');
                }
            })
        } else {
            return;
        }
    };

    $scope.login = function () {
        var searchRes = PamanaService.fetchusers();

        var email = $scope.email;
        var pass = $scope.password;
        searchRes.then(function (ReturnedData) {
            var returnedValue = ReturnedData.data;
            console.log(returnedValue);
            var currUsers = returnedValue.find(USearch => USearch.userEmail.trim().toLowerCase() === email);
            if (currUsers != undefined) {
                if (pass === currUsers.userPass) {
                    console.log(currUsers.userRole);
                    alert("Welcome, " + currUsers.userFName + "!");
                    localStorage.setItem('logEmail', currUsers.userEmail);
                    
                    if (currUsers.userRole == "admin") {
                        window.location.href = "Dashboard";
                    } else {
                        window.location.href = "LoginIndex";
                    }
                } else {
                    alert("Password is incorrect. Try again");
                }
            } else {
                alert("Account does not exist.");
            }
        });

    };

    $scope.loadUser = function () {
        var searchRes = PamanaService.fetchusers();
        $scope.userEmail = localStorage.getItem("logEmail");

        searchRes.then(function (ReturnedData) {
            var returnedValue = ReturnedData.data;
            var currUsers = returnedValue.find(USearch => USearch.userEmail.trim().toLowerCase() === $scope.userEmail);
            $scope.logFirstN = currUsers.userFName;
            $scope.logLastN = currUsers.userLName;
            $scope.logEmail = currUsers.userEmail;
        });
        localStorage.setItem('logEmail', $scope.userEmail);
    };

    $scope.logout = function () {
        alert("Are you sure you want to log out?");
        $scope.logFirstN = null;
        $scope.logLastN = null;
        $scope.logEmail = null;
    };


    $scope.accDetails = function () {
        $scope.userEmail = localStorage.getItem('logEmail');

        var searchRes = PamanaService.fetchusers();

        searchRes.then(function (ReturnedData) {
            var returnedValue = ReturnedData.data;
            var currUser = returnedValue.find(USearch => USearch.userEmail.trim().toLowerCase() === $scope.userEmail);
            $scope.logFirstN = currUser.userFName;
            $scope.logLastN = currUser.userLName;
            $scope.fullN = $scope.logFirstN + " " + $scope.logLastN;
            $scope.logEmail = currUser.userEmail;
            $scope.logPass = currUser.userPass;
            $scope.logPhone = currUser.userPhone;
        });

        localStorage.setItem('logEmail', $scope.userEmail);
    };

    $scope.reserve = function () {
        var reserveDate = $scope.reservationDate;
        var reserveTime = $scope.reservationTime;
        var reservePeople = $scope.reservationPeople;
        var user = localStorage.getItem("logEmail");

        $scope.loadUser();


        searchRes = PamanaService.fetchusers();
        searchRes.then(function (ReturnedData) {
            var returnedValue = ReturnedData.data;

            var currUser = returnedValue.find(USearch => USearch.userEmail.trim().toLowerCase() === user.trim().toLowerCase());
            var userID = currUser.userID;


            var reservationInfo = {
                userID: userID,
                date: reserveDate,
                time: reserveTime,
                people: reservePeople
            };

            PamanaService.insertReservation(reservationInfo);

        });
        alert("You have successfully reserved your table at Pamana!");

        localStorage.setItem('logEmail', user);
    };


    $scope.displayReservations = function () {
        var user = localStorage.getItem("logEmail");

        searchRes = PamanaService.fetchusers();
        searchRes.then(function (ReturnedData) {
            var returnedValue = ReturnedData.data;
            console.log(returnedValue);
            var currUser = returnedValue.find(USearch => USearch.userEmail.trim().toLowerCase() === user.trim().toLowerCase());
            $scope.userID = currUser.userID;

            var currReservations = PamanaService.fetchRelatedReservations($scope.userID);

            currReservations.then(function (returnedReservations) {
                var returnedRecords = returnedReservations.data;
                $scope.reservations = returnedRecords;
            });
        });
        localStorage.setItem('logEmail', user);
    };

    $scope.cancelReservation = function (id) {
        console.log(id);
        PamanaService.cancelReservation(id).then(function (response) {
            if (response.data.success) {
                alert("Reservation cancelled successfully!");
                $scope.displayReservations(); // Refresh the reservation list
            } else {
                alert("Failed to cancel reservation: " + response.data.message);
            }
        }).catch(function (error) {
            console.error("Error cancelling reservation: ", error);
            alert("Error cancelling reservation. Please try again.");
        });
    };

    $scope.setCurrentReservation = function (id) {
        $scope.reservationCurrent = id;
        console.log($scope.reservationCurrent);
    };


    $scope.displayCancelledReservations = function () {
        var user = localStorage.getItem("logEmail");

        searchRes = PamanaService.fetchusers();
        searchRes.then(function (ReturnedData) {
            var returnedValue = ReturnedData.data;
            console.log(returnedValue);
            var currUser = returnedValue.find(USearch => USearch.userEmail.trim().toLowerCase() === user.trim().toLowerCase());
            $scope.userID = currUser.userID;

            var currReservations = PamanaService.fetchCancelledReservations($scope.userID);

            currReservations.then(function (returnedReservations) {
                var returnedRecords = returnedReservations.data;
                $scope.reservationCancelled = returnedRecords;
            });
        });
        localStorage.setItem('logEmail', user);
    };
});