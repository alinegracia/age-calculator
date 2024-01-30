function calculateAge() {
    const day = document.getElementById('day').value.trim();
    const month = document.getElementById('month').value.trim();
    const year = document.getElementById('year').value.trim();

    const emptyDay = document.getElementById('empty-day');
    const emptyMonth = document.getElementById('empty-month');
    const emptyYear = document.getElementById('empty-year');

    const monthError = document.getElementById('valid-month');
    const yearError = document.getElementById('valid-year');
    const dayError = document.getElementById('valid-day');

    const currentYear = new Date().getFullYear();

    if (!day || !month || !year) {
        if (!day) {
            emptyDay.style.display = 'block';
        } else {
            emptyDay.style.display = 'none';
        }
    
        if (!month) {
            emptyMonth.style.display = 'block';
        } else {
            emptyMonth.style.display = 'none';
        }
    
        if (!year) {
            emptyYear.style.display = 'block';
        } else {
            emptyYear.style.display = 'none';
        }
    } else {
        emptyDay.style.display = 'none';
        emptyMonth.style.display = 'none';
        emptyYear.style.display = 'none';
    }

    const dayValue = parseInt(day);
    const monthValue = parseInt(month);
    const yearValue = parseInt(year);

    //Check if the month is correct
    if (monthValue < 1 || monthValue > 12 || isNaN(monthValue)) {
        monthError.style.display = 'block';
    } else {
        monthError.style.display = 'none';
    }

    //Check if the year input is correct
    if (yearValue > currentYear || isNaN(yearValue)) {
        yearError.style.display = 'block';
    } else {
        yearError.style.display = 'none';
    }

    // Additional validations for days based on month and year
    let maxDays = 31;

    if (monthValue === 4 || monthValue === 6 || monthValue === 9 || monthValue === 11) {
        maxDays = 30;
    } else if (monthValue === 2) {
        maxDays = (yearValue % 4 === 0) ? 29 : 28;
    }

    if (dayValue < 1 || dayValue > maxDays || isNaN(dayValue)) {
        dayError.style.display = 'block';
    } else {
        dayError.style.display = 'none';
    }

    const birthDate = new Date(yearValue, monthValue - 1, dayValue);
    const currentDate = new Date();
    
    const ageInMilliseconds = currentDate - birthDate;

    // Calculate age in years, months, and days
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    const yearResult = document.getElementById('age-year');
    const monthResult = document.getElementById('age-month');
    const dayResult = document.getElementById('age-day');

    if(monthError.style.display === 'none' && yearError.style.display === 'none' && dayError.style.display === 'none') {
        yearResult.innerText = years;
        monthResult.innerText = months;
        dayResult.innerText = days;
    } else {
        yearResult.innerText = '--';
        monthResult.innerText = '--';
        dayResult.innerText = '--';
    }

}