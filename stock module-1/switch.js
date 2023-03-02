let day="holyday"
switch(day){
    case'monday':
    console.log('4am')
    break;
    case'tuesday':
    case'wednesday':
    case'thursday':
    console.log('7am')
    break;
    case'friday':
    console.log('8am')
    break;
    case'satarday':
    case'sunday':
    console.log('9am')
    break;
    default:
        console.log('7am-watch TV')
}