$(document).ready(function () {
    const games = [
        {
            title: 'If I Ruled the World',
            description: 'This warm-up and fluency-building game connects to the unit on conditional tenses. The circular seating arrangement is crucial as it allows every student to see and hear each other, reinforcing the memory chain aspect of the game.',
            video: 'https://www.youtube.com/embed/videoseries?list=PLXmMXbB6zYJdotA4_nNK5tA-T8y_8sK3e'
        },
        {
            title: 'I Couldn’t Disagree More',
            description: 'This game is integrated into a debate on the legacies of historical figures. Students are arranged in pairs, facing each other, to encourage direct rebuttal and argumentation. Role cards with controversial statements are prepared to initiate the discussions.',
            video: 'https://www.youtube.com/embed/videoseries?list=PLXmMXbB6zYJdotA4_nNK5tA-T8y_8sK3e'
        },
        {
            title: 'Point of Information',
            description: 'This game is used to practice formal debate procedures. The teacher models how to correctly raise and respond to a POI before students attempted it themselves. The class was arranged in two opposing lines to simulate a parliamentary-style debate.',
            video: 'https://www.youtube.com/embed/videoseries?list=PLXmMXbB6zYJdotA4_nNK5tA-T8y_8sK3e'
        },
        {
            title: 'Balloon Debates',
            description: 'This game serves as the culminating activity for the speaking unit, combining persuasion, impersonation, and argumentation. Students are given role cards for famous people (or professions) and had to argue why they should be the last one to survive in a falling hot air balloon. The activity is set up as a whole-class performance.',
            video: 'https://www.youtube.com/embed/videoseries?list=PLXmMXbB6zYJdotA4_nNK5tA-T8y_8sK3e'
        }
    ];

    const gameCardsContainer = $('#game-cards-container');

    function createGameCards(games) {
        gameCardsContainer.empty();
        games.forEach(game => {
            const card = `
                <div class="col-lg-4 col-md-6">
                    <div class="game-card" data-toggle="modal" data-target="#game-details-modal" data-title="${game.title}" data-description="${game.description}" data-video="${game.video}">
                        <h4>${game.title}</h4>
                    </div>
                </div>
            `;
            gameCardsContainer.append(card);
        });
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    createGameCards(games);

    $('#shuffle-button').on('click', function () {
        const shuffledGames = shuffle(games);
        createGameCards(shuffledGames);
    });

    $('#game-details-modal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const title = button.data('title');
        const description = button.data('description');
        const video = button.data('video');

        const modal = $(this);
        modal.find('#modal-game-title').text(title);
        modal.find('#modal-game-description').text(description);
        modal.find('#modal-game-video').attr('src', video);
    });

    $('#game-details-modal').on('hidden.bs.modal', function () {
        $(this).find('#modal-game-video').attr('src', '');
    });
});
