const country_Name = document.getElementById("country_Name")
const Search = document.getElementById("Search")
const all_Data = document.getElementById("all_Data")
const error = document.getElementById("error")

Search.addEventListener("click", corona_Data)

async function corona_Data() {

    const country = country_Name.value.trim()

    error.textContent = ""
    all_Data.innerHTML = ""

    if (!country) {
        error.textContent = "Please enter a country name"
        return
    }

    const url = `https://disease.sh/v3/covid-19/countries/${country}`

    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error("Country not found")

        const result = await response.json()

       all_Data.innerHTML = `
    <div class="w-full flex justify-center mt-6">
        <div class="block max-w-sm p-6 border border-transparent rounded-xl  text-center">
            <img class="rounded-sm mx-auto" src="${result.countryInfo.flag}" alt="${result.country}" />

            <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                Country : ${result.country}
            </h5>

            <p class="mb-6 text-body">Total cases : ${result.cases}</p>
            <p class="mb-6 text-body">Total deaths : ${result.deaths}</p>
            <p class="mb-6 text-body">Active cases : ${result.active}</p>
        </div>
    </div>
`

    } catch (err) {
        error.textContent = "Country not found"
        console.log(err)
    }
}
