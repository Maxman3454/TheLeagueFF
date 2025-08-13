/*   STEP 1   */
export const leagueID = "1237457156513480704"; // your league ID
export const leagueName = "The League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to The League!.</p>
  <p>Home of the greatest ongoing Fantasy rivalry known to West Hartford  .</p>
 
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
   {
       "managerID": "456659016873930752",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Max",
       "location": "Boston", // (optional)
     "bio": "Indoubbbbbbbitly Doomed!",
       "photo": "/managers/Max.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "lv", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "philosophy": "Dooomed",
    },
  {
       "managerID": "339998596667551744",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Dex",
       "location": "ChiTown", // (optional)
       "photo": "/managers/Dex.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    },
  {
    "managerID": "456661491362295808",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Brett",
    "bio": "oh Gooood!",
       "location": "CT", // (optional)
       "photo":"/managers/Brett.jpg", // square ratio recommended (no larger than 500x500)
          "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     },
    {
    "managerID": "456661629321342976",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Henry Glucksman",
       "location": "West Hartford", // (optional)
       "photo": "/managers/Henry.jpj", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     },
     {
    "managerID": "456661525369712640",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Benjamin",
       "location": "West Hartford", // (optional)
       "photo": "/managers/ben.JPG", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      },
   {
    "managerID": "456662506270617600",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Glassman",
       "location": "Boston", // (optional)
       "photo": "/managers/Adam.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      },
 {
    "managerID": "456663501805449216",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Matthew",
       "location": "NYC", // (optional)
       "photo": "/managers/Dunlap.JPG", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "cin", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      },
 {
    "managerID": "456675201908731904",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Justin",
       "location": "CT", // (optional)
       "photo": "/managers/Justin.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      },
  {
    "managerID": "456876779588546560",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Nosh",
       "location": "Chitown", // (optional)
       "photo": "/managers/Noah.JPEG", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      },
  {
    "managerID": "456879643417374720",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Freda",
       "location": "NYC", // (optional)
       "photo": "/managers/Harry.JPG", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      },
  {
    "managerID": "457262600254648320",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Jeter",
       "location": "NYC", // (optional)
       "photo": "/managers/Chase.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
   },
  {
    "managerID": "458148728809713664",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Dylan",
       "location": "NYC", // (optional)
       "photo": "/managers/Dylan.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      }
];
