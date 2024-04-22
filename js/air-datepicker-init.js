let calendar = new AirDatepicker('#datetime-period', {
    inline: true,
    range: true,
    multipleDatesSeparator: ' - ',
    onSelect({date})  {
        if (date.length === 0) {
            document.getElementById('datetime-start').value = ''
            return
        }
        if (date.length == 2) {
            let lastDate = date[1]
            lastDate.setDate(lastDate.getDate() + 1)
            document.getElementById('datetime-start').value = calendar.formatDate(lastDate, "dd.MM.yyyy")
        } else {
            let lastDate = date[0]
            lastDate.setDate(lastDate.getDate() + 1)
            document.getElementById('datetime-start').value = calendar.formatDate(lastDate, "dd.MM.yyyy")
        }
    }
})