var index = 1;

// Literally just captions
var caption = [

    // Dead caption for Array Index = 0
    "Nope Nope Nope...",
    
    "Beautiful natural light and light earthtones create a lot of warmth, but the flat ceiling and floor create a 'cave' effect.",
    "Combining various textures and patterns can create eye-catching rooms.",
    "Here you can see how the relief cuts added to the ceiling keep it appearing elevated to the eye.",
    "Exposed wood, dark furniture, and the rust brown accent wall on the right bring warmth to what would otherwise be a very cold feeling apartment.",
    "Warm and Rustic, like a proper cabin should be.",
    "Instead of 'cooling' it down, the rich blues actually brighten up this sitting room.",
    "Clean lines and well-defined spaces are possible in open floorplans, as demonstrated by this exemplary Japanese apartment.",
    "As much as I love nook cabinetry, fireplaces need to be centered in a room or the eye jumps around, making a room feel 'off.'",
    "Now THIS is a Sun Room.",
    "Here you can see how centered and aligned furniture makes a room look settled and inviting.",
    "Intersting furniture makes interesting rooms. That striped Ottoman adds a lot of dimension and movement.",
    "I've always loved cream fabrics complimeted with dark woods. The combo creates contrast without leaving the room feeling cold and sterile.",
    "Modern Brooklyn apartmet: Exposed Brick, sophisticated kitchen decor, and complimentary furniture. My only complaint is, again, the flat ceiling makes the room feel enclosed.",
    "Borrowing the clean, flowing lines of Japanese architecture helps define a space without making it feel restricted.",
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
