function calculateLifeDuration() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    
    if (isNaN(birthdate.getTime())) {
        alert('Please enter a valid date.');
        return;
    }

    const diffTime = today - birthdate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffYears = Math.floor(diffDays / 365.25);
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

    document.getElementById('days').innerText = `Days lived: ${diffDays}`;
    document.getElementById('weeks').innerText = `Weeks lived: ${diffWeeks}`;
    document.getElementById('years').innerText = `Years lived: ${diffYears}`;
    document.getElementById('hours').innerText = `Hours lived: ${diffHours}`;
}