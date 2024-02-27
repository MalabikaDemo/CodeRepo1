// A namespace defined for the sample code
// As a best practice, you should always define 
// a unique namespace for your libraries
var Example = window.Example || {};
(function () {
    // Define some global variables
    var myUniqueId = "_abracadabra"; // Define an ID for the notification
    var currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName; // get current user name
    var message = currentUserName + ": Your JavaScript code in action!";

    // Code to run in the form OnLoad event
    this.formOnLoad = function (executionContext) {
        var formContext = executionContext.getFormContext();

        // Display the form level notification as an INFO
        formContext.ui.setFormNotification(message, "INFO", myUniqueId);

        // Wait for 5 seconds before clearing the notification
        window.setTimeout(function () { formContext.ui.clearFormNotification(myUniqueId); }, 5000);
    }

    // Code to run in the column OnChange event 
    this.attributeOnChange = function (executionContext) {
        var formContext = executionContext.getFormContext();

        // Automatically set some column values if the account name contains "Contoso"
        var employeename = formContext.getAttribute("cr778_employeename").getValue();
        if (employeename.toLowerCase().search("pqr") != -1) {
            formContext.getAttribute("cr778_dept_id").setValue(000);
            formContext.getAttribute("cr778_location_id").setValue(999);
            
        }
    }

    // Code to run in the form OnSave event 
    this.formOnSave = function () {
        // Display an alert dialog
        Xrm.Navigation.openAlertDialog({ text: "Record saved." });
    }
}).call(Example);