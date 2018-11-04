var app = angular.module('MainApp', []);

// Shared function : load data from server & update contacts list when a new one added
app.run(function ($rootScope, $http) {

    $rootScope.NoDataYet = true;

    $rootScope.LoadDataFromDB = function () {

        $http.get
            ("http://localhost:44724/api/MemorizeUnit")
            .then(function (response) {

                $rootScope.data = response.data;

                if ($rootScope.data.length > 0) {
                    $rootScope.NoDataYet = false;
                }

            },
            function (response) {

                alert("Error While Loading Data, Please Tray Again");

            });
    }
});


// Controller for input popup, and post data to server
app.controller('InputPopupContr', function ($rootScope, $scope, $http) {

    // Init form and validation parameter
    var InitInputForm = function () {

        $scope.SaveButtonHideFlag = false;
        $scope.PriorityOptions = ["Intermediate", "High", "Low"];
		$scope.PrivacyOptions = ["Public", "Private"];
		$scope.Schedules_ = [];
        $scope.MessageBoxFlagSave = false;
        $scope.MessageBoxFlagError = false;
        $scope.DummyValue = 1;
		$scope.AddRemenderDisable = true;
    }

    InitInputForm();

	
    // Reset form to initial state when close or cansle
    $scope.ResetForm = function () {

        $scope.Priority = $scope.PriorityOptions[0];
		$scope.Privacy = $scope.PrivacyOptions[1];
        $scope.Title = "";
        $scope.Tags = "";
		$scope.Subject = "";
        $scope.Content = "";
        $scope.MessageBoxFlagSave = false;
        $scope.SaveButtonHideFlag = false;
        $scope.MessageBoxFlagError = false;
		$scope.Schedules_ = [];
		$scope.AddRemenderDisable = true;

    }
	
	$scope.AddRemender = function() {
		
		$scope.Schedules_.push({Date : $scope.Remender});
		
		$scope.AddRemenderDisable = true; 
		
		$scope.Remender = null
		
	}
	
	$scope.ChangeDate = function(){
		
		if ($scope.Remender != null)
		{
			$scope.AddRemenderDisable = false; 
		}
		
		else
		{
			$scope.AddRemenderDisable = true; 
		}
		
		
	}

   
    var CreateJson = function () {

        TempPrivacy = ("Private" == $scope.Privacy);
	
		Content = {Text : $scope.Content};
		
	
		data = { Schedules:$scope.Schedules_, UnitContent: Content , Title: $scope.Title, SubjectName : $scope.Subject , Priority : $scope.Priority, IsPrivate: TempPrivacy, Tags : $scope.Tags };
        
		$scope.data = data;
    
	}

	
    //Send Post Http req to server to add new Unit to database
    $scope.SaveUnit = function () {

        CreateJson();
       
        $http.post('http://localhost:44724/api/MemorizeUnit', $scope.data).then(function (response) {

            $scope.ResetForm();
            $scope.MessageBoxFlagSave = true;
            $scope.SaveButtonHideFlag = true;

        },
		
        function (response) {

			
            if (response.status == 500) {
                $scope.ResetForm();
                $scope.MessageBoxFlagSave = true;
                $scope.SaveButtonHideFlag = true;
            }
            else {
                $scope.MessageBoxFlagError = true;
                $scope.SaveButtonHideFlag = true;

            }

        });

    }

});

// Controller desplay output
app.controller('DisplayUnitsContr', function ($scope, $http) {

    //display Shared Emp in form 
    var SetSharedEmpinForm = function (index) {
        $scope.CurrentIndex = index;

        Contact = $scope.CurrentContact;

        $scope.DisSharedEmpName = Contact.SharedEmps[index].Name;
        $scope.DisSharedEmpStartYear = Contact.SharedEmps[index].StartYear;


        if (Contact.SharedEmps[index].EndYear == null) {
            $scope.DiEmpIsPresnt = true;
        }
        else {
            $scope.DiEmpIsPresnt = false;
            $scope.DisSharedEmpEndYear = Contact.SharedEmps[index].EndYear;

        }
    }

    $scope.ExpandUnit = function (Unit) {

        $scope.CurrentUnit = Unit;

        $scope.DisContactType = Contact.ContactType;
        $scope.DisFirstName = Contact.FirstName;
        $scope.DisLastName = Contact.LastName;
        $scope.DisMobileNumber ="0"+Contact.MobileNumber;

        if (Contact.ContactType == "Friend") {
            $scope.LandLineNumberFlag = false;
            $scope.RelationshipFlag = true;
            $scope.SharedEmpFlag = true;
            $scope.DisLandLineNumber = "0"+Contact.LandLineNumbers[0].LandNumber;
        }
        else if (Contact.ContactType == "Family") {
            $scope.LandLineNumberFlag = true;
            $scope.RelationshipFlag = false;
            $scope.SharedEmpFlag = true;
            $scope.DisRelationship = Contact.Relashinships[0].Relashin;

        }
        else {
            $scope.LandLineNumberFlag = true;
            $scope.RelationshipFlag = true;
            $scope.SharedEmpFlag = false;

            $scope.PrevButtondisabled = true;
            $scope.nextButtondisabled = true;


            if (Contact.SharedEmps.length == 1) {
                SetSharedEmpinForm(0);
            }
            else if (Contact.SharedEmps.length > 1) {
                $scope.nextButtondisabled = false;
                SetSharedEmpinForm(0);
            }


        }

    }

    //Next Shared Emp
    $scope.Next = function () {
        if ($scope.CurrentIndex < $scope.CurrentContact.SharedEmps.length - 1) {
            $scope.CurrentIndex = $scope.CurrentIndex + 1;
            SetSharedEmpinForm($scope.CurrentIndex);
            $scope.PrevButtondisabled = false;

        }
        if ($scope.CurrentIndex == $scope.CurrentContact.SharedEmps.length - 1) {
            $scope.nextButtondisabled = true;
        }


    }

    //Next Shared Emp
    $scope.Previous = function () {
        if ($scope.CurrentIndex > 0) {
            $scope.CurrentIndex = $scope.CurrentIndex - 1;
            SetSharedEmpinForm($scope.CurrentIndex);
            $scope.nextButtondisabled = false;

        }
        if ($scope.CurrentIndex == 0) {
            $scope.PrevButtondisabled = true;
        }
    }


});