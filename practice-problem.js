var items = ['Laptop', 'Mouse','NoteBook', 'Books','Mumput','Looking Glass'];

for(var i=0; i< items.length; i++){
    var item = items[i];
    if(item.length % 2 ==0){
        console.log('This word is Even :'+' '+ item)
    }
    else{
        console.log('This word is Odd :'+' '+ item)
    }
}

var friends =['Antik', 'Mahabur', 'Nur', 'Atik','Mahim'];

for(var i=0; i<5; i++){
    var friend = friends[i];
    if(friend.length % 2 ==0){
        console.log('Name is Even :'+' '+ friend)
    }
    else{
        console.log('Name is Odd :'+' '+ friend)
    }
}