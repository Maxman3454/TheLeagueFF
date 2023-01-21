/*   STEP 1   */
export const leagueID = "846605194857947136"; // your league ID
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
       "name": "Max Berman",
       "location": "Boston", // (optional)
       "photo": "/managers/Max.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "oak", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "favoritePlayer": 1718, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    },
  {
       "managerID": "339998596667551744",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Dexter McCann",
       "location": "ChiTown", // (optional)
       "photo": "/managers/Dex.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    },
  {
    "managerID": "456661525369712640",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Brett Berman",
       "location": "Storrs", // (optional)
       "photo": "/managers/Brett.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "favoritePlayer": 4217, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "Bio": "Ohhh gooood!", 
     },
    {
    "managerID": "456662506270617600",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Henry Glucksman",
       "location": "West Hartford", // (optional)
       "photo": "/managers/Henry.jpg", // square ratio recommended (no larger than 500x500)
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "favoritePlayer": 642, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     },
  ]
