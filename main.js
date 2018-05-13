'use strict';

// Scrolling//////////////////////////////////////////////////////////////

//    about us button //////////////////////////
    var scrolledSection;
    var timerBot;
    var maxHeight =  document.documentElement.scrollHeight;

    document.getElementById('about_button').onclick = function() {
        
        scrolledSection = window.pageYOffset;
        scrollToSection();
    }

    function scrollToSection() {
        
        console.log(scrolledSection);
        if (scrolledSection < 700) {
            window.scrollTo (0, scrolledSection);
            scrolledSection = scrolledSection + 30;
            timerBot = setTimeout(scrollToSection, 20); 
        }
        else {
            clearTimeout(timerBot);
            window.scrollTo(0, 700);
        }
    }

    
//    service button//////////////////////////

    var scrolledSection2;
    var timerBot2;
    var maxHeight2 =  document.documentElement.scrollHeight;

    document.getElementById('services_button').onclick = function() {
        
        scrolledSection2 = window.pageYOffset;
        scrollToSection2();
    }

    function scrollToSection2() {
        
        console.log(scrolledSection2);
        if (scrolledSection2 < 1460) {
            window.scrollTo (0, scrolledSection2);
            scrolledSection2 = scrolledSection2 + 35;
            timerBot2 = setTimeout(scrollToSection2, 20); 
        }
        else {
            clearTimeout(timerBot2);
            window.scrollTo(0, 1460);
        }
    }

//    works_button//////////////////////////


var scrolledSection3;
var timerBot3;
var maxHeight3 =  document.documentElement.scrollHeight;

document.getElementById('works_button').onclick = function() {
    
    scrolledSection3 = window.pageYOffset;
    scrollToSection3();
}

function scrollToSection3() {
    
    console.log(scrolledSection3);
    if (scrolledSection3 < 2262) {
        window.scrollTo (0, scrolledSection3);
        scrolledSection3 = scrolledSection3 + 40;
        timerBot3 = setTimeout(scrollToSection3, 20); 
    }
    else {
        clearTimeout(timerBot3);
        window.scrollTo(0, 2262);
    }
}








