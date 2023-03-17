let daysOfWeek = {
    'понедельник': 'monday',
    'вторник': 'tuesday',
    'среда': 'wednesday',
    'четверг': 'thursday',
    'пятница': 'friday',
    'суббота': 'saturday',
    'воскресенье': 'sunday'
  };

  const translate = (string, object) => {
    let result = `${string} по-английски: ${object[string]}`
    return result
  }

  console.log(translate('понедельник', daysOfWeek))