
function filterGallery(category) {

    let images = document.getElementsByClassName("gallery-item");

    for (let i = 0; i < images.length; i++) {

        if (category == "all") {
            images[i].style.display = "block";
        }

        else if (images[i].classList.contains(category)) {
            images[i].style.display = "block";
        }

        else {
            images[i].style.display = "none";
        }
    }
}


function calculateBudget() {

    let expenses = document.getElementsByClassName("expense");

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {

        let amount = Number(expenses[i].value);

        if (amount > 0) {
            total = total + amount;
        }
    }

    document.getElementById("total").innerHTML =
        "Total Budget: ₹" + total;
}



let guests = JSON.parse(localStorage.getItem("guests")) || [];

function displayGuests() {

    let list = document.getElementById("guestList");

    let count = document.getElementById("guestCount");

    if (list == null || count == null) {
        return;
    }

    list.innerHTML = "";

    count.innerHTML = guests.length;

    for (let i = 0; i < guests.length; i++) {

        let li = document.createElement("li");

        li.innerHTML = guests[i];

        list.appendChild(li);
    }
}

function addGuest() {

    let input = document.getElementById("guestName");

    let name = input.value.trim();

    if (name == "") {
        alert("Please enter guest name!");
        return;
    }

    guests.push(name);

    localStorage.setItem("guests", JSON.stringify(guests));

    input.value = "";

    displayGuests();
}

displayGuests();


let bookingForm = document.getElementById("bookingForm");

if (bookingForm != null) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;

        let email = document.getElementById("email").value;

        let phone = document.getElementById("phone").value;

        if (name == "" || email == "" || phone == "") {

            alert("Please fill all required details!");

        }

        else if (!/^[0-9]{10}$/.test(phone)) {

            alert("Please enter a valid 10-digit phone number!");

        }

        else {

            document.getElementById("bookingResult").innerHTML =
                "Thank you " + name + "! Your booking enquiry has been submitted.";

            bookingForm.reset();
        }
    });
}
