function volume_sphere(event) {
	//Write your code here
    event.preventDefault();  // Prevent form submission

    // Retrieve the radius value from the input field
    let radius = document.getElementById('radius').value;

    // Validate the input: convert it to a number and check if it is non-negative
    radius = parseFloat(radius);
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
    }

    // Calculate the volume of the sphere
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);

    // Round the volume to four decimal places
    volume = volume.toFixed(4);

    // Display the calculated volume in the output field
    document.getElementById('volume').value = volume;
}

// Set up the form submission event listener to call volume_sphere
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
}
