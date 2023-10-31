const Usuarios = {
    Savio: {
        UserName: "Savio Mendes",
        User: "@sávio_mendes",
        ProfilePicture: "src/Sávio Mendes.jpeg"
    },
    ElonMusk: {
        UserName: "Elon Musk",
        User: "@elonmusk",
        ProfilePicture: "src/Default_pfp.png"
    }
}

let Tweets = [
    {
        Id: 0,
        User: Usuarios.Savio,
        Tweet: "Hello World!!!"
    }

]

updateListTweets();

function CreateTwite(User) {
    const textarea = document.getElementById('Main-BoxWriteTwite-BoxInput-Input');
    const Content = textarea.value;
    if (Content) {
        textarea.value = ""
        adicionarTweet(User, Content)
        updateListTweets();
    }
}

function adicionarTweet(User, Content) {
    const newTweet = {
        Id: Tweets.length,
        User: User,
        Tweet: Content,
    }
    Tweets.push(newTweet);
}

function updateListTweets() {
    const TweetsContainer = document.getElementById('Main-Tweets');
    TweetsContainer.innerHTML = ""

    Tweets.forEach(function (tweet) {
        // Criar o elemento <li> com a classe "Main-Tweets-Tweet" e o ID "2"
        const tweetLi = document.createElement('li');
        tweetLi.className = 'Main-Tweets-Tweet';
        tweetLi.id = tweet.Id;

        // Criar a imagem do perfil
        const userPictureImg = document.createElement('img');
        userPictureImg.className = 'Main-Tweets-Tweet-UserPicture';
        userPictureImg.src = tweet.User.ProfilePicture;
        userPictureImg.alt = 'ProfilePicture';

        // Criar a div com a classe "Main-Tweets-Tweet-Content"
        const tweetContentDiv = document.createElement('div');
        tweetContentDiv.className = 'Main-Tweets-Tweet-Content';

        // Criar a div com a classe "Main-Tweets-Tweet-Content-UserInfo"
        const userInfoDiv = document.createElement('div');
        userInfoDiv.className = 'Main-Tweets-Tweet-Content-UserInfo';

        // Criar o elemento <h1> para o nome de usuário
        const userNameH1 = document.createElement('h1');
        userNameH1.className = 'Main-Tweets-Tweet-Content-UserInfo-UserName';
        userNameH1.textContent = tweet.User.UserName;

        // Criar o elemento <h1> para o nome de usuário (@username)
        const userH1 = document.createElement('h1');
        userH1.className = 'Main-Tweets-Tweet-Content-UserInfo-User';
        userH1.textContent = tweet.User.User;

        // Criar o elemento <h1> para o horário
        const timeH1 = document.createElement('h1');
        timeH1.className = 'Main-Tweets-Tweet-Content-UserInfo-Time';
        timeH1.textContent = '· now';

        // Criar a div com a classe "Main-Tweets-Tweet-Content-UserInfo-Right"
        const rightDiv = document.createElement('div');
        rightDiv.className = 'Main-Tweets-Tweet-Content-UserInfo-Right';

        // Criar o botão de edição
        const editButton = document.createElement('button');
        editButton.className = 'Main-Tweets-Tweet-Content-UserInfo-Right-Edit fa-regular fa-pen-to-square';

        // Criar o botão de exclusão
        const deleteButton = document.createElement('button');
        deleteButton.className = 'Main-Tweets-Tweet-Content-UserInfo-Right-Delete fa-solid fa-trash';
        deleteButton.setAttribute('onclick', `deleteTwite(${tweet.Id})`);

        // Criar o elemento <h1> para o conteúdo do tweet
        const textTweetH1 = document.createElement('h1');
        textTweetH1.className = 'Main-Tweets-Tweet-Content-TextTweet';
        textTweetH1.textContent = tweet.Tweet;

        // Criar a div com a classe "Main-Tweets-Tweet-Content-Actions"
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'Main-Tweets-Tweet-Content-Actions';

        // Criar os links de ação
        const commentLink = document.createElement('a');
        commentLink.className = 'Main-Tweets-Tweet-Content-Actions-Item fa-regular fa-comment';
        commentLink.href = '#';
        commentLink.textContent = ' 0';

        const retweetLink = document.createElement('a');
        retweetLink.className = 'Main-Tweets-Tweet-Content-Actions-Item fa-solid fa-retweet';
        retweetLink.href = '#';
        retweetLink.textContent = ' 0';

        const heartLink = document.createElement('a');
        heartLink.className = 'Main-Tweets-Tweet-Content-Actions-Item fa-regular fa-heart';
        heartLink.href = '#';
        heartLink.textContent = '   0';

        // Adicionar todos os elementos à árvore DOM
        rightDiv.appendChild(editButton);
        rightDiv.appendChild(deleteButton);
        userInfoDiv.appendChild(userNameH1);
        userInfoDiv.appendChild(userH1);
        userInfoDiv.appendChild(timeH1);
        userInfoDiv.appendChild(rightDiv);
        tweetContentDiv.appendChild(userInfoDiv);
        tweetContentDiv.appendChild(textTweetH1);
        actionsDiv.appendChild(commentLink);
        actionsDiv.appendChild(retweetLink);
        actionsDiv.appendChild(heartLink);
        tweetContentDiv.appendChild(actionsDiv);
        tweetLi.appendChild(userPictureImg);
        tweetLi.appendChild(tweetContentDiv);

        // Adicionar o <li> criado ao documento
        TweetsContainer.appendChild(tweetLi);
    })
}

function deleteTwite(Id) {
    Tweets = Tweets.filter(function (tweet) {
        return tweet.Id !== Id;
    });
    updateListTweets();
}
