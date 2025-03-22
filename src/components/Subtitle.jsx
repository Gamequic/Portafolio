import Typewriter from 'typewriter-effect';

const Phrases = [
    "Code like a boss, debug like a pro.",
    "Always be coding, siempre en progreso.",
    "From zero to deploy in no time.",
    "Hack the planet, no borders.",
    "Making magic with every line of code.",
    "Crafting solutions, one bug at a time.",
    "Elevate your code, elevate your game.",
    "Innovating con cada commit.",
    "Turning caffeine into code.",
    "Debugging life, one line at a time.",
    "Pixels and algorithms, the ultimate duo.",
    "Where code meets creativity.",
    "Breaking barriers, one code at a time.",
    "Transforming coffee into code.",
    "Building dreams through code and coffee.",
    "Creating with code, innovating with passion.",
    "Deconstructing errors with finesse.",
    "Code whispers, bugs tremble.",
    "From concepts to concrete solutions.",
    "Coding the future, ahora mismo.",
    "Turning challenges into code.",
    "Programming is my second language.",
    "Fueled by coffee, driven by code.",
    "Engineering the future, one line at a time.",
    "Code is poetry, debugging is art."
];


export default function Subtitle() {
    return (
        <Typewriter
            options={{
                loop: true,
                delay: 50,
                autoStart: true
            }}
            onInit={(typewriter) => {
                const addPhrases = () => {
                    Phrases.forEach((phrase) => {
                        typewriter
                            .typeString(phrase)
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    });
                };

                addPhrases();
            }}
        />
    );
}
