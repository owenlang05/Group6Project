module.exports = {  
  format_date: (timestamp) => {
    const date = new Date(timestamp);
    date.setFullYear(date.getFullYear());
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    return formattedDate;
  }
};