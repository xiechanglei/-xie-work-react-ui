
const englishFirstNames = [
    "John", "Jane", "Michael", "Emily", "Chris", "Jessica", "Matthew", "Ashley", "Joshua", "Amanda",
    "Daniel", "Sarah", "Andrew", "Laura", "David", "Megan", "James", "Hannah", "Joseph", "Olivia",
    "Ryan", "Sophia", "Brandon", "Alyssa", "Tyler", "Brittany", "Nicholas", "Samantha", "Jacob", "Victoria",
    "Zachary", "Rachel", "Ethan", "Alexis", "Nathan", "Kayla", "Justin", "Taylor", "Benjamin", "Lauren",
    "Alexander", "Nicole", "William", "Amber", "Anthony", "Stephanie", "Kevin", "Rebecca", "Thomas", "Michelle",
    "Jonathan", "Katherine", "Christian", "Elizabeth", "Austin", "Heather", "Dylan", "Melissa", "Samuel", "Kimberly",
    "Jordan", "Courtney", "Gabriel", "Erica", "Jose", "Jasmine", "Aaron", "Haley", "Adam", "Maria",
    "Jason", "Kaitlyn", "Cameron", "Shelby", "Kyle", "Morgan", "Eric", "Brooke", "Brian", "Mackenzie",
    "Steven", "Madison", "Sean", "Brianna", "Timothy", "Vanessa", "Cody", "Sierra", "Luke", "Sydney",
    "Jack", "Destiny", "Isaac", "Savannah", "Mason", "Alexa", "Evan", "Kelsey", "Elijah", "Paige"
];

const englishLastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
    "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
    "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
    "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
    "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
    "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
    "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez"
];

/**
 * 随机生成英文名称
 */
export const  randomEnglishName = () => {
    const firstName = englishFirstNames[Math.floor(Math.random() * englishFirstNames.length)];
    const lastName = englishLastNames[Math.floor(Math.random() * englishLastNames.length)];
    return `${firstName} ${lastName}`;
}