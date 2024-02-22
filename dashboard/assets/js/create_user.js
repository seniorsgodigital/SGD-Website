$("#createUser").click(function () {

    var user_name = $("#user_name").val();
    var user_role = $("#user_role").val();
    var user_domain = $("#user_domain").val();


    // finally adding project
    var newUsersRef = database.collection("userData").doc();
    var userId = newUsersRef.id;
    var dataObj = {
        name: user_name,
        role: user_role,
        domain: user_domain,
        id: userId
    }
    console.log(dataObj);
    newUsersRef.set(dataObj).then(function (dataCreated) {
        // console.log(dataCreated.id)
        // pop-up
        swal({
            title: 'New User created successfully, You will be redirected to the Users List',
            type: 'success',
            showCancelButton: false,
            confirmButtonClass: 'btn btn-success'
            // cancelButtonClass: 'btn btn-danger'
        });

        setTimeout(function () {
            window.location.href = 'list_table.html';
        }, 3000);
    })
        .catch(function (error) {
            swal({
                type: 'error',
                title: 'User not Created due to some error'
            });
            console.log("User not Created due to: ", error);
        });
});