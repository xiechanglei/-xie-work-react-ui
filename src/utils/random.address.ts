const streetNames = [
    "Main", "High", "Maple", "Oak", "Pine", "Cedar", "Elm", "Washington", "Lake", "Hill"
];

const streetTypes = [
    "St", "Ave", "Blvd", "Rd", "Ln", "Dr", "Pl", "Ct", "Terrace", "Way"
];

const cities = [
    "Springfield", "Riverside", "Centerville", "Greenville", "Fairview", "Madison", "Georgetown", "Salem", "Franklin", "Bristol"
];

const states = [
    "United States", "Canada", "Mexico", "Brazil", "Argentina", "United Kingdom", "France", "Germany", "Italy", "Spain",
    "China", "Japan", "South Korea", "India", "Australia", "New Zealand", "South Africa", "Egypt", "Nigeria", "Kenya",
    "Russia", "Ukraine", "Poland", "Netherlands", "Belgium", "Sweden", "Norway", "Denmark", "Finland", "Switzerland",
    "Turkey", "Saudi Arabia", "United Arab Emirates", "Israel", "Iran", "Pakistan", "Indonesia", "Thailand", "Vietnam", "Malaysia",
    "Philippines", "Singapore", "Bangladesh", "Sri Lanka", "Nepal", "Myanmar", "Cambodia", "Laos", "Mongolia", "Kazakhstan"
];
const zipCode = () => {
    return Math.floor(10000 + Math.random() * 90000).toString();
};

export const randomAddress = () => {
    const streetNumber = Math.floor(Math.random() * 1000) + 1;
    const streetName = streetNames[Math.floor(Math.random() * streetNames.length)];
    const streetType = streetTypes[Math.floor(Math.random() * streetTypes.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const state = states[Math.floor(Math.random() * states.length)];
    const zip = zipCode();

    return `${streetNumber} ${streetName} ${streetType}, ${city}, ${state} ${zip}`;
};