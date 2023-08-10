$(function () {
    let today = new Date();

    let year = today.getFullYear();
    let twelveYear = today.getFullYear() - 1;
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let threeMonth = ('0' + (today.getMonth() - 2)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);


    let startDate = year + '-' + threeMonth + '-' + day;
    let endDate = year + '-' + month + '-' + day;

    document.getElementById('start_date').value = startDate;
    document.getElementById('end_date').value = endDate;

    $('#threeBtn').click(function () {
        let threeMonth = ('0' + (today.getMonth() - 2)).slice(-2);
        let dateString = year + '-' + threeMonth + '-' + day;
        document.getElementById('start_date').value = dateString;
    });

    $('#sixBtn').click(function () {
        let threeMonth = ('0' + (today.getMonth() - 5)).slice(-2);
        let dateString = year + '-' + threeMonth + '-' + day;
        document.getElementById('start_date').value = dateString;
    });

    $('#twelveBtn').click(function () {
        let twelveYear = today.getFullYear() - 1;
        let dateString = twelveYear + '-' + month + '-' + day;
        document.getElementById('start_date').value = dateString;
    });


    let buttons = document.querySelectorAll('.date_btn > button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.active')?.classList.remove('active');
            button.classList.add('active');
        });
    });
});