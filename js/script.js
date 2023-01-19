let nameUser = prompt('What is your name?')
let ageUser = prompt('How old are you?')

let user = {
    name: nameUser,
    age: Number(ageUser)

}
let nameUser2 = prompt('What is your name?')
let ageUser2 = prompt('How old are you?')

let user2 = {
    name: nameUser2,
    age: Number(ageUser2)
}
let str = 'dan katta',
    str2 = 'Ularning yoshlari teng',
    str3 = 'dan kichik'
    emp = ' '

if(user.age > user2.age){
    result = user.name + emp + user2.name + str
    alert(result)
}else if(user.age >! user2.age){
    result = user.name + emp + user2.name + str3
    alert(result)
}else if(user.age == user2.age){
    alert(str2)
}else{
    alert('You have not enter any information')
}