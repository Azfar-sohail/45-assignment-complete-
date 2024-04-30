//List of Current Users 
var current_users = ["Ali", "Eric", "Iqbal", "Fawad", "saad"];
//List of New Users
var new_users = ["Fatima", "Shahid", "Mustafa", "Mumtaz", "Shahid"];
new_users.forEach(function (user) {
    var our_condition = current_users.some(function (current_one) { return current_one.toLowerCase() === user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(user, " is already taken"));
    }
    else {
        console.log("This Username ".concat(user, " is available"));
    }
});
