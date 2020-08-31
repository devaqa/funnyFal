
let falls = [
    'یک کوشاد بیش نیستی',
    'پیش کو خود خو',
    'چره معطلی',
    'قد تولغی پیش شو',
    'الی سنگ ده جای خو گیرنگ',
    'آو هم ده یک جای گنده موشه، چره معطلی ،‌هله',
    'الی اموته فال تو خوبشی استه که پرسان نکو،‌قد تولغه خو  پیش شو',
    'ده فکر کس نشو، هر رقم دل تو میخوایه اموته کو',
    'خوب نیه، منتظر باش',
    'الی بور یک وضو کیده،‌نماز کو ،‌باز بیه، ای رقم نموشه، باید پاک باشی',

]


let button = document.getElementById('fallButton');
let fall = document.getElementById('fall');

function fallSelector(){
    let randomfall = Math.floor(Math.random()*  falls.length)
    return falls[randomfall]
}

function showFall(){
    fall.innerHTML = fallSelector();
}


button.addEventListener('click', showFall);