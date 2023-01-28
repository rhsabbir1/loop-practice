var numbers = [12, 22, 33, 44, 55, 66, 77, 120, 5,6 ,455];

for(var i=0; i<7; i++){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number)
}

var items = ['Laptop', 'Mouse','NoteBook', 'Books','Mumput','Looking Glass'];

for(var i=0; i< items.length; i++){
    var item = items[i];
    if(item == 'Books'){
        break;
    }
    console.log(item)
    // console.log(i)
}