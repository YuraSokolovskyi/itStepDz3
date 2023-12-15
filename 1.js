const movies = {
    action: ["Die Hard", "John Wick", "The Matrix"],
    comedy: ["The Hangover", "Bridesmaids", "Step Brothers"],
    drama: ["The Shawshank Redemption", "The Godfather", "Schindler's List"],
    horror: ["The Shining", "A Nightmare on Elm Street", "The Exorcist"],
};

let choice = prompt("action, comedy, drama, horror")
for (let i of movies[choice]) console.log(i)