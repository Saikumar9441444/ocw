const fs = require('fs');
let content = fs.readFileSync('c:/Users/saiku/Downloads/OCW/src/config.ts', 'utf8');

// Replace local mp4 links with Drive links
content = content.replace(/'\/videos\/bike_delivery\.mp4'/g, "'https://drive.google.com/file/d/1oxNT6XI0QhSasboHngETMQ7OdrBl3_Be/preview?autoplay=1&mute=1&controls=0'");
content = content.replace(/'\/videos\/cricket_tournament\.mp4'/g, "'https://drive.google.com/file/d/14ypJh5tTThiN6tA2-N9DHkAPXarlzibs/preview?autoplay=1&mute=1&controls=0'");
content = content.replace(/'\/videos\/cult_store_01\.mp4'/g, "'https://drive.google.com/file/d/1iypBYUcSWbkEdFXSASOjdZpg8Rp3tmr1/preview?autoplay=1&mute=1&controls=0'");
content = content.replace(/'\/videos\/cult_store_02\.mp4'/g, "'https://drive.google.com/file/d/1UV7n3BePZtRaLr_LcxjiGPen9HBJSE5J/preview?autoplay=1&mute=1&controls=0'");
content = content.replace(/'\/videos\/fathers_day\.mp4'/g, "'https://drive.google.com/file/d/1UztxV0UY0yXC7vL0GiwqWWpAhhVzJwLh/preview?autoplay=1&mute=1&controls=0'");
content = content.replace(/'\/videos\/pooja\.mp4'/g, "'https://drive.google.com/file/d/1UztxV0UY0yXC7vL0GiwqWWpAhhVzJwLh/preview?autoplay=1&mute=1&controls=0'");
content = content.replace(/'\/videos\/trainers_gym\.mp4'/g, "'https://drive.google.com/file/d/1QJrAcYeyeRF7CdiqkekjKGx-TKdSve-j/preview?autoplay=1&mute=1&controls=0'");
content = content.replace(/'\/videos\/school_function\.mp4'/g, "'https://drive.google.com/file/d/1UzAxwh_lt2MNQTD8M9z_RV3YB2-X2FzF/preview?autoplay=1&mute=1&controls=0'");
content = content.replace(/'\/videos\/yoga_day_kids\.mp4'/g, "'https://drive.google.com/file/d/1lN85nodKYsxf-kRsJCOkfM6rLr9JmO6O/preview?autoplay=1&mute=1&controls=0'");

content = content.replace(/'\/videos\/into_the_wild\.mp4'/g, "'https://drive.google.com/file/d/1r9in9RN6kRNaD7eODHKjptSeX4nXKGsp/preview?autoplay=1&mute=1&controls=0'");
content = content.replace(/'\/videos\/pulse_of_the_city\.mp4'/g, "'https://drive.google.com/file/d/14Kf_3AImTTtBAxjwsEO1i0G37Yhggqyb/preview?autoplay=1&mute=1&controls=0'");
content = content.replace(/'\/videos\/frames_of_light\.mp4'/g, "'https://drive.google.com/file/d/185ZVXci2FSDPKpDzSMsYRE1je9KfIwQ3/preview?autoplay=1&mute=1&controls=0'");
content = content.replace(/'\/videos\/above_and_beyond\.mp4'/g, "'https://drive.google.com/file/d/1BvL7o12Cwj0ztLmrHGMHTdouHnscIUwf/preview?autoplay=1&mute=1&controls=0'");

fs.writeFileSync('c:/Users/saiku/Downloads/OCW/src/config.ts', content);
console.log('done');
