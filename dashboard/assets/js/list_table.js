var projects = []
database.collection("userData").onSnapshot((snapshot) => {
    $('#tableRows').empty()
    table = $('#custom-datatable').DataTable();

    table.destroy();
    snapshot.forEach((userData) => {
        var user = userData.data();
        console.log(user)
        // projects.push(project.projectName);
        var rowTemp = '<tr>';
        rowTemp += '<td>' + user.name + '</td>';
        rowTemp += '<td>' + user.role + '</td>';
        rowTemp += '<td>' + user.domain + '</td>';
        rowTemp += '<td class="text-right">';
        rowTemp += '<a href="update_user.html?id=' + userData.id + '" class="btn btn-sm btn-primary btn-icon-only rounded-circle mt-1 text-white" data-toggle="tooltip"  title="Edit">';
        rowTemp += '<i class="fa fa-pencil-alt"></i>';
        rowTemp += '</a>';
        rowTemp += '<button  data-id="' + userData.id + '" onClick="deleteProject(this);" class="btn btn-sm btn-danger btn-icon-only rounded-circle mt-1 text-white remove" data-toggle="tooltip"  title="Remove">';
        rowTemp += '<i class="fa fa-trash"></i>';
        rowTemp += '</button>';
        rowTemp += '</td>';
        rowTemp += '</tr>';
        $('#tableRows').prepend(rowTemp);
    });
    if (snapshot.docs.length == 0) {

        var rowTemp = '<tr role="row" class="topicDiv" >';
        rowTemp += '<td class="table-plus">There is no project at this time, please create one to start.</td>';
        rowTemp += '</tr>';
        $('#tableRows').prepend(rowTemp);
    }
    var DatatableBasic = (function () {
        var $dtBasic = $('#custom-datatable');
        function init($this) {
            var options = {
                keys: !0,
                select: false,
                language: {
                    paginate: {
                        previous: "<i class='fas fa-angle-left'>",
                        next: "<i class='fas fa-angle-right'>"
                    }
                },
            };
            var table = $this.on('init.dt', function () {
            }).DataTable(options);
        }
        if ($dtBasic.length) {
            init($dtBasic);
        }
    })();
    $("#spinner").css("display", "none");
});