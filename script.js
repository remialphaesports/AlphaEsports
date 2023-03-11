var app = new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "What is Alpha eSports?",
                headlineSecondLine: "",
                content: "Alpha eSports is a clan alliance based on the game Clash Of Clans. Founded in 2018 by Junayd, we are a friendly community who work together and help each other out! We have a clan for everyone. From chilled and laid back to competetitive clans, we have a clan that is suited for you.",
                sublineFirstLine: "Hindustan 2.0",
                sublineSecondLine: "Alpha eSports",
                bgImg: "Gradient1.png",
                rectImg: "Blue-Pink.jpg"
            },
            {
                headlineFirstLine: "What do we provide?",
                headlineSecondLine: "",
                content: "We have a great Discord server with a friendly community. We host events too with many prizes! We have a range of great clans from clans owned by Alpha and independently run clans as well. We value everyone's feedback and we would love to have you with us! ",
                sublineFirstLine: "Hindustan 2.0",
                sublineSecondLine: "Alpha eSports",
                bgImg: "Gradient2.png",
                rectImg: "red.png"
            },
            {
                headlineFirstLine: "How can you join?",
                headlineSecondLine: "",
                content: "What are you waiting for? Click on the link to our Discord server and create a ticket! We would love to have you with us. Until then, see you later chief!",
                sublineFirstLine: "Hindustan 2.0",
                sublineSecondLine: "Alpha eSports",
                bgImg: "Gradient3.png",
                rectImg: "green.png"
            }
        ]
    },
  mounted: function () {
    var productRotatorSlide = document.getElementById("app");
        var startX = 0;
        var endX = 0;

        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchend", function(event) {
            var threshold = startX - endX;

            if (threshold < 150 && 0 < this.currentSlide) {
                this.currentSlide--;
            }
            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
        }.bind(this));
  },
    methods: {
        updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
        }
    }
})
