const getMonth = () => {
  const months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ]
    return months[new Date().getMonth()] + ' ' + new Date().getFullYear()
}

export default getMonth