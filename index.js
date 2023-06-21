let name = prompt('Как вас зовут?')



switch (name) {
    case 'Alex':
        let account = prompt('Номер счета?')
        switch (account) {
            case '7777':
                let money = prompt('Сколько обналичить?');
                if (money <= 10000) {
                    alert('Все отлично. Вы обналичили' + ' ' + money)
                    let substruction = 10000 - money;
                    alert(`У вас осталось ${substruction}`);
                } else {
                    alert('Недостаточно средств.')
                }
                break;

            default:
                alert(`Обнаружена попытка взлома! IP злоумышоинника занесено в базу данных! Вам *****)`)


        }
        break;
    default:
        alert(`Пользователь не найден. Досвидули).`)
}



let name_inClub = prompt('Добро подаловать в наш клуб. Будут приняты только тех, чьи имена начинается на А')
let age = prompt('Сколько вам лет?')



if (age > 20 && age <= 40 && money > 100) { 
    let quantity = prompt('Вас сколько?');
   if(full_people > 10 && occupite === 8) {
  
   }
} 

