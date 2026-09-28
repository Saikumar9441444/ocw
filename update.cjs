const fs = require('fs');
let content = fs.readFileSync('c:/Users/saiku/Downloads/OCW/src/config.ts', 'utf8');

const links = [
  "https://drive.google.com/file/d/1oxNT6XI0QhSasboHngETMQ7OdrBl3_Be/preview?autoplay=1&mute=1&controls=0",
  "https://drive.google.com/file/d/14ypJh5tTThiN6tA2-N9DHkAPXarlzibs/preview?autoplay=1&mute=1&controls=0",
  "https://drive.google.com/file/d/1iypBYUcSWbkEdFXSASOjdZpg8Rp3tmr1/preview?autoplay=1&mute=1&controls=0",
  "https://drive.google.com/file/d/1UV7n3BePZtRaLr_LcxjiGPen9HBJSE5J/preview?autoplay=1&mute=1&controls=0",
  "https://drive.google.com/file/d/1UztxV0UY0yXC7vL0GiwqWWpAhhVzJwLh/preview?autoplay=1&mute=1&controls=0",
  "https://drive.google.com/file/d/1UztxV0UY0yXC7vL0GiwqWWpAhhVzJwLh/preview?autoplay=1&mute=1&controls=0",
  "https://drive.google.com/file/d/1QJrAcYeyeRF7CdiqkekjKGx-TKdSve-j/preview?autoplay=1&mute=1&controls=0",
  "https://drive.google.com/file/d/1UzAxwh_lt2MNQTD8M9z_RV3YB2-X2FzF/preview?autoplay=1&mute=1&controls=0",
  "https://drive.google.com/file/d/1lN85nodKYsxf-kRsJCOkfM6rLr9JmO6O/preview?autoplay=1&mute=1&controls=0",
  "https://drive.google.com/file/d/1r9in9RN6kRNaD7eODHKjptSeX4nXKGsp/preview?autoplay=1&mute=1&controls=0",
  "https://drive.google.com/file/d/14Kf_3AImTTtBAxjwsEO1i0G37Yhggqyb/preview?autoplay=1&mute=1&controls=0",
  "https://drive.google.com/file/d/185ZVXci2FSDPKpDzSMsYRE1je9KfIwQ3/preview?autoplay=1&mute=1&controls=0",
  "https://drive.google.com/file/d/1BvL7o12Cwj0ztLmrHGMHTdouHnscIUwf/preview?autoplay=1&mute=1&controls=0"
];

// Replace the 9 portfolio video links
content = content.replace(/\/videos\/bike_delivery_shoot\.mov/g, links[0]);
content = content.replace(/\/videos\/cricket_tournament_shoot\.mov/g, links[1]);
content = content.replace(/\/videos\/cult_store_01_shoot\.mov/g, links[2]);
content = content.replace(/\/videos\/cult_store_02_shoot\.mov/g, links[3]);
content = content.replace(/\/videos\/fathers_day_shoot\.mov/g, links[4]);
content = content.replace(/\/videos\/pooja_shoot\.mov/g, links[5]);
content = content.replace(/\/videos\/trainers_gym_shoot_\.mov/g, links[6]);
content = content.replace(/\/videos\/vidhyardhi_school_function_shoot\.mov/g, links[7]);
content = content.replace(/\/videos\/yoga_day_kids_shoot\.mov/g, links[8]);

content = content.replace(/thumbnail: '\/drone_cinematic\.jpg',/g, "thumbnail: '/drone_cinematic.jpg',\n      video: '" + links[9] + "',");
content = content.replace(/thumbnail: '\/event_cinematic\.jpg',/g, "thumbnail: '/event_cinematic.jpg',\n      video: '" + links[10] + "',");
content = content.replace(/thumbnail: '\/story_section\.jpg',/g, "thumbnail: '/story_section.jpg',\n      video: '" + links[11] + "',");
content = content.replace(/thumbnail: '\/hero_cinematic\.jpg',/g, "thumbnail: '/hero_cinematic.jpg',\n      video: '" + links[12] + "',");

fs.writeFileSync('c:/Users/saiku/Downloads/OCW/src/config.ts', content);
console.log('done');
