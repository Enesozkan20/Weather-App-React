const getWeatherData = async (city) => {
    try {
        // Parametre verilen şehir adına göre api isteği at
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b49b09b99f6f6f21e2df46e3a3d335e7&units=metric`);

        // Gelen veriyi js nesnesine çevir
        const data = await response.json();

        // Api'dan gelen veriyi return et
        return data;
    }


    catch (error) {
        alert(`Hata:${error}`)
    }
};



export default getWeatherData;