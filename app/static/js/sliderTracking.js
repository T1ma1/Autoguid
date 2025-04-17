export function sliderTracking(rangeElems) {
  rangeElems.forEach(([rangeLeftSelector, rangeRightSelector, inputLeftSelector, inputRightSelector]) => {
    if(rangeLeftSelector || rangeRight || inputLeft || inputRight) {
    
      const minRange =  document.querySelector(rangeLeftSelector) 
      const maxRange =  document.querySelector(rangeRightSelector) 
      const minInput =  document.querySelector(inputLeftSelector) 
      const maxInput =  document.querySelector(inputRightSelector) 

      if (minRange && maxRange) {

        minRange.addEventListener('input', () => {
          minInput.value = minRange.value;
          maxRange.setAttribute('min', +minRange.value + 1);
          setLocalStorage(minInput.id, minInput.value);
        });

        maxRange.addEventListener('input', () => {
          maxInput.value = maxRange.value;
          minRange.setAttribute('max', +maxRange.value - 1);
          setLocalStorage(maxInput.id, maxInput.value);
        });
    
        if(localStorage.getItem('filterData')) {
          const filterData = JSON.parse(localStorage.getItem('filterData'));
          const {
            'price-min': priceMin = '',
            'price-max': priceMax = '',
            'duration-max': durationMax = '',
            'duration-min': durationMin =''
          } = filterData;

          const inputMap = {
            'price-min': { input: minInput, range: minRange, value: priceMin },
            'price-max': { input: maxInput, range: maxRange, value: priceMax },
            'duration-min': { input: minInput, range: minRange, value: durationMin },
            'duration-max': { input: maxInput, range: maxRange, value: durationMax },
          };
        
          Object.entries(inputMap).forEach(([id, { input, range, value }]) => {
            if (input.id === id) {
              input.value = value;
              range.value = value;
            }
          });
        }
      }
    }
  });
}

const rangeElems = [
  ['.duration #range-left', '.duration #range-right', '#duration-min', '#duration-max'],
  ['.price #range-left', '.price #range-right', '#price-min', '#price-max'],
];
sliderTracking(rangeElems);

const fieldValue = localStorage.getItem('filterData')? JSON.parse(localStorage.getItem('filterData')) : {};

function setLocalStorage(id, value) {
  fieldValue[id] = value;
  const json = JSON.stringify(fieldValue);
  localStorage.setItem('filterData', json);
};