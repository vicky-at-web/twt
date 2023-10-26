const tweets = document.querySelector('#submit');
const allTweets = document.querySelector('#allTweets');

tweets.addEventListener('submit', function (e) {
   
    e.preventDefault(); 
    const user = tweets.elements.in;
    const tweet = tweets.elements.pass;
    addTweet(user.value, tweet.value);
    user.value = '';
    tweet.value = '';

});

const addTweet  = (user, tweet) =>{
    const newTweet = document.createElement('li');
    const bTag= document.createElement('b');
    bTag.append(user);
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`);
    allTweets.append(newTweet);
}

 