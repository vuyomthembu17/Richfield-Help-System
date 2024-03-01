(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    $(document).ready(function() {
        const chatbotIcon = $("#chatbotIcon");
        const chatModal = $("#chatModal");
        const closeModal = $("#closeModal");
        const form = $("#chat-form");
        const input = $("#chat-input");
        const messages = $("#chat-messages");
        const apiKey = "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"; // Your OpenAI API key
    
        form.on("submit", async function(e) {
            e.preventDefault();
            const message = input.val();
            input.val("");
    
            messages.append(`
                <div class="message user-message">
                    <i class="fas fa-user"></i> <span>${message}</span>
                </div>
            `);
    
            // Use axios library to make a POST request to the OpenAI API
            try {
                const response = await axios.post(
                    "https://api.openai.com/v1/engines/davinci/completions",
                    {
                        prompt: message,
                        model: "text-davinci-003",
                        temperature: 0,
                        max_tokens: 1000,
                        top_p: 1,
                        frequency_penalty: 0.0,
                        presence_penalty: 0.0,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${apiKey}`,
                        },
                    }
                );
                const chatbotResponse = response.data.choices[0].text;
    
                messages.append(`
                    <div class="message bot-message">
                        <i class="fas fa-robot"></i> <span>${chatbotResponse}</span>
                    </div>
                `);
            } catch (error) {
                console.error("Error:", error);
            }
        });
    
        // ... rest of your existing code using jQuery ...
    });
    
    
    
    
    
})(jQuery);

