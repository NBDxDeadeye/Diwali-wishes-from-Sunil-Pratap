let list=[
    "May this Diwali light up your life with numerous numbers of joy and delightful moments! Enjoy this festive to your fullest, and remember to say your prayers to Lord. Happy Diwali!",
    "Happy Diwali! Wishing the light of the lamp brighten up your life and guide you, always.",
    "Wishing this Diwali brings you all kinds of prosperity in your life. May God bless you with sound health and joyous moments. Happy Diwali.",
    "Hope all the lights of this year’s Diwali enter through the darkest of rooms and bring the brightest of light into your life. I hope you achieve all your dreams. Happy Diwali!", "Let yourself be seeped away by the joy this divine festival has brought once again. Forget your problems, for they will vanish before the happiness of this Diwali!", "On this beautiful occasion of Diwali, I wish for new opportunities, new hopes, and new kinds of happiness for you. I love you so much. Happy Diwali."
];
let list1=[]
function myfunction(){
    const quoteindex= parseInt(Math.random()*list.length);
    document.getElementById("generate").innerHTML= list[quoteindex];
}