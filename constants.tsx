
import { Asset, Tutorial } from './types';

export const ASSETS: Asset[] = [
  {
    id: '1',
    title: 'Neon Pulse Chat Box',
    price: 19,
    category: 'Widgets',
    description: 'Fully reactive neon-themed chat box with customizable glow colors and sound triggers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg1vLqchgM-F22BMsgpoKuzH6K-a7K7vffcx__XTSKOUogDpobpks6Q7dMKHJyYC9TVWuExP7DBRhYdI7HgN5Ny3m4WGIiXQgrWDcedEYm-2ZMnWQzzTaQ0dRsBvTKtJnGmAapZGrGwOwE3imjTM6V_VZpEw8Z3oSL_heok3dr9FCYxdIhtWj-sDAJBzz5P66JX8wGf9dQNpGFJtSyhK_dmUYZJJRQm8YvQQMO90eKO13sSR8Yd5uRavvlXjgfOtsScmYWxzMddIRR',
    tags: ['OBS', 'JS'],
    badge: 'Bestseller'
  },
  {
    id: '2',
    title: 'Cyber Stream Opener',
    price: 35,
    category: 'Intros',
    description: 'High-energy 10s intro animation. 4K resolution, easily editable with text & logo placeholders.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwDgf0eBdSHnUossWJqe0Iwrfb8HY_FfTFlR4aHlsvZE_zgJEEe3AfwsprRElgyMSLh3hfJPVoNVcHz4b_JDkiz9A5gP1sNsUYFYa3xqUKAo5aanaDLJALj6GO899HoEl97-7Fqk46gqffc_HGCexsor7mCfUiDUpa4y78nND2aiq7OlJz9qvrgvYdU4ri-sIcWYqh4bphgJ0lbFzs9nnHTFyOlhiDx7YTUm7L8B9ru2Sh2vNwBQykJYvS8QZGlxg3e8w8Rr7WzNQG',
    tags: ['AE'],
  },
  {
    id: '3',
    title: 'Auto-Clip Bot v2.0',
    price: 24,
    oldPrice: 49,
    category: 'Scripts',
    description: 'Advanced Python script that automatically captures clips during hype moments based on chat velocity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6I3jq20qbHktRCwcmsc3rBGaxmxPXhPH-wYMI3rhZRF39rkMCvMnFGm25G0-UtZ8RfsH-f_TJ95iHLErq_ON7HV3fXKINu6PhBipct0NubyGDsDYJyTjGG37y52y7TLcppLbad-xAdCAaWrJnsM9FhAHVD8MMV9Dn5yxV7_CH2k_T2iIt1p0uObgSRdrYOlT4Vla5wwQkeTv02qOiq1bqPgQNvl34_zzj6tb56QEaIlBOtOzLLvHebai0LBOwwGPpmfoG6M4YE-eA',
    tags: ['PY', 'API'],
    badge: 'Sale'
  },
  {
    id: '4',
    title: 'Lighting Masterclass',
    price: 15,
    category: 'Tutorials',
    description: '2-hour deep dive into lighting your stream room for that professional cinematic look on a budget.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS34B5beHyXytokqc9dW0TZEmw0brkGY6SSRgg3QNFkasBoxZtSgeUVeZ1m3rvdaTNeonic4LIJT60j3D-E4p8OdLPm26IaXmqXGuoh1rGR3E8Nt4-FVXrKj0eb9RmcElN9J7qJdLESlspIwAjH1tImzWzxYjUraJZm-SVDcyR4hD1272eZig-omPPjeIct13_Z5slE2_QgdXtCTuQ9APusRo8XL4FD-lZQiUBMgu555RuDSU6tvIQ_BEpqEooGEyzvmJapwlWUQ9J',
    tags: ['VIDEO', 'PDF'],
  },
  {
    id: '5',
    title: 'Glitch End Screen',
    price: 20,
    category: 'Outros',
    description: 'Stylized outro loop with social media slots and "Recent Video" dynamic overlay space.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbGE3vsHeSfLgsDGGtSeNNSW2hP19CmaQvTud6uIlAigeTAm5kNRFYbiZkWVULoYqKu4fUWR6mOq37CQLG38K6AeaFUZ-UDEgVx2DpC6M9vcdzjZC9P8aNixB9sOBPgAeADgrU7HruFwopBj2eiynQ6d0VPDdjr0xyVRGV9b4PFK8DQglHQzs_AjVA4jhjQVufi6vRV-B3plD4cH-yi-Z0lGQyOF41EmPBTNu6JWMbkvO2Y-d3DVmJB7ATsdvh5QZJJyL7dL-dT_bA',
    tags: ['MP4', 'WEBM'],
  },
  {
    id: '6',
    title: 'Scene Switch Automator',
    price: 'Free',
    category: 'Scripts',
    description: 'Simple Lua script for OBS that switches scenes based on microphone levels or activity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6kHt6kkDs9mXKS_MchYHPtdOAwkTIo_epJYWsE4rPyACC1Of4hpVgzgPd14Ew04RxepbDOcJ8oY3pnnBPJLMe3ZgJeOLHK7O54dmvuagnwH0JOtAeZqJ6niVaE3FMS1ItVsd-X6pBC5THok3E6KFwRonAwAZNjrY_Wv2dE_wQWO1cF6QQrJlyhDHPDTVUEhvTzbIRLDF2D8ulctShvPfaB8CQhRL-Jg5GU1yWuce4yu55FRTFkLtdQmfNd74SJFOc9RNi0tyFfsXj',
    tags: ['LUA'],
    badge: 'Free'
  }
];

export const TUTORIALS: Tutorial[] = [
  {
    id: 't1',
    title: 'How to set up Dynamic Alerts & Live Chat Overlays',
    level: 'Intermediate',
    duration: '12:45',
    views: '8.2k',
    date: '2 days ago',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuNnLqkSzTDUVHCvNbv60-kyP4vBMwFrWtJ_3-eo4wO4_uMwO3cAm7NTM_pxaa_4V_pZP2k69m9_C_RgoKEabKkWiLcy9ntbucEOpJ3btmksQvrSac-zemft-fHjR31zbxTf34IG7ft-r3YWo17rnMlb9PL9-aCPGm_HsLGSBCYY_cjygNP-ijBLk8SGSUjOaTKpBoH58B_Wh8m1MJuyiVRf3G6EQgxLwDI7n7AtAnQI627hUs3W9B8vawsqxjan78Sur8Wbvixpso'
  },
  {
    id: 't2',
    title: 'Optimizing Bitrate for Twitch & YouTube Streams',
    level: 'Beginner',
    duration: '08:12',
    views: '15k',
    date: '1 week ago',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi_s9X2Mts2ACzahAoRvmIfOGUpMTTdPHspMEaC-vCpelm_2jRZdP31A5eS8dN8fUGAR4L2c7TlmPbgN2SH2YOvzjVqSzxkinNFXylSPezJqaC1lWbQghEcE4OsrEn5AQ1BxSn-B4_eGiSm_8cdF9o4Y-D8Faw0-NpZV2hW1oRvo3ScV5mWNiN-s7Pm7XtvP9llnk5zZa7CC8ryOVeKNJiebYfYbyhzcAcrMBrW-py1ri4H7t36wTX78HuB0Es984N8ZhFXJRLzDQ1'
  },
  {
    id: 't3',
    title: 'Advanced Python Scripting for OBS Automation',
    level: 'Advanced',
    duration: '25:30',
    views: '4.1k',
    date: '5 days ago',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX3LDPM98tMRfhZ21Io5lzEYkxQ0I8rw_wS0CgpmdsE4PPWlYZj-08Jvckd7rPm4RN205bmtPH0NVJuAgY_-KuRvaYYBHqIYIwSshiNKYLQ_ozmji3pfNzAFZot1r5SfcHAl0invwgEEDgrNGejWToUStjLip7KeDBokKB3yiJKWiBuA79oeJrdt02a0QF_SE5NAIb8FkyJW-3etJ15EtbKqPejRE0ApZDI51iWUTbEum2Liidn9lD-buCDhArzLqfehcTVpwPsY8o'
  },
  {
    id: 't4',
    title: 'Multi-Track Audio Routing for Flawless VODs',
    level: 'Intermediate',
    duration: '15:00',
    views: '12.7k',
    date: '3 weeks ago',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzit_W4J2SM6nNUgnnLW4cjGDGMSfPEbf8B0qgl6yJUhzHi_FU7eLUTCghiptzl7ZXa8x2Q2bFQC1d7fVh3fKa7kWnRWBdIy83cKxctOz0Z4cysTnN9_GT7xb_OQgTc9Iy6a5Va9lYK8zWFHjoVLPTnhkzmuhahYC_EH5KYCeoaAIfmaxxVz04LlWH1CqJVz5J-4Ey34kzvRA1ttl0Aw94CYJ0rw2Gf3U9SdqiFgyf4y2sUydNefBYN2AcnMiRRE6atT_yN6EfFFx7'
  }
];
