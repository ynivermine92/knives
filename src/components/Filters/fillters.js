
const lowerSlider = document.querySelector('#lower');
const upperSlider = document.querySelector('#upper');
const sliderTrack = document.querySelector('.slider-track');
const inputOne = document.querySelector('#one');
const inputTwo = document.querySelector('#two');


if (lowerSlider && upperSlider && sliderTrack && inputOne && inputTwo) {

    const min = parseInt(lowerSlider.min);
    const max = parseInt(upperSlider.max);

    function updateTrack() {
        const lower = parseInt(lowerSlider.value);
        const upper = parseInt(upperSlider.value);
        
        const range = max - min;

        const left = ((lower - min) / range) * 100;
        const right = ((upper - min) / range) * 100;

        sliderTrack.style.left = left + '%';
        sliderTrack.style.width = (right - left) + '%';

        inputOne.value = lower;
        inputTwo.value = upper;
    }


    lowerSlider.addEventListener('input', () => {
        if (parseInt(lowerSlider.value) > parseInt(upperSlider.value) - 4) {
            lowerSlider.value = parseInt(upperSlider.value) - 4;
        }
        updateTrack();
    });

    upperSlider.addEventListener('input', () => {
        if (parseInt(upperSlider.value) < parseInt(lowerSlider.value) + 4) {
            upperSlider.value = parseInt(lowerSlider.value) + 4;
        }
        updateTrack();
    });

    updateTrack();
}