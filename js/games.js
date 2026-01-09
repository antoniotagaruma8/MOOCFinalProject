$(document).ready(function () {
    const games = [
        {
            title: 'If I Ruled the World',
            description: 'This warm-up and fluency-building game connects to the unit on conditional tenses. The circular seating arrangement is crucial as it allows every student to see and hear each other, reinforcing the memory chain aspect of the game.',
            video: 'https://www.youtube.com/embed/videoseries?list=PLXmMXbB6zYJdotA4_nNK5tA-T8y_8sK3e',
            didactic: {
                objectives: ['Practice second conditional structures ("If I were... I would...")', 'Enhance listening and memory retention skills'],
                diversity: 'Support for slow learners via visual sentence starters; Challenge mode for fast finishers to add complex clauses.',
                clil: 'Whole Class Circle activity integrating Social Science (Governance & Law making).'
            }
        },
        {
            title: 'I Couldn’t Disagree More',
            description: 'This game is integrated into a debate on the legacies of historical figures. Students are arranged in pairs, facing each other, to encourage direct rebuttal and argumentation. Role cards with controversial statements are prepared to initiate the discussions.',
            video: 'https://www.youtube.com/embed/videoseries?list=PLXmMXbB6zYJdotA4_nNK5tA-T8y_8sK3e',
            didactic: {
                objectives: ['Utilize phrases for agreeing, disagreeing, and justifying opinions', 'Develop critical thinking and spontaneous rebuttal skills'],
                diversity: 'Support via cue cards with debate vocabulary; Challenge via more abstract or controversial topics.',
                clil: 'Pair work activity integrating History & Citizenship (Debating historical figures).'
            }
        },
        {
            title: 'Point of Information',
            description: 'This game is used to practice formal debate procedures. The teacher models how to correctly raise and respond to a POI before students attempted it themselves. The class was arranged in two opposing lines to simulate a parliamentary-style debate.',
            video: 'https://www.youtube.com/embed/videoseries?list=PLXmMXbB6zYJdotA4_nNK5tA-T8y_8sK3e',
            didactic: {
                objectives: ['Learn and apply formal debate protocol (raising points, yielding)', 'Practice formulating concise, relevant interruptions'],
                diversity: 'Sentence starters for interruptions; "Moderator" roles for advanced students to manage flow.',
                clil: 'Two opposing teams activity integrating Citizenship (Parliamentary procedure).'
            }
        },
        {
            title: 'Balloon Debates',
            description: 'This game serves as the culminating activity for the speaking unit, combining persuasion, impersonation, and argumentation. Students are given role cards for famous people (or professions) and had to argue why they should be the last one to survive in a falling hot air balloon. The activity is set up as a whole-class performance.',
            video: 'https://www.youtube.com/embed/videoseries?list=PLXmMXbB6zYJdotA4_nNK5tA-T8y_8sK3e',
            didactic: {
                objectives: ['Employ persuasive language and rhetorical devices', 'Practice speaking from a specific persona/perspective (Role-play)'],
                diversity: 'Role cards with suggested arguments; Open-ended roles for advanced students.',
                clil: 'Individual/Whole class activity integrating General Science/History (depending on characters).'
            }
        }
    ];

    const gameCardsContainer = $('#game-cards-container');

    function createGameCards(games) {
        gameCardsContainer.empty();
        games.forEach((game, index) => {
            const card = `
                <div class="col-lg-4 col-md-6">
                    <div class="game-card" data-toggle="modal" data-target="#game-details-modal" data-index="${index}">
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
        const index = button.data('index');
        const game = games[index];

        const modal = $(this);
        modal.find('#modal-game-title').text(game.title);
        modal.find('#modal-game-description').text(game.description);
        modal.find('#modal-game-video').attr('src', game.video);

        // Populate Didactic Guide
        const didacticHtml = `
            <h5 class="text-dark border-bottom pb-2 mb-3"><i class="fa fa-graduation-cap mr-2"></i>Teacher's Didactic Guide</h5>
            <ul class="list-unstyled">
                <li class="mb-2"><strong>Target Level:</strong> 4th ESO / CEFR B1</li>
                <li class="mb-2"><strong>Objectives:</strong>
                    <ul class="pl-3 mt-1">
                        ${game.didactic.objectives.map(obj => `<li>- ${obj}</li>`).join('')}
                    </ul>
                </li>
                <li class="mb-2"><strong>Timing:</strong> 15-20 mins (Warm-up/Practice)</li>
                <li class="mb-2"><strong>Attention to Diversity:</strong> ${game.didactic.diversity}</li>
                <li class="mb-2"><strong>CLIL & Collaboration:</strong> ${game.didactic.clil}</li>
            </ul>
        `;
        modal.find('#modal-didactic-content').html(didacticHtml);
    });

    $('#game-details-modal').on('hidden.bs.modal', function () {
        $(this).find('#modal-game-video').attr('src', '');
        $(this).find('#modal-didactic-content').empty();
    });
});