const getDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    while (start <= end) {
        start.setDate(start.getDate() + 1);
    }
}

// 시작 날짜 ~ 종료 날짜
function makeRandomDate() {
    this.classList.remove('show');

    const [start, end] = [...document.querySelectorAll("input")].map(v => v.value);

    if (!start) {
        return alert("시작일을 선택해주세요.");
    }

    if (!end) {
        return alert("종료일을 선택해주세요.");
    }

    if (start > end) {
        return alert("시작일은 종료일보다 작아야합니다.");
    }
    const TIME_ZONE = 3240 * 10000;

    const date = getDateRange(start, end);

    this.classList.add('show');
    this.innerHTML = date.map(x => `<p>${x}</p>`).join('');
}