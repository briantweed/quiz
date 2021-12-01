import {sample} from "lodash";

const quotes = [
    'And the eighth and final rule: if this is your first time at Fight Club, you have to fight.',
    'Alright, alright, I got it. I got it .... I lost it.',
    'Did you know that if you mix equal parts of gasoline and frozen orange juice concentrate you can make napalm?',
    'Do not watch. I cannot go when you watch.',
    'Feel better champ.',
    'Fifth rule: one fight at a time, fellas.',
    'Fourth rule: only two guys to a fight.',
    'Gentlemen, welcome to Fight Club.',
    'Hey, even the Mona Lisa\'s falling apart.',
    'Hitting bottom isn\'t a weekend retreat. It\'s not a goddamn seminar. Stop trying to control everything and just let go!',
    'How much can you know about yourself if you\'ve never been in a fight?',
    'I am smart, capable, and most importantly, I am free in all the ways that you are not.',
    'I say never be complete, I say stop being perfect.',
    'I want you to hit me as hard as you can.',
    'I\'ll bring us through this. As always. I\'ll carry you - kicking and screaming - and in the end you\'ll thank me',
    'If you don\'t claim your humanity you will become a statistic.',
    'In the world I see - you are stalking elk through the damp canyon forests around the ruins of Rockefeller Center. You\'ll wear leather clothes that will last you the rest of your life. You\'ll climb the wrist-thick kudzu vines that wrap the Sears Tower. And when you look down, you\'ll see tiny figures pounding corn, laying strips of venison on the empty car pool lane of some abandoned superhighway.',
    'It could be worse. A woman could cut off your penis while you\'re sleeping and toss it out the window of a moving car.',
    'It\'s only after we\'ve lost everything that we\'re free to do anything.',
    'Murder, crime, poverty, these things don\'t concern me. What concerns me are celebrity magazines, television with 500 channels, some guy\'s name on my underwear.',
    'Our great war is a spiritual war... Our great depression is our lives',
    'Reject the basic assumptions of civilization, especially the importance of material possessions.',
    'Seventh rule: fights will go on as long as they have to.',
    'Sixth rule: No shirts, no shoes.',
    'Space monkey!',
    'Sticking feathers up your butt does not make you a chicken.',
    'Stop trying to control everything and just let go.',
    'The first rule of Fight Club is: you do not talk about Fight Club.',
    'The first soap was made from heroes\' ashes, like the first monkey shot into space. Without pain, without sacrifice, we would have nothing.',
    'The best fat for making soap comes from humans.',
    'The richest, creamiest fat in the world. The fat of the land.',
    'The second rule of Fight Club is: you DO NOT talk about Fight Club!',
    'The things you own end up owning you.',
    'Third rule of Fight Club: someone yells "stop!", goes limp, taps out, the fight is over.',
    'We are all part of the same compost heap.',
    'We\'re consumers. We are the by-products of a lifestyle obsession.',
    'What would you wish you\'d done before you died?',
    'What\'s that smell?',
    'Without pain, without sacrifice, we would have nothing.',
    'You\'re the all-singing, all-dancing crap of the world.',
    'You are not a beautiful or unique snowflake.',
    'You wanna make an omelet, you gotta break some eggs.',
];

const redacted = quotes[27];

const reinforce = quotes[31];

const checkTheRules = (text) => {
    return text.length > 0 ? redacted : text;
}


export default function handler(req, res) {

    try {
        res.status(200).json({tyler_says: checkTheRules(sample(quotes))})
    } catch (e) {
        res.status(200).json({tyler_says: reinforce})
    }

}

