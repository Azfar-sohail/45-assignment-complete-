//List of Current Users 
let current_users = ["Ali", "Eric", "Iqbal", "Fawad", "saad"]
//List of New Users
let new_users = ["Fatima", "Shahid", "Mustafa", "Mumtaz", "Shahid"];

new_users.forEach(user => {
    let our_condition = current_users.some(current_one=> current_one.toLowerCase() === user.toLowerCase()) 
    if (our_condition) {
        console.log(`Sorry ${user} is already taken`);

    }else{
        console.log(`This Username ${user} is available`);
    }
})


