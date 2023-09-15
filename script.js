
// Client 
const token = 'BQC48k37fB7sM33WdoUcj3rmN5KB8fk3SlyaanO858n-z1T5imUm0LMMFlPWXTCZfmU4diMtY7yX_25L8nP7UKXQIEtJ0fkudyit1c2eFE6gPJ0ukt81HepQXJ40RenGSuFdjZGvYU4RPswrBPMAbjm7piTd6MMeryquMFCnEgI6AROx007-YRXTylD-e__4miaZgMieDBK0HORLYNmX2YcrkAcdce7CdraKHFxmuvBs4Cqju2hKIp7xFafAsnDYHf5Ha60Y-4I-K2MxXNPaq-xe';
 const url = "https://api.spotify.com/v1/artists?ids=2GoeZ0qOTt6kjsWW4eA6LS%2c7hHDO4bJGlEaEHlY2lj1eZ%2c4YRxDV8wJFPHPTeXepOstw%2c7uIbLdzzSEqnX0Pkrb56cR%2c7n2wHs1TKAczGzO7Dd2rGr%2c0C8ZW7ezQVs4URX5aX7Kqx%2c0oOet2f43PA68X5RxKobEy%2c2o4R2rK7FetH40HTv0SUWl%2c00sCATpEvwH48ays7PlQFU%2c4zCH9qm4R2DADamUHMCa6O"

const request = new Request(
    url,{
        headers:{
            'Authorization': `Bearer ${token}`
        },
})

 
async function getData() {
    try {
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
        
        // Get the data-container element
        const dataContainer = document.getElementById("data-container");

        // Create an HTML structure to display the data (modify as needed)
        const artistList = document.createElement("ul");

        // Loop through the data and create list items for each artist
        data.artists.forEach(artist => {
            const listItem = document.createElement("li");
            listItem.textContent = `Artist Name: ${artist.name}, Popularity: ${artist.popularity}`;
            artistList.appendChild(listItem);
        });

        // Append the artistList to the data-container
        dataContainer.appendChild(artistList);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
getData()