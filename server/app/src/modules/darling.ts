/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** darling.ts
*/

import DB from "./db";
import jsonImages from "../ressources/darling_images.json";

export namespace Darling {

    const default_age = "Unknown";
    const default_quote = "";
    const default_alias = "None";
    const default_romaji = "Unknown";
    const default_height = "Unknown";
    const default_weight = "Unknown";
    const default_image_width = "auto";
    const default_image_height = "300px";
    const default_japanese_name = "Unknown";

    export const character = [
        {
            id: 1,
            name: "001",
            japanese_name: "きょりゅうひめ叫竜の姫",
            romaji: "Kyoryuu no Hime",
            age: "Over 60 million years",
            quote: `"We are the defenders of this planet. Once upon a time, during a long battle, we turned ourselves into an immortal weapon. Except fighting, all was lost, so we went to sleep at the bottom of death, our bond was to prepare for the returning invader."—001 about the war with VIRM `,
            description: "The Klaxo Sapien princess, the last of her kind, who has lived for millennia. She leads the war against humanity and the VIRM.",
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/0/03/001.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/001",
            type: "Klaxo-Sapien",
            alias: default_alias
        },
        {
            id: 2,
            name: "007",
            japanese_name: "新ナナ",
            romaji: "Shin Nana",
            age: "Alive (Immortal)",
            quote: `"It is considered impossible for a pregnant woman to pilot a FRANXX. Past records indicate abortion, that is the removal of the fetus as one of the possible treatments. Please let me know what you decide to do."—To Kokoro upon informing her of her pregnancy `,
            description: "007 (New Nana) is a calm and blunt caretaker of the parasites, lacking the empathy of the original Nana. Unlike her predecessor, she is indifferent to the well-being of the children and strictly follows APE’s orders, even dismissing their concerns about life-threatening missions with a passive smile. She values law and order to the extent that she initially denies necessities to the children, even when their survival is at stake.  However, over time, she begins to show a subtle kindness, especially toward Kokoro after discovering her pregnancy. She prioritizes Kokoro’s well-being, ensuring she receives special treatment as a precedent for doing things right in the new world.",
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/b/b0/New_nana.png",
            image_height: "200px",
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/007",
            type: "Human",
            alias: default_alias
        },
        {
            id: 3,
            name: "081",
            japanese_name: "高典 星野",
            romaji: "Takanori Hoshino",
            age: default_age,
            quote: default_quote,
            description: `Zero Two's previous partner before Hiro. He couldn't handle her growing Klaxosaur blood influence and perished in combat when their Franxx, Strelizia, went out of control. His death highlights how lethal Zero Two’s piloting compatibility was for normal humans.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/b/bc/081.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/081",
            type: "Human",
            alias: default_alias
        },
        {
            id: 4,
            name: "090",
            japanese_name: "誠 古川",
            romaji: "Makoto Furukawa",
            age: "About 16",
            quote: default_quote,
            description: `Despite his blunt and emotionally detached demeanor, 090 is not entirely without emotion. He is friendly with Squad 13 upon their first meeting and admires Hiro for giving the children names in the Garden. However, he harbors a deep grudge against Zero Two, blaming her reckless behavior for his partner’s death, which leads him to refuse fighting alongside her in Episode 05.  He meets his end when Vice Chairman initiates "Protocol 32," ordering Squad 26’s self-destruction to protect Plantation 13 and secure a path to the Gran Crevasse. Though initially reluctant, 090 accepts the order as an honorable sacrifice for the greater good and reaffirms his trust in Squad 13 before his death.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/2/2d/090.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/090",
            type: "Human",
            alias: default_alias
        },
        {
            id: 5,
            name: "245",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: default_age,
            quote: default_quote,
            description: `245 is a member of Squad 26 in Darling in the Franxx, though his appearance remains unknown. Like most of his squadmates, he is composed and rarely shows emotion.  Squad 26 participates in a joint mission with Squad 13 to defend Plantations 13 and 26 during the kissing ceremony. They are unsettled upon learning Zero Two will be involved. Later, as part of the Sixth United FRANXX Company, Squad 26 fights alongside Squad 13 and the 9's.  When Plantation 26 is destroyed by a Super Lehmann Klaxosaur, Vice Chairman orders Squad 26 to initiate "Protocol 32" (self-destruction) to protect Plantation 13. They comply with the order but ultimately fail to stop the Klaxosaur, resulting in their deaths.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/f/f9/Plan26.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: "150px",
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/245",
            type: "Group of humans",
            alias: default_alias
        },
        {
            id: 6,
            name: "9 Model",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: default_age,
            quote: default_quote,
            description: "The 9's are a special unit of parasites created by APE to serve as enforcers and directly report to Papa.",
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/6/62/9%27s_Model_Franxx.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/9_Model",
            type: "FranXX",
            alias: default_alias
        },
        {
            id: 7,
            name: "9'α",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: default_age,
            quote: `"Humans have evolved and cast their reproductive functions aside in the process. Reject that, and we'll all have to go back to conforming to one gender"—Alpha to Kokoro about her ‘leaving a mark’ `,
            description: `The leader of the 9's, arrogant and devoted to Papa. He clashes often with Squad 13.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/6/6c/9a_stand.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/9%27%CE%B1",
            type: "Clones of Zero Two",
            alias: default_alias
        },
        {
            id: 8,
            name: "9'β",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: default_age,
            quote: default_quote,
            description: `A member of the 9's, loyal to APE and possessing cold, elite attitudes.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/7/73/9b_stand.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/9%27%CE%B2",
            type: "Clones of Zero Two",
            alias: default_alias
        },
        {
            id: 9,
            name: "9'γ",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: default_age,
            quote: default_quote,
            description: `A member of the 9's, loyal to APE and possessing cold, elite attitudes.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/0/08/9y_stand.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/9%27%CE%B3",
            type: "Clones of Zero Two",
            alias: default_alias
        },
        {
            id: 10,
            name: "9'δ",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: default_age,
            quote: default_quote,
            description: `A member of the 9's, loyal to APE and possessing cold, elite attitudes.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/6/6e/9o_stand.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/9%27%CE%B4",
            type: "Clones of Zero Two",
            alias: default_alias
        },
        {
            id: 11,
            name: "9'ε",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: default_age,
            quote: default_quote,
            description: `A member of the 9's, loyal to APE and possessing cold, elite attitudes.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/1/1b/9idk_stand.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/9%27%CE%B5",
            type: "Clones of Zero Two",
            alias: default_alias
        },
        {
            id: 12,
            name: "9'ζ, η, θ",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: default_age,
            quote: default_quote,
            description: `Members of the 9's, loyal to APE and possessing cold, elite attitudes.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/6/6d/9something_stand.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/9%27%CE%B6,_%CE%B7,_%CE%B8",
            type: "Clones of Zero Two",
            alias: default_alias
        },
        {
            id: 13,
            name: "Ai",
            japanese_name: "アイ",
            romaji: "Ai",
            age: "Newborn-18 months (Episode 24) 9 (10 year timeskip)",
            quote: `"Papa, Darling, darling!"—Ai to Mitsuru`,
            description: `Ai is the eldest daughter of Mitsuru and Kokoro and the first child born to the Parasites. She inherits her mother’s gentle and cheerful personality and is a precocious, curious child.  She shares a close bond with her parents, calling them "Mama" and "Papa," and is adored by the other members of Squad 13. Ai enjoys hearing stories about the past and eagerly asks Miku about her parents' younger days.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/4/4d/Ai.png",
            image_height: "200px",
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Ai",
            type: "Human",
            alias: default_alias
        },
        {
            id: 14,
            name: "Argentea",
            japanese_name: "アルジェンティア",
            romaji: "Arujentia",
            age: "Inactive (Became a monument)",
            quote: default_quote,
            description: `Argentea is Miku and Zorome’s Franxx, designed with a light pink, bunny-eared appearance to match Miku. It has a white and dark pink body, a dark pink visor, and wields "Night Claw" magma-energy blades for combat.  Throughout the series, Argentea participates in major battles against Klaxosaurs and later against the alien VIRM. It often plays an aggressive role, with Zorome’s brash fighting style leading to both successes and setbacks. Argentea helps Squad 13 in key fights, such as defending the Plantations, battling inside Gran Crevasse, and ultimately joining the galactic war against VIRM to support Hiro and Zero Two.  In the series' epilogue, Argentea is decommissioned and becomes a monument in the new society built by the surviving Parasites.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/8/81/Argentea.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Argentea",
            type: "FranXX",
            alias: default_alias
        },
        {
            id: 15,
            name: "Baboon",
            japanese_ame: "バブーン",
            romaji: "Babūn",
            age: " Over 100 (Immortal)",
            quote: `"The Klaxosaurs are the enemy of humanity. We must eradicate them, no matter the cost." — Babūn in front of the Klaxosaur princesse`,
            description: `Baboon is a member of the Seven Sages of APE in Darling in the Franxx. He wears a white and gold robe with a primate mask, and his unusually long headdress sets him apart from the other sages.  Baboon’s personality is largely cold and emotionless. He sees the parasites and FRANXX squads as expendable tools, willing to sacrifice many for APE’s goal of eradicating the Klaxosaurs. Unlike Papa and Vice Chairman, who are revealed to be part of the alien race VIRM, Baboon’s motives are rooted in his belief in humanity’s survival. His loss of humanity is attributed to the immortality process he underwent, leaving him without the ability to understand or feel emotions.  Baboon is closely aligned with the other members of APE, working in strong unison with them.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/c/c5/WiseMan6.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Baboon",
            type: "Council Member",
            alias: default_alias
        },
        {
            id: 16,
            name: "Chlorophytum",
            japanese_name: "クロロフィッツ",
            romaji: "Kurorofittsu",
            age: "Inactive (Became a monument)",
            quote: default_quote,
            description: `Chlorophytum is a FRANXX from Thirteenth Plantation, initially piloted by Mitsuru and Ikuno, and later by Ikuno and Futoshi.  The FRANXX features a white and violet design with distinctive elements: a thick purple visor, four antennae, and one large vertical antenna at the back of its head. Its violet fins resemble hair, and it has a single visible cyan eye. It also has gemstones on its cranium and chest. The arms are shaped like guns, and it has pointy, orange peg legs made of magma-energy material used to fight Klaxosaurs. Chlorophytum also has the ability to fly using "Wing Span", a heat sink system, although this feature is not depicted in the anime.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/c/c7/Chlorophytum.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Chlorophytum",
            type: "FranXX",
            alias: default_alias
        },
        {
            id: 17,
            name: "Delphinium",
            japanese_name: "デルフィニウム",
            romaji: "Derufiniumu",
            age: "Inactive (Became a monument)",
            quote: default_quote,
            description: `Delphinium is a FRANXX from Thirteenth Plantation, piloted by Ichigo and Goro. It serves as the leader of the FRANXX platoon. The FRANXX features light blue eyes, pinkish-red hair (covering Ichigo's right eye), and a white and pale blue color scheme. It has three blue fins on its head, gun-like arms, and pointy, orange legs. Delphinium wields two spear-like swords called "Envy Shop" with magma-energy used to destroy Klaxosaurs. In stampede mode, it transforms into a four-legged bestial form.  Delphinium is first seen in Episode 01 when Ichigo and Goro prepare for the startup ritual. Later, it becomes the leader of the platoon in Episode 02, participating in battles against Klaxosaurs and struggling with its synchronization, especially when Ichigo pilots it solo. Delphinium has notable moments where it rescues Argentea (Episode 02), faces off against Gutenberg-class Klaxosaurs (Episode 09), and goes through battles against both Klaxosaurs and the alien species VIRM (Episodes 20-23).  In Episode 15, Delphinium fights Klaxosaurs and also helps Hiro and Zero Two. By Episode 24, Delphinium becomes a monument in the new community formed by the Parasites.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/2/2e/Delphinium.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Delphinium",
            type: "FranXX",
            alias: default_alias
        },
        {
            id: 18,
            name: "Dr. FRANXX",
            japanese_name: "ヴェルナー・フランク",
            romaji: "Veruna Furanku",
            age: "Deceased,  Chronologically over 100",
            quote: `"Fate is cruel. In order to obtain something, one must lose something else. Humanity has searched and sacrificed a lot for what lies beyond life which is our limit. And then we met her, such a beautiful and perfect being."—Dr.FRANXX about humanity and 001`,
            description: `Dr. FRANXX is a brilliant but morally corrupt scientist in DARLING in the FRANXX. As a member of APE, he played a key role in the development of the FRANXX units, including Zero Two. He has a mechanical body due to past accidents, including losing his arm to 001. Originally an atheist, he was highly pragmatic and conducted illegal, unethical experiments on human fetuses in pursuit of knowledge.  Dr. FRANXX's personality shifted after meeting 001, whom he found alluring despite losing his arm to her. His obsession with her led to the creation of Zero Two and other parasites, who he saw as expendable but fascinating. He later worked with Karina Milsa, who confessed her love for him, but her death shattered his emotional state, making him increasingly disillusioned with humanity.  Dr. FRANXX took pride in his creations but had a shaky relationship with APE, often acting independently and conducting experiments without approval. He was particularly interested in studying emotions and human relationships, which led him to encourage Squad 13 to form their own bonds. Although he treated the parasites as experiments, he had a special attachment to Zero Two and Hiro, especially after Hiro survived multiple rides with Zero Two.  In his later years, Dr. FRANXX began to regret his past actions, especially regarding Zero Two and her memories. Before his death, he made peace with her, helping her rescue Hiro from 001, and admired the beauty of Strelizia Apath.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/b/be/Dr_FRANXX_infobox.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Dr._FRANXX",
            type: "Human",
            alias: [" Werner Frank "]
        },
        {
            id: 19,
            name: "Futoshi",
            japanese_name: "フトシ",
            romaji: "Futoshi",
            age: "14-15 17 (2 year timeskip, Episode 24) 25/26 (10 year timeskip)",
            quote: `"The birdcage is still here. And so are we. The people we were supposed to protect aren't there anymore and our wings are still being repaired, but we believe that the ten of us will all be able to fly again soon. Until then, we'll make it through on our own."—Futoshi after Squad 13 is left to fend for themselves`,
            description: `Futoshi is a key character in DARLING in the FRANXX, originally a Parasite with the codename 214 at the Thirteenth Plantation. He was initially paired with Kokoro, then later with Ikuno to pilot the FRANXX Chlorophytum. Futoshi has a kind, optimistic, and hardworking personality, often motivated by his feelings for Kokoro. He has a love for food and is often teased about his weight, which he doesn’t take lightly.  Despite his crush on Kokoro, who does not share his feelings, Futoshi continues to support her and his friends. He maintains strong relationships with others, even with Mitsuru, despite his initial jealousy over Kokoro's relationship with him. Eventually, he accepts their bond and becomes a genuine friend to Mitsuru.  Futoshi is deeply respectful, polite, and never holds grudges, though he becomes disillusioned with APE after realizing the cruelty behind their control over the parasites. He goes through significant emotional growth, putting Kokoro’s happiness above his own, even participating in her wedding to Mitsuru.  Later, in adulthood (as seen in Episode 24), Futoshi becomes a baker, channels his love for food into making food for the next generation, and still maintains a strong bond with his friends. He is also highly respectful of Ikuno for her dedication to managing their accelerated aging.  Despite his lighthearted exterior, Futoshi is a deeply caring and selfless person who learns to prioritize the happiness of those he loves over his own desires.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/4/46/Futoshi_infobox.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: "around 177cm (5'10\")",
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Futoshi",
            type: "Human",
            alias: default_alias
        },
        {
            id: 20,
            name: "Futoshi’s Unnamed Daughter",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: "Around 5",
            quote: default_quote,
            description: `The unnamed daughter of Futoshi and his wife is a young girl with dark brown hair, resembling her mother. She has an older brother and an unborn sibling. She shares a close relationship with her father, often seen smiling and laughing while sitting on his shoulders. She is taught to show respect, as seen when she bows her head while visiting Ikuno in the hospital. Born a few years after Hiro and Zero Two's sacrifice, she is seen with her family at the school entrance ceremony, where she sits on her father's shoulders. Not much else is known about her character.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/f/fc/Futoshi%27s_daughter.PNG",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Futoshi%E2%80%99s_Unnamed_Daughter",
            type: "Human",
            alias: default_alias
        },
        {
            id: 21,
            name: "Futoshi’s Unnamed Son",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: "Around 8",
            quote: default_quote,
            description: `The unnamed son of Futoshi and his wife is a kind young boy with reddish-brown hair and a portly build, similar to his father. He has a younger sister and an unborn sibling. He is taught by his mother to be polite, as shown when he bows his head while visiting Ikuno in the hospital. Born shortly after Hiro and Zero Two’s sacrifice, he is first seen eight years later when he and his family go to the hospital to fetch Futoshi and attend the school entrance ceremony. His relationship with his family appears to be close, though not much is shown.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/0/0d/Futoshi%27s_son.PNG",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Futoshi%E2%80%99s_Unnamed_Son",
            type: "Human",
            alias: default_alias
        },
        {
            id: 22,
            name: "Futoshi’s Wife",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: default_age,
            quote: default_quote,
            description: `The unnamed wife of Futoshi has short dark brown hair and is shown to be respectful, caring, and a loving wife and mother. She and Futoshi met after the final battle with the Klaxosaurs and VIRM, eventually marrying and having two children, with a third on the way by the ten-year time skip. During the school entrance ceremony, she visits Ikuno in the hospital with their children to fetch Futoshi, then they leave together, with her bowing farewell to Ikuno. She shares a close relationship with her family and is seen at the end of Chapter 60, where Futoshi helps her walk through debris after the Gran Crevasse siege.`,
            image_link: jsonImages["default"],
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Futoshi%E2%80%99s_Wife",
            type: "Human",
            alias: default_alias
        },
        {
            id: 23,
            name: "Genista",
            japanese_name: "ジェニスタ",
            romaji: "Jenisuta",
            age: "Inactive (Became a monument)",
            quote: `"Doesn’t it scare you to trust someone so much? You’re unbelievable."—Mitsuru to Kokoro during their first sortie together in Genista `,
            description: `Genista is a FRANXX from the Thirteenth Plantation, initially piloted by Kokoro and Futoshi, and later by Kokoro and Mitsuru. It has a dark grey body with green highlights, light pinkish-purple eyes, and a head resembling a helmet with golden strands resembling hair. The body has cubic shoulder pads, black and green mittens, and heavy boots. Genista is equipped with a cannon called "Rook Sparrow," used for shattering Klaxosaur cores.  In the manga, Genista has an alternate state called Light Mode, where it sheds its armor, revealing long blonde hair, a forehead crest, and a more petite black body. In this state, its speed increases, but defense decreases.  When piloted by the pistil alone, Genista transforms into Stampede Mode, which resembles a duck in the anime and takes on a dragon-like, winged form in the manga.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/5/56/Genista.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Genista",
            type: "FranXX",
            alias: default_alias
        },
        {
            id: 24,
            name: "Gorilla",
            japanese_name: "ゴリラ",
            romaji: "Gorira",
            age: "Over 100 (Immortal)",
            quote: default_quote,
            description: `Gorilla is a member of the Seven Sages of APE in DARLING in the FRANXX. He is a large man of African descent, revealed in episode 19 to be over a century old due to immortality treatment. His face is exposed in episode 21 when his mask is ripped off. Like the other members of APE, he is emotionless and willing to take drastic, heartless actions to fulfill APE's goals.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/a/a4/WiseMan1.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Gorilla",
            type: "Council Member",
            alias: default_alias
        },
        {
            id: 25,
            name: "Goro",
            japanese_namme: "ゴロー",
            romaji: "Gorō",
            age: "14-15 17 (2 year timeskip, Episode 24) 25/26 (10 year timeskip)",
            quote: `"Things keep changing. Until now, food, shelter, a reason to live, even a place to die, everything was only given to us. But, that's over too. Now, we have woken up from that long dream and we will never go back to being CHILDREN. That choice, we made it on our own."—Goro after the parasites are abandoned`,
            description: `Goro is a main character in DARLING in the FRANXX, a former Parasite with the codename "056." He was initially paired with Ichigo to pilot the FRANXX Delphinium. Goro is an optimist and a responsible, level-headed person, often taking the lead when necessary to ensure the survival of his team. He is the tallest of the Parasites and has a supportive and selfless nature, caring deeply for his friends. He values others over himself and would sacrifice himself for their well-being.  Despite his kind nature, Goro struggles with his unspoken love for Ichigo, who is more focused on Hiro. He respects their feelings and doesn't hold grudges, even when Ichigo gives Hiro more attention. Goro is also very rational, though he can lose his cool when others make selfish decisions. Over time, Goro grows more confident and open about his emotions, particularly with Ichigo. He later decides to live for himself, and after marrying Ichigo, he becomes a loving husband and eagerly anticipates fatherhood.  As an adult, Goro is more determined to pursue his goals and help others. He becomes bolder, even kissing Ichigo, and decides to travel the world to help children in need.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/7/7b/Goro_infobox.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: "around 178cm (5'10\")",
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Goro",
            type: "Human",
            alias: default_alias
        },
        {
            id: 26,
            name: "Hachi",
            japanese_name: "ハチ",
            romaji: "Hachi",
            age: "Appears in 20’s, Alive (Immortal)",
            quote: `"I'm not sure if I can be a good parent, but I'll try my best."—Hachi to the children`,
            description: `Hachi is the defense commander at APE's Operational Headquarters, stationed in Plantation 13. He is a tall, young man with dark blue hair, known for his unemotional and pragmatic demeanor. Hachi is stern and often acts as a disciplinarian for Squad 13, emphasizing the importance of following regulations to ensure the safety and functionality of the FRANXX pilots. He is loyal to APE and believes the Parasites are tools for warfare, viewing them as disposable. However, he does show concern for their well-being, particularly when their health or safety is at risk.  Despite his cold exterior, Hachi begins to question APE’s actions, especially after witnessing their harsh treatment of the Parasites. His growing doubts are evident when he observes the children living peacefully after the Gran Crevasse siege and shows unexpected kindness by allowing Kokoro and Mitsuru's wedding to happen, despite it being against regulations. Hachi's compassion deepens as he begins to see the Parasites as individuals with emotions and free will, not just tools of war.  By the end of the series, Hachi actively aids the children in their fight against Papa and VIRM, even risking his own life to protect others. He admits that he no longer sees the Parasites as mere soldiers but as people who deserve to live their own lives. In the manga, Hachi fully embraces this shift in perspective, deciding to go against APE and help the 9’s, as he understands their emotional struggles and the value of their lives.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/4/48/Hachi_infobox.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Hachi",
            type: "Human",
            alias: default_alias
        },
        {
            id: 27,
            name: "Hiro",
            japanese_name: "ヒロ",
            romaji: "Hiro",
            age: "Deceased, Reincarnated (Anime) Alive (Manga), 14-15 17 (2 year timeskip, Episode 24)",
            quote: `"Our sole reason to exist is to become FRANXX and fight. We were born only for that purpose, raised only for that purpose. But to me, the failure of the group, that's something I can't forgive. With nowhere I can feel like I belong... that's when I met you."—Hiro’s first narrative in Episode 01 preview`,
            description: `Hiro is the main protagonist of DARLING in the FRANXX. Originally a prodigy, he was deemed a failure after struggling to synchronize with his partner Naomi, leading him to question his place in the world. His life changes when he becomes partnered with Zero Two, and together they pilot the FRANXX Strelizia. Over time, Hiro develops a deep romantic relationship with Zero Two and finds a new sense of purpose, fighting to free the Parasites from APE’s control.  Hiro's physical appearance changes significantly throughout the series. He develops a mutation due to his bond with Zero Two, which leads to "saurification"—his canines grow, his horns lengthen, and his skin turns blue, resembling a Klaxo-sapien.  As a child, Hiro was curious and rebellious, but after a memory wipe, he became obedient and lost much of his earlier personality. Despite his struggles with piloting, Hiro eventually regains his resolve, motivated by his desire to protect Zero Two and fight for freedom. He grows to care deeply for his friends in Squad 13 and is willing to sacrifice his life to protect them and the planet.  In the end, Hiro and Zero Two’s souls reincarnate a thousand years later, reuniting and rekindling their love. Hiro evolves from someone who once felt his life had no purpose into a selfless individual determined to ensure the future of those he loves, ultimately sacrificing himself to protect the Earth and the people he cares about.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/a/a5/Hiro_infobox.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: "168 cm (5'6\")",
            weight: "58 kg (128 lbs)",
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Hiro",
            type: "Human",
            alias: default_alias
        },
        {
            id: 28,
            name: "Ichigo",
            japanese_name: "イチゴ",
            romaji: "Ichigo",
            age: "14-15 17 (2 year timeskip, Episode 24) 25/26 (10 year timeskip)",
            quote: `"She puts a curse to drain the life out of stamen, the one who's not human. I can't consider her as one of us anymore. Even if she's considered as the key to save the world, even if as a result that I'm hated by the person that I consider the most important."—Ichigo about Zero Two devouring her partners`,
            description: `Ichigo is a main character in DARLING in the FRANXX, serving as the leader of Squad 13. She was a Parasite with the codename 015 and partnered with Goro to pilot the FRANXX Delphinium. Throughout the series, Ichigo struggles with her unrequited love for Hiro, balancing her emotions with her responsibilities as a leader. She initially alienates Zero Two, attempting to separate her from Hiro, but eventually accepts their relationship and finds new love in Goro.  Ichigo has a petite build, green eyes, and short blue hair, often wearing a white hair clip given to her by Hiro. As a child, she was insecure, but Hiro's encouragement helped her find self-confidence. Despite being a natural-born leader and an honor student, her feelings for Hiro often cloud her judgment. She is serious, responsible, and caring, but her impulsive emotions sometimes affect her decisions.  Over time, Ichigo matures, learning to prioritize the well-being of her squad over her personal desires. She becomes more supportive of Hiro and Zero Two’s relationship and accepts her role as a leader, making decisions that benefit the group. By the end of the series, she is more compassionate and has grown into a reliable leader. Although initially hesitant, she eventually develops feelings for Goro, and they get married and expect their first child.  Ichigo’s growth throughout the series involves learning to put others before herself, accepting her feelings, and supporting her friends in the face of challenges.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/d/d4/Ichigo_infobox.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: "Around 152 (5' 0\")",
            weight: "42 kg (93 lbs)",
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Ichigo",
            type: "Human",
            alias: default_alias
        },
        {
            id: 29,
            name: "Ichigo and Goro’s Unborn Child",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: "Unborn",
            quote: default_quote,
            description: `The unborn child of Ichigo and Goro is the result of their marriage eight years after Hiro and Zero Two's sacrifice. Ichigo becomes pregnant with their first child, and during the school entrance ceremony, she is seen heavily pregnant. She visits Ikuno for prenatal care, and the two discuss the baby. Ikuno mentions that Goro will be putting his travels on hold to stay home and help Ichigo care for their child.`,
            image_link: jsonImages["default"],
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Ichigo_and_Goro%E2%80%99s_Unborn_Child",
            type: "Human",
            alias: default_alias
        },
        {
            id: 30,
            name: "Ikuno",
            japanese_name: "イクノ",
            romaji: "Ikuno",
            age: "14-15 17 (2 year timeskip, Episode 24) 25/26 (10 year timeskip)",
            quote: `"I've always loved you."—Ikuno confessing her feelings to Ichigo`,
            description: `Ikuno is a former Parasite from the Thirteenth Plantation in DARLING in the FRANXX. She was initially partnered with Mitsuru, but their relationship was strained, and she later teamed up with Futoshi. Ikuno struggled with her sexuality, particularly her feelings for Ichigo, which she kept hidden until Ichigo encouraged her to be more open. She is an intelligent, logical, and quiet person with deep purple hair and black-rimmed glasses.  Throughout the series, Ikuno grapples with her identity, feeling conflicted about her attraction to Ichigo, whom she admits to loving. While she initially dislikes the boy-girl pairing system, she later tries to form a connection with Ichigo as a potential partner, but Ichigo sees her only as a dear friend. This struggle leads Ikuno to become more open, especially after being comforted by Ichigo. Despite her struggles, Ikuno helps her friends, even risking her health for their sake, and later contributes to a cure for the parasites’ accelerated aging process.  Over time, Ikuno becomes more sociable and supportive of her friends, especially after gaining Ichigo's encouragement to accept her feelings. She becomes an important and caring member of the team, even though she continues to deal with her complex emotions regarding her sexuality.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/1/1e/Ikuno_infobox.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: "around 169cm (5'7\")",
            weight: "around 42 kg (93 lbs)",
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Ikuno",
            type: "Human",
            alias: default_alias
        },
        {
            id: 31,
            name: "Karina Milsa",
            japanese_name: "カリナ・ミルサ",
            romaji: "Karina Miruza",
            age: "Deceased (2042), 44 (death)",
            quote: `"I love you, Werner."—Karina to Dr. FRANXX`,
            description: `Karina Milsa is a character in DARLING in the FRANXX. She is a middle-aged woman with caramel-blonde hair and gray eyes. Karina was deeply devoted to her partner, Werner Frank, and had a desire to have children with him, which led her to refuse immortality. She was brave enough to become the 13th test subject for the prototype FRANXX unit. Her admiration for Werner, coupled with her desire for human development, made her a significant figure in his research.  Over time, she and Werner discussed humanity’s future, especially regarding immortality, and its potential drawbacks, such as the loss of reproductive functions. She was committed to having children, and their relationship was marked by Karina’s affection and Werner’s often oblivious nature. Despite her wishes, Karina never underwent the immortality procedure, as Werner was hesitant to alter his body, preferring mechanical replacement.  As the world dealt with a growing class divide and environmental decay due to rapid desertification, APE began its plantation project. However, Karina's life was tragically cut short during a FRANXX prototype trial in 2042. She volunteered as a test subject but died when the unit malfunctioned, marking the tragic end of her journey in Werner’s research.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/0/07/Karina_stand.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Karina_Milsa",
            type: "Human",
            alias: default_alias
        },
        {
            id: 32,
            name: "Klaxosaur",
            japanese_name: "クラクソザウルス",
            romaji: "Kurakusozaurusu",
            age: default_age,
            quote: `"Klaxosaurs are the enemy of humanity and must be eradicated."—APE's official stance on Klaxosaurs`,
            description: `Klaxosaurs are powerful biological weapons created by the Klaxo Sapiens in DARLING in the FRANXX, initially serving as antagonists before eventually teaming up with humanity to fight the VIRM. These dragon- or dinosaur-shaped creatures are attracted to magma energy, which they feed on. Their design involves a male-female pairing: the female merges with the Klaxosaur, while the male becomes the core that controls it.  Over 60 million years ago, the Klaxo Sapiens were a technologically advanced civilization, but after resisting an offer from the VIRM to merge as one life form, a devastating war broke out. The war drained the planet's life energy, leading to desertification. Eventually, the Klaxo Sapiens went underground, and their powerful Klaxosaurs were preserved as weapons for future threats. Meanwhile, humanity discovered magma energy and started drilling it, unknowingly triggering attacks from the Klaxosaurs, who became protectors of the planet.  Dr. Franxx, using Klaxosaur carcasses, developed the FRANXX units, which required male-female pilots. This technology was used to defend against Klaxosaur attacks, with humans taking refuge in mobile fortresses called plantations. As the war against the Klaxosaurs intensified, APE (a human organization led by VIRM) created a plan to destroy the Klaxosaurs using their cores. However, the emergence of the Klaxosaur Princess (001) and the creation of a human-Klaxosaur hybrid, Zero Two, complicated matters.  In the final conflict, the Klaxosaurs and humanity united against the VIRM, who had secretly infiltrated humanity’s leadership. The Klaxosaurs helped defeat the VIRM, and after a galactic battle, the VIRM were defeated, and the Klaxosaurs returned to Earth. The planet began to recover, and humanity vowed to never exploit magma energy again, marking the beginning of a new, more harmonious era.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/f/f5/Vlcsnap-2018-03-03-18h47m02s435.png",
            image_height: "200px",
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Klaxosaur",
            type: "Creature",
            alias: default_alias
        },
        {
            id: 33,
            name: "Kokoro",
            japanese_name: "ココロ",
            romaji: "Kokoro",
            age: "14-15 17 (2 year timeskip, Episode 24) 25/26 (10 year timeskip)",
            quote: `"We've lived our entire lives believing had no purpose other than riding the FRANXX into battle. But you know what? That might not actually be true! We could carry new lives and leave them here as part of the future. When I learned that was possible, It made me feel so happy."—Kokoro to Squad 13 after discovering pregnancy`,
            description: `Kokoro is a key character in DARLING in the FRANXX, initially a Parasite with the codename "556," who pilots the FRANXX Genista with her partner Mitsuru. She starts a romantic relationship with Mitsuru and eventually becomes pregnant with his child, despite their memories being altered after a wedding ceremony. Kokoro is a kind, gentle, and optimistic person, with a love for plants and a strong aversion to conflict. She is initially shy and tends to avoid confrontation, but her relationship with Mitsuru helps her become more assertive.  As Kokoro grows more self-aware, she begins questioning the purpose of her life as a FRANXX pilot and the ideals of the adults in her world. She wants to have a child to leave a legacy and give hope for the future. After being separated from Mitsuru due to memory manipulation, Kokoro struggles with her lost purpose and feelings, but when she learns she is pregnant, she reconciles with Mitsuru and decides to keep the child. This decision brings them closer, and they eventually build a happy family with their children. Kokoro evolves from a meek, obedient girl to a strong, loving wife and mother.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/4/44/Kokoro_infobox.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: "160 cm (5'3\")",
            weight: "52 kg (115 lbs)",
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Kokoro",
            type: "Human",
            alias: default_alias
        },
        {
            id: 34,
            name: "Kokoro and Mitsuru’s Second Daughter",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: "Around 3",
            quote: default_quote,
            description: `The unnamed third child and youngest daughter of Kokoro and Mitsuru resembles her father, with olive-brown hair, green eyes, and similar facial features. Not much is known about her, but she is a quiet girl who enjoys reading, particularly The Beast and the Prince. She was born a few years after Hiro and Zero Two's deaths and is first seen at her school entrance ceremony eight years later, sitting on Kokoro's lap while reading.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/f/fe/DITF_MitsuKoko%27s_Second_Daughter.PNG",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Kokoro_and_Mitsuru%E2%80%99s_Second_Daughter",
            type: "Human",
            alias: default_alias
        },
        {
            id: 35,
            name: "Kokoro and Mitsuru’s Son",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: "Between 5 and 8",
            quote: default_quote,
            description: `The unnamed second child and only son of Kokoro and Mitsuru strongly resembles his mother, with ashen blonde hair, blue eyes, and similar facial features. His hairstyle is like his father's, but with longer, fluffier bangs. Not much is known about him, except that he appears to be a normal, young boy with a close relationship to his family. He was born shortly after Hiro and Zero Two's sacrifice and is first seen as a baby, being carried by Kokoro. Eight years later, he attends a school entrance ceremony, sitting on his father's shoulders.`,
            image_link: jsonImages["Kokoro and Mitsuru’s Son"],
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Kokoro_and_Mitsuru%E2%80%99s_Son",
            type: "Human",
            alias: default_alias
        },
        {
            id: 36,
            name: "Kokoro and Mitsuru’s Unborn Child",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: "Unborn",
            quote: default_quote,
            description: `Kokoro and Mitsuru’s unborn child is their fourth and youngest, and the sibling of Ai, an unnamed brother, and unnamed sister. Eight years after Hiro and Zero Two’s deaths, it is revealed during the school entrance ceremony that Kokoro and Mitsuru are expecting their fourth child, a fact later shared by Futoshi with Ikuno and Ichigo.`,
            image_link: jsonImages["default"],
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Kokoro_and_Mitsuru%E2%80%99s_Unborn_Child",
            type: "Human",
            alias: default_alias
        },
        {
            id: 37,
            name: "Lemur",
            japanese_name: "レムール",
            romaji: "Remūru",
            age: "Deceased, Over 100 (Immortal)",
            quote: default_quote,
            description: `Lemur is a member of the Seven Sages of APE in DARLING in the FRANXX. Wearing a white-and-gold robe and a primate mask, he is aligned with his leader, Papa, and is willing to sacrifice parasites or FRANXX squads to eliminate Klaxosaurs for humanity’s benefit, though Papa’s true motives are later revealed. Unlike Tarsier, Lemur remains calm and tries to persuade the Klaxosaur Princess into surrendering. He is careful in dangerous situations, advising Tarsier not to attack the Klaxosaur Princess, but his warning goes ignored, leading to both of their deaths.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/5/5c/WiseMan5.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Lemur",
            type: "Council Member",
            alias: default_alias
        },
        {
            id: 38,
            name: "Marmoset",
            japanese_name: "マーモセット",
            romaji: "Māmosetto",
            age: "Deceased, Over 100 (Immortal)",
            quote: default_quote,
            description: `Marmoset is a member of the Seven Sages of APE in DARLING in the FRANXX. She wears the typical white-and-gold robe and primate mask, with a trapezium-shaped headdress featuring a long red extension. Like the other sages, Marmoset lacks empathy and views parasites and FRANXX Squads as expendable tools for war. She is willing to sacrifice them to achieve APE's goal of eradicating Klaxosaurs for the supposed benefit of humanity.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/9/98/WiseMan2.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Marmoset",
            type: "Council Member",
            alias: default_alias
        },
        {
            id: 39,
            name: "Miku",
            japanese_name: "ミク",
            romaji: "Miku",
            age: "14-15 17 (2 year timeskip, Episode 24) 25/26 (10 year timeskip)",
            quote: `"I'm not gonna let you die, Zorome! I'm gonna save you!"—Miku to Zorome during the battle with the VIRM`,
            description: `Miku is a main character in DARLING in the FRANXX, a former Parasite with the codename "390." She was partnered with Zorome to pilot the FRANXX Argentea. Assertive and headstrong, Miku is confident, blunt, and often clashes with others, especially the boys. She shares a strong bond with Zorome, and despite her pride and brashness, she is compassionate and has a fondness for flowers, making flower crowns. Miku is close friends with Kokoro and dislikes Ichigo's bossiness. Although initially wary of Zero Two, she grows to like her. Miku also has feelings for Zorome but doesn't realize them due to her pride and lack of understanding of love. She is protective of Zorome and continues to care deeply for him, even after becoming a teacher for the next generation.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/c/c0/Miku_infobox.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: "around 153cm (5'0\")",
            weight: "around 42 kg (93 lbs)",
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Miku",
            type: "Human",
            alias: default_alias
        },
        {
            id: 40,
            name: "Mitsuru",
            japanese_name: "ミツル",
            romaji: "Mitsuru",
            age: "14-15 17 (2 year timeskip, Episode 24) 25/26 (10 year timeskip)",
            quote: `"I'm not going to run away anymore. I'll never let you go again."—Mitsuru to Kokoro after regaining his memories`,
            description: `Mitsuru is a former Parasite from DARLING in the FRANXX, initially partnered with Kokoro to pilot Genista. After a troubled past with a broken promise to Hiro and issues with his self-confidence, Mitsuru grew cynical and distant, even avoiding relationships. He later developed a deep bond with Kokoro, leading to a romantic relationship and marriage. However, their memories were erased, causing initial tension. After learning Kokoro was pregnant, Mitsuru’s newfound sense of responsibility shifted his priorities, and he became more loving and protective of her and their child. He later became a doting father and husband, deeply caring for Kokoro and their children, and his character evolved from cynical and aloof to emotionally open and devoted.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/b/be/Mitsuru_infobox.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: "around 178cm (5'10\")",
            weight: "around 58 kg (128 lbs)",
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Mitsuru",
            type: "Human",
            alias: default_alias
        },
        {
            id: 41,
            name: "Nana",
            japanese_name: "ナナ",
            romaji: "Nana",
            age: "Appears in 20’s, Alive (Immortal)",
            quote: `"I'm sorry. I can't be a good mother. But I'll try my best."—Nana to the children`,
            description: `Nana is a character from DARLING in the FRANXX, serving as the parasite manager for APE's combat headquarters. She is caring, loyal, and deeply concerned about the well-being of the children, having known them since infancy. While she acts as a motherly figure, she is also strict, prioritizing orders and the plantation's safety, even making tough decisions, such as abandoning Goro to protect the plantation. Initially, she hesitates to allow Hiro to partner with Zero Two due to her reputation, but she later supports the children’s individual choices, such as Kokoro and Mitsuru having a baby.  Nana undergoes significant growth, especially after witnessing the children’s desire for peace and their development. Her past as a parasite, including the loss of her partner and altered memories, causes her to question her purpose. After regaining fragments of her memories, she becomes more compassionate and protective, ultimately supporting the children’s aspirations and decisions, including Hiro’s mission to rescue Zero Two and the squad’s future goals. Nana transforms from a strict, emotionless figure to a nurturing one, feeling proud of the children’s achievements and committing to supporting their future.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/3/30/Nana_infobox.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Nana",
            type: "Human",
            alias: default_alias
        },
        {
            id: 42,
            name: "Naomi",
            japanese_name: "ナオミ",
            romaji: "Naomi",
            age: "14-15 17 (Episode 24) 25/26 (10 year timeskip)",
            quote: `"I hope you find a good partner, Hiro"—To Hiro when she leaves the squad`,
            description: `Nawabari is a giant black and blue Klaxosaur serpent loyal to the Klaxosaur Princess (001). With glittering scales and a cobra-like hood, Nawabari is calm but highly dangerous, sharing the Princess's hatred for humans. He has served her for millions of years, willing to attack anyone who threatens her. Though fiercely loyal, he is also compassionate enough to compromise for her well-being, such as helping Zero Two save her from a doomsday virus. Nawabari played a crucial role in key battles, including protecting the Princess and assisting in the final fight against VIRM. He died helping Zero Two reach the core of Star Entity to save Hiro and Strelizia. Nawabari is a powerful being capable of overpowering FRANXX units, with sections of his body hollow for the Princess to ride inside. He can fuse with another serpent, creating a formidable, multi-eyed creature. The term "nawabari" refers to a castle layout from the Edo Period, symbolizing Nawabari's strategic strength.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/3/39/Naomi.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Naomi",
            type: "Human",
            alias: default_alias
        },
        {
            id: 43,
            name: "Nawabari",
            japanese_name: "ナワバリ",
            romaji: "Nawabari",
            age: "Deceased",
            quote: default_quote,
            description: `Nawabari is a giant black and blue Klaxosaur serpent loyal to the Klaxosaur Princess (001). With glittering scales and a cobra-like hood, Nawabari is calm but highly dangerous, sharing the Princess's hatred for humans. He has served her for millions of years, willing to attack anyone who threatens her. Though fiercely loyal, he is also compassionate enough to compromise for her well-being, such as helping Zero Two save her from a doomsday virus. Nawabari played a crucial role in key battles, including protecting the Princess and assisting in the final fight against VIRM. He died helping Zero Two reach the core of Star Entity to save Hiro and Strelizia. Nawabari is a powerful being capable of overpowering FRANXX units, with sections of his body hollow for the Princess to ride inside. He can fuse with another serpent, creating a formidable, multi-eyed creature. The term "nawabari" refers to a castle layout from the Edo Period, symbolizing Nawabari's strategic strength.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/6/61/PrincessCave.png",
            image_height: "200px",
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Nawabari",
            type: "Klaxosaur serpent",
            alias: default_alias
        },
        {
            id: 44,
            name: "Old Woman",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: "Deceased",
            quote: default_quote,
            description: `The unnamed Old Woman is an elderly character in DARLING in the FRANXX, who is part of the immortal Adults living in the inner city. She wears a white headdress and relies on magma energy for sustenance, with an externally mounted orange heart. She is kind to Zorome, but remains emotionally detached, revealing that her immortality treatment has made her sterile and unable to feel the joys of human life, like eating or relationships. Zorome feels a mysterious connection with her, but she is unable to understand his sentiments about his partner, Miku.  Throughout their interaction, she expresses indifference toward many aspects of life, even offering tea and sweets but admitting that she no longer finds pleasure in taste. Zorome is confused and frustrated by her detached lifestyle, while the Old Woman becomes progressively ill, possibly due to her biochemical differences with Zorome or the memory manipulation by APE. She reveals she lives with her partner, whose brain's reward system is artificially activated for pleasure, but they live separate lives, not meddling in each other's affairs. She suggests that Zorome change his partner, which surprises him. As Zorome grows emotional and reflects on her kindness, he asks her to be his family or friend, though she gently rejects the idea. The Old Woman's interactions with Zorome highlight her loneliness and resignation from the human experiences she once valued.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/d/d9/Old_woman.png",
            image_height: "200px",
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Old_Woman",
            type: "Human",
            alias: default_alias
        },
        {
            id: 45,
            name: "Papa",
            japanese_name: "パパ",
            romaji: "Papa",
            age: "More than 60 million years",
            quote: `"I am the collective consciousness of humanity. I am Papa."—Papa introducing himself to Hiro and Zero Two`,
            description: `Papa is the chairman of the APE council in DARLING in the FRANXX, effectively overseeing all of humanity and the plantations. He is revered as a god by the Parasites, except for Zero Two. Papa is depicted wearing a gorilla-like golden mask and white robes, and his true form is a purple, bodiless VIRM entity. He is methodical, calculated, and ruthless in his decisions, prioritizing the safety of APE and its objectives above all else. He is willing to sacrifice anyone, including Parasites, for the greater good, viewing them as expendable tools in the fight against the Klaxosaurs.  Despite his cold, authoritarian nature, Papa provides the Parasites with rewards and shows some care for their well-being, though he forbids them from forming personal relationships. He manipulates them into serving his agenda by promising freedom and rewards while maintaining strict control. Papa's ultimate goal is to serve VIRM’s interests, and he is willing to go to extreme lengths, including orchestrating betrayals and mass casualties, to achieve his aims.  He has a particular interest in Zero Two, whom he sees as an important weapon, and Hiro, whom he considers a "special specimen" for his compatibility with Zero Two. However, Papa reveals his true disregard for human emotions and connections when he mocks Hiro and Zero Two’s belief that their souls will reunite after death, only to be proven wrong when their souls return to Earth a thousand years later.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/1/19/Papa-close.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: "280px",
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Papa",
            type: "Council Member",
            alias: default_alias
        },
        {
            id: 46,
            name: "Squad 13",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: default_age,
            quote: default_quote,
            description: `Squad 13, composed of ten 14-year-old Parasites, is an experimental team living at Plantation 13. They are trained to pilot specialized FRANXX mechs to fight Klaxosaurs. The squad is unique for using names instead of code numbers and has a strong bond, despite being initially hesitant about Zero Two, who becomes Hiro’s partner. Zero Two has a dangerous reputation, as her partners often die, but Hiro becomes the only one able to synchronize with her. Over time, Squad 13 forms close bonds, faces challenges, and uncovers truths about their roles as weapons and the true enemy, VIRM.  The squad goes through many trials, including battles, emotional struggles, and conflicts about love and identity. They are betrayed by APE, who reveals their true purpose and the parasites' lack of freedom. Despite this, Squad 13 continues to fight, uncovering the truth about VIRM and their role in manipulating humanity and Klaxosaurs. After a climactic battle and sacrifice, Hiro and Zero Two defeat VIRM but perish in the process, leaving the squad to rebuild society.  Years later, Squad 13 members live fulfilling lives, with families and careers, honoring the sacrifices of Hiro and Zero Two. Eventually, a thousand years pass, and the souls of Hiro and Zero Two are reincarnated, meeting again at a cherry blossom tree.`,
            image_link: jsonImages["squad_13"],
            image_height: "200px",
            image_width: default_image_height,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Squad_13",
            type: "Group of humans",
            alias: default_alias
        },
        {
            id: 47,
            name: "Squad 26",
            japanese_name: default_japanese_name,
            romaji: default_romaji,
            age: default_age,
            quote: default_quote,
            description: `Squad 26 is a parasite unit stationed at Plantation 26, Chrysanthemum. Two years before the events of the series, they were involved in a joint operation with Zero Two that resulted in the deaths of 26 members due to her recklessness, including the partner of 090. In Episode 05, due to a klaxosaur attack depleting Plantation 13’s magma reserves, the two squads collaborate for defense. Squad 26, more seasoned and composed, is led by 090, who offers advice to Squad 13.  During the mission, 090 is hesitant to work with Zero Two because of their past experience. Initially, Squad 26 performs well, but the overwhelming number of Klaxosaurs forces Squad 13 to step in. After a tense battle, Strelizia saves the day, and the squads manage to survive.  Months later, in Episode 15, during the siege of Gran Crevasse, Squad 26 struggles against an enormous number of Klaxosaurs and requires the 9's intervention. When a Super Lehmann Klaxosaur destroys Plantation 26, 090 is ordered to execute Protocol 32. Despite his hesitation, 090 follows through, and the squad sacrifices themselves to destroy the plantation, leaving Squad 13 to continue the fight.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/f/f9/Plan26.png",
            image_height: "150px",
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Squad_26",
            type: "Group of humans",
            alias: default_alias
        },
        {
            id: 48,
            name: "Standard FRANXX",
            japanese_name: " 量産型",
            romaji: "Ryōsan gata",
            age: "Inactive (Became monuments; used to craft stuff and energy)",
            quote: default_quote,
            description: `The Standard FRANXX is a mass-produced model used by most plantations, except Cerasus. It is dark grey, slender, and features yellow goggles. Equipped with a spear, it can shoot orange harpoons made of magma-energy, which also emit powerful electromagnetic energy to combat Klaxosaurs.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/9/93/Mecha_masspro.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Standard_FRANXX",
            type: "FranXX",
            alias: default_alias
        },
        {
            id: 49,
            name: "Strelizia",
            japanese_name: "ストレリチア",
            romaji: "Sutorerichia",
            age: "Destroyed (Exploded with the Klaxosaur Bomb) (Rebuilt as a monument)",
            quote: default_quote,
            description: `Strelizia is a custom-made FRANXX piloted by Zero Two, with various Stamens attempting to pilot it, but only Hiro survives long-term. It is a large white, orange, and red mecha with unique features like large shoulder pads, red-heeled feet, and long orange-gold strands resembling hair. Strelizia wields a lance called "Queen Pike." The mecha undergoes several transformations: in Episode 15, it turns red in Stampede Mode when Zero Two pilots it; in Episode 20, its colors shift to black and blue when 001 pilots it with Hiro; in Episode 21, it transforms into Strelizia Apus, gaining wings and larger features; in Episode 23, it changes into Strelizia's True Apus form with Zero Two's face and body. In Episode 24, Strelizia self-destructs and reverts to its original form, now solid gold.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/9/93/Strelizia.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Strelizia",
            type: "FranXX",
            alias: default_alias
        },
        {
            id: 50,
            name: "Tarsier",
            japanese_name: "タルシエ",
            romaji: "Tarushie",
            age: "Over 60 million years",
            quote: default_quote,
            description: `Tarsier is a member of the Seven Sages of APE and secretly a VIRM. He wears a white-and-gold robe and primate mask, and is the shortest of the Seven Sages. Tarsier has hidden magma blades and attempts to kill the Klaxosaur Princess in Episode 17. Like the other sages, he lacks human empathy and views parasites and FRANXX Squads as expendable. He impulsively attacks the Klaxosaur Princess when threatened, leading to his death after she impales him, despite warnings from Lemur.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/7/74/WiseMan7.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Tarsier",
            type: "Council Member",
            alias: default_alias
        },
        {
            id: 52,
            name: "Vice Chairman",
            japanese_name: "ふくしゅせき 副主席",
            romaji: "Fukushuseki",
            age: "Over 60 million years",
            quote: default_quote,
            description: `The Vice Chairman in DARLING in the FRANXX is a character who wears a garden gnome-like white headpiece, a white and gold coat, and a mask resembling a monkey. In Episode 20, it's revealed that his true form is a purple, four-pointed star with eyes, as he is part of the VIRM, an alien race that doesn't believe in having a physical body. Lacking emotions, he, along with Papa, views parasites, FRANXX squads, and plantations as disposable tools in their mission to eradicate Klaxosaurs. However, it's later revealed that their real motive is to eliminate the Klaxosaurs so VIRM can consume humanity’s souls for energy.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/6/63/WiseMan3.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: default_height,
            weight: default_weight,
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Vice_Chairman",
            type: "Council Member",
            alias: default_alias
        },
        {
            id: 52,
            name: "Zero Two",
            japanese_name: "ゼロツー",
            romaji: "Zero Tsū",
            age: "Unknown",
            quote: [`"I was waiting for you, Darling."—Zero Two to Hiro`, `"If you don’t belong here, just build a place where you do. If you don’t have a partner, find one. And if you can’t, take one by force."—Zero Two after Hiro explains his lack of partner`],
            description: `Zero Two is the main heroine and deuteragonist in DARLING in the FRANXX. A human-klaxo sapien hybrid, she initially fought alone as an elite pilot with the codename "002" and was known as the "Partner Killer" due to her previous co-pilots' deaths. Despite her violent and isolated nature, Zero Two grows close to Hiro, becoming his partner and eventually developing romantic feelings for him. Throughout the series, she struggles with her Klaxosaur blood and desire to become fully human. This causes friction with Hiro, though they eventually rediscover their past connection and sacrifice themselves for humanity's survival.  As a child, Zero Two was treated like a monster, and this led to her cynical and detached attitude. Over time, she grew closer to Hiro, showing more affection and care, despite her emotional struggles. Her appearance includes long pink hair, horns, and a military-style uniform. After several intense battles, she becomes more human-like, gaining self-awareness and socializing with others in Squad 13. Her relationship with Hiro deepens, and she vows to protect him, even if it means sacrificing herself.  Zero Two’s journey is marked by her battle to accept herself, her love for Hiro, and her ultimate realization of humanity's strength. In the end, she and Hiro sacrifice their lives to save Earth, leaving behind a legacy of hope for the future.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/8/88/Zero_Two_infobox.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: "Around 170cm (5'7\")",
            weight: "48 kg (106 lbs)",
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Zero_Two",
            type: "Human-Klaxo Sapien Hybrid",
            alias: ["Partner Killer (パートナー殺し, Pātonā-Goroshi)", "Nine Iota (ナインイオタ, Nain Iota)", "Code:002"]
        },
        {
            id: 53,
            name: "Zorome",
            japanese_name: "ゾロメ",
            romaji: "Zorome",
            age: "14-15 17 (2 year timeskip, Episode 24) 25/26 (10 year timeskip)",
            quote: `"I've never directly spoken with an adult. But they are always looking after us. If we do our best, they praise us and even give us rewards. If I continue fighting for them, I'm sure that someday I can also become an adult. I've been dreaming forever for this day to come."—Zorome about his dream of becoming an adult`,
            description: `Zorome is a character from DARLING in the FRANXX, originally a Parasite with the codename "666" from the Thirteenth Plantation, paired with Miku to pilot the FRANXX Argentea. He is immature, impulsive, and somewhat of a bully, but deeply loyal to his squad and the adults, especially APE, as he aspires to become an adult. He is sarcastic, with a strong ego, and often mocks others, particularly Hiro, who he resents for receiving special privileges. Despite his gruff attitude, Zorome cares deeply for his friends and values his relationship with Miku, even if he struggles with understanding love and affection. He also shows concern for others, like Futoshi, and has a fondness for children, later becoming a well-liked teacher. Zorome is often impulsive but remains loyal and dedicated to his squadmates, showing emotional growth throughout the series.`,
            image_link: "https://static.wikia.nocookie.net/darling-in-the-franxx/images/d/d5/Zorome_infobox.png",
            image_height: default_image_height,
            image_width: default_image_width,
            height: "161 cm (5'3\")",
            weight: "48 kg (106 lbs)",
            more_information: "https://darling-in-the-franxx.fandom.com/wiki/Zorome",
            type: "Human",
            alias: default_alias
        }
    ];

    export async function process_single_widget(
        chosen_widget: typeof character[0]
    ): Promise<string> {
        let html = ``;
        const widgetObjects = Object.keys(chosen_widget);

        html += `<h2>${chosen_widget.name}</h2>`;

        html += `<img src="${chosen_widget.image_link}" alt="${chosen_widget.name}" style="width: ${chosen_widget.image_width}; height: ${chosen_widget.image_height};">`;

        html += `<table class="table .table-custom">`;

        for (let i = 0; i < widgetObjects.length; i++) {
            console.log(`i: ${i}`);
            const key: string = widgetObjects[i];
            console.log(`key: ${key}`);
            let value: any = chosen_widget[key as keyof typeof chosen_widget];
            if (key != "image_link") {
                console.log(`value: ${value}`);
            }

            if (key === "name" || key === "image_link") {
                console.log("skipping name or image_link: ", key);
                continue;
            };

            if (key === "image_height" || key === "image_width" || key === "id") {
                console.log("skipping image_height or image_width or id: ", key);
                continue;
            }

            console.log("checking if value is an array");
            if (key === "alias" && Array.isArray(value)) {
                // console.log("value is an array");
                value = value.join("<br>");
                // console.log(`value (after join): ${value}`);
            }

            console.log("checking if value is a link");
            if (typeof value === "string" && value.startsWith("http")) {
                // console.log("value is a link");
                value = `<a href="${value}" target="_blank">${value}</a>`;
                // console.log(`value (after link): ${value}`);
            }
            html += `<tr><td><strong>${key}</strong></td><td>${value}</td></tr>`;
        }
        html += `</table>`;
        return html;
    }
    export async function getDarling(): Promise<string> {
        console.log("getDarling");

        const chosen_widget = character[Math.floor(Math.random() * character.length)];

        const html = await process_single_widget(chosen_widget);
        // console.log("final html: ", html);
        return html;
    }
    export async function getDarlingFull(): Promise<string> {
        console.log("getDarlingFull");
        let html = ``;

        for (let i = 0; i < character.length; i++) {
            const chosen_widget = character[i];
            html += '<div>';
            html += await process_single_widget(chosen_widget);
            html += "</div>";
        }
        // console.log("final html: ", html);
        return html;
    }
}
