function handleData(form) {
  const birthDate = new Date(form.date.value);
  const dateNow = new Date();

  const day = birthDate.getDate();
  const mounth = birthDate.getMonth();
  const year = birthDate.getFullYear();

  let dayName = "";
  switch(birthDate.getDay()) {
    case 0: dayName = "воскресенье"; break;
    case 1: dayName = "понедельник"; break;
    case 2: dayName = "вторник"; break;
    case 3: dayName = "среда"; break;
    case 4: dayName = "четверг"; break;
    case 5: dayName = "пятница"; break;
    case 6: dayName = "суббота"; break;
  }

  let nextBirthDate = new Date(`${mounth + 1}-${day}-${dateNow.getFullYear()}`);
  if (dateNow > nextBirthDate) 
    nextBirthDate = new Date(`${mounth + 1}-${day}-${dateNow.getFullYear() + 1}`);
  
  let remainigSeconds = nextBirthDate / 1000 - dateNow / 1000;
  let remainigHours = parseInt(remainigSeconds / 3600);

  const text = `Я, студент группы ${form.group.value} ${form.name.value}, ` +
            `родился ${day}/${mounth + 1}/${year}, это был день ${dayName}. ` +
            `Я учусь на ${form.course.value} курсе. До моего дня рождения осталось ${remainigHours} часов;`;

  let modalBody = document.querySelector(".modal.result .modal-body");
  modalBody.innerHTML = text;

  document.querySelector(".modal.data").style.display = "none";
  document.querySelector(".modal.result").style.display = "block";
}