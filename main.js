let age = parseInt(prompt('Saisissez ton age ?'));

if(isNaN(age)){
    alert(`L'age est invalide !`);
} else {
    switch(true){
        case (age >=0 && age <= 14):
            alert(`0 à 14 ans => Enfants`);
            break;
        case (age >= 15 && age <= 14):
            alert(`15 à 25 ans => Adolescents`);
            break;
        case(age >= 26 && age<=64):
            alert(`26 à 64 => adultes`);
            break;
        case(age >= 65):
            alert(`65ans et plus => Ainés`);
            break;
    }
}