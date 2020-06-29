function basicTeenager(age) {
    if (13 <= age && age <= 19){
      return "You are a teenager!";
  }
}

  function teenager(age) {
    if (13 <= age && age <= 19){
      return "You are a teenager!";
     } else {
        return "You are not a teenager";
      }
  }
  teenager(14)

  function ageChecker(age) {
    if (13 <= age && age <= 19){
      return "You are a teenager!";
    } else if (12 >= age) {
      return "You are a kid";
    }  else {
        return "You are a grownup";
  }
  }
ageChecker (14)


  function ternaryTeenager(age) {
    return (13 <= age && age <= 19) ? 'You are a teenager' : 'You are not a teenager'
  }
ternaryTeenager(14)


function switchAge(age) {
    switch (age) {
      case (13 <= age && age <= 19):
        console.log('You are a teenager');
        break;
      default:
        console.log('You have an age');

    }
}
switchAge(12);
