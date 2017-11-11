var index = 1;

// Literally just captions
var caption = [

    // Dead caption for Array Index = 0
    "Nope Nope Nope...",
    
    "Caption 1",
    "Caption 2",
    "Caption 3",
    "Caption 4",
    "Caption 5",
    "Caption 6",
    "Caption 7",
    "Caption 8",
    "Caption 9",
    "Caption 10",
    "Caption 11",
    "Caption 12",
    "Caption 13",
    "Caption 14",
];

// Arrow cycling functionality
$(".right").click(function(){
    index++;
    if (index > 14){
    index = 1;
    }

    // Index values correspond directly to numerical filenames 
    $("img").attr("src", "img/" + index + ".jpg");
    
    // Captions change with photos according to Index value
    $('.caption').html(caption[index]);
});

$(".left").click(function(){
    index--;
    if (index < 1){
    index = 14;
    }
    $("img").attr("src", "img/" + index + ".jpg");
    $('.caption').html(caption[index]);
});
