const fs = require('fs');
let content = fs.readFileSync('c:/Users/saiku/Downloads/OCW/src/config.ts', 'utf8');

content = content.replace(/'https:\/\/drive\.google\.com\/file\/d\/1oxNT6XI0QhSasboHngETMQ7OdrBl3_Be[^']+'/g, "'/videos/bike_delivery.mov'");
content = content.replace(/'https:\/\/drive\.google\.com\/file\/d\/14ypJh5tTThiN6tA2-N9DHkAPXarlzibs[^']+'/g, "'/videos/cricket_tournament.mov'");
content = content.replace(/'https:\/\/drive\.google\.com\/file\/d\/1iypBYUcSWbkEdFXSASOjdZpg8Rp3tmr1[^']+'/g, "'/videos/cult_store_01.mov'");
content = content.replace(/'https:\/\/drive\.google\.com\/file\/d\/1UV7n3BePZtRaLr_LcxjiGPen9HBJSE5J[^']+'/g, "'/videos/cult_store_02.mov'");
content = content.replace(/'https:\/\/drive\.google\.com\/file\/d\/1UztxV0UY0yXC7vL0GiwqWWpAhhVzJwLh[^']+'/g, "'/videos/fathers_day.mov'");
content = content.replace(/id: 6,[\s\S]*?video: 'https:\/\/drive\.google\.com[^']+'/g, "id: 6,\n      title: 'POOJA',\n      category: 'EVENT',\n      year: '2026',\n      description: 'Traditional moments captured during a sacred Pooja ceremony.',\n      image: '/story_section.jpg',\n      video: '/videos/pooja.mov'");
content = content.replace(/'https:\/\/drive\.google\.com\/file\/d\/1QJrAcYeyeRF7CdiqkekjKGx-TKdSve-j[^']+'/g, "'/videos/trainers_gym.mov'");
content = content.replace(/'https:\/\/drive\.google\.com\/file\/d\/1UzAxwh_lt2MNQTD8M9z_RV3YB2-X2FzF[^']+'/g, "'/videos/school_function.mov'");
content = content.replace(/'https:\/\/drive\.google\.com\/file\/d\/1lN85nodKYsxf-kRsJCOkfM6rLr9JmO6O[^']+'/g, "'/videos/yoga_day_kids.mov'");
content = content.replace(/'https:\/\/drive\.google\.com\/file\/d\/1r9in9RN6kRNaD7eODHKjptSeX4nXKGsp[^']+'/g, "'/videos/bike_delivery.mov'");
content = content.replace(/'https:\/\/drive\.google\.com\/file\/d\/14Kf_3AImTTtBAxjwsEO1i0G37Yhggqyb[^']+'/g, "'/videos/cricket_tournament.mov'");
content = content.replace(/'https:\/\/drive\.google\.com\/file\/d\/185ZVXci2FSDPKpDzSMsYRE1je9KfIwQ3[^']+'/g, "'/videos/cult_store_01.mov'");
content = content.replace(/'https:\/\/drive\.google\.com\/file\/d\/1BvL7o12Cwj0ztLmrHGMHTdouHnscIUwf[^']+'/g, "'/videos/fathers_day.mov'");

fs.writeFileSync('c:/Users/saiku/Downloads/OCW/src/config.ts', content);
console.log('done');
