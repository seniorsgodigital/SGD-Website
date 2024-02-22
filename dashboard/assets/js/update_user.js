const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get('id');
if (userId != "") {
    database.collection("userData").doc(userId).get().then((snapshot) => {
        var user = snapshot.data();
        $("#user_name").val(user.name);
        $("#user_role").val(user.role);
        $("#user_domain").val(user.domain);
        console.log(user)
    });
    $("#updateUser").click(function () {
        var user_name = $("#user_name").val();
        var user_role = $("#user_role").val();
        var user_domain = $("#user_domain").val();
        var dataObj = {
            name: user_name,
            role: user_role,
            domain: user_domain
        }
        database.collection("userData").doc(userId).update(dataObj).then(function (dataUpdated) {
            swal({
                title: 'User Updated successfully, You will be redirected to the Users List',
                type: 'success',
                showCancelButton: false,
                confirmButtonClass: 'btn btn-success'
                // cancelButtonClass: 'btn btn-danger'
            });

            setTimeout(function () {
                window.location.href = 'list_table.html';
            }, 3000);
        })
    });
}
