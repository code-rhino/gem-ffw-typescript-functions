"use strict";
function greetUser(user, currentTime) {
    const now = currentTime || new Date();
    const hour = now.getHours();
    const timeOfDay = hour < 12 ? "morning" : "evening";
    return `Good ${timeOfDay}, ${user.name}`;
}
const user1 = { name: "bob" };
const date1 = new Date('2024-02-26T19:00:00');
console.log(greetUser(user1, date1));
