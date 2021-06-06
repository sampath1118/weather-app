const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real = document.getElementById("temp_real");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector('.middle_layer');


const getInfo = async(event) => {
    event.preventDefault();
    const cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = "Please Enter Your City Name";
        datahide.classList.add('data_hide');
    }else{
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=656a8eba495fdf0c75895bb107971894`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real.innerText = arrData[0].main.temp;

            //weather condition checking
            const tempMood = arrData[0].weather[0].main;
            if (tempMood == "Clear") {
                temp_status.innerHTML = '<i class="fas fa-sun" style="color: #eccc68;"></i>';
            }else if (tempMood == "Clouds") {
                temp_status.innerHTML = '<i class="fas fa-cloud" style="color: #f1f2f6;"></i>';
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = '<i class="fas fa-rain" style="color: #a4b0be;"></i>'
            }else{
                temp_status.innerHTML = '<i class="fas fa-sun" style="color: #eccc68;"></i>';
            }
            datahide.classList.remove('data_hide');
        } catch (error) {
            city_name.innerText = "Please Enter The Proper City Name";
            datahide.classList.add('data_hide');
        }
    }
    
}

submitBtn.addEventListener('click', getInfo);

const getCurrentDay = () => {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wendnesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let days = weekday[currentTime.getDay()];

    const day = document.getElementById("day");
    day.innerText = days;
}
getCurrentDay();

// const getExactDate = () => {
//     const months = [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//     ];
//     const dateNow = new Date();
//     const month = months[dateNow.getMonth() + 1];
//     const day = dateNow.getDate();

//     return `${month}/${day}`;
// }
// // getExactDate();

// const todaydate = document.getElementById('today_date');
// todaydate.innerHTML = getExactDate();