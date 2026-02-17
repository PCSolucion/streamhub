
import { Asset, Tutorial } from './types';

export const ASSETS: Asset[] = [
  {
    id: '1',
    title: 'Neon Pulse Chat Box',
    price: 19,
    category: 'Widgets',
    description: 'Caja de chat con temática neón totalmente reactiva con colores de brillo personalizables y disparadores de sonido.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg1vLqchgM-F22BMsgpoKuzH6K-a7K7vffcx__XTSKOUogDpobpks6Q7dMKHJyYC9TVWuExP7DBRhYdI7HgN5Ny3m4WGIiXQgrWDcedEYm-2ZMnWQzzTaQ0dRsBvTKtJnGmAapZGrGwOwE3imjTM6V_VZpEw8Z3oSL_heok3dr9FCYxdIhtWj-sDAJBzz5P66JX8wGf9dQNpGFJtSyhK_dmUYZJJRQm8YvQQMO90eKO13sSR8Yd5uRavvlXjgfOtsScmYWxzMddIRR',
    tags: ['OBS', 'JS'],
    badge: 'Bestseller'
  },
  {
    id: '2',
    title: 'Cyber Stream Opener',
    price: 35,
    category: 'Intros',
    description: 'Animación de introducción de 10s de alta energía. Resolución 4K, fácilmente editable con marcadores de posición de texto y logo.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwDgf0eBdSHnUossWJqe0Iwrfb8HY_FfTFlR4aHlsvZE_zgJEEe3AfwsprRElgyMSLh3hfJPVoNVcHz4b_JDkiz9A5gP1sNsUYFYa3xqUKAo5aanaDLJALj6GO899HoEl97-7Fqk46gqffc_HGCexsor7mCfUiDUpa4y78nND2aiq7OlJz9qvrgvYdU4ri-sIcWYqh4bphgJ0lbFzs9nnHTFyOlhiDx7YTUm7L8B9ru2Sh2vNwBQykJYvS8QZGlxg3e8w8Rr7WzNQG',
    tags: ['AE'],
  },
  {
    id: '3',
    title: 'Auto-Clip Bot v2.0',
    price: 24,
    oldPrice: 49,
    category: 'Scripts',
    description: 'Script avanzado de Python que captura clips automáticamente durante momentos de hype basado en la velocidad del chat.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6I3jq20qbHktRCwcmsc3rBGaxmxPXhPH-wYMI3rhZRF39rkMCvMnFGm25G0-UtZ8RfsH-f_TJ95iHLErq_ON7HV3fXKINu6PhBipct0NubyGDsDYJyTjGG37y52y7TLcppLbad-xAdCAaWrJnsM9FhAHVD8MMV9Dn5yxV7_CH2k_T2iIt1p0uObgSRdrYOlT4Vla5wwQkeTv02qOiq1bqPgQNvl34_zzj6tb56QEaIlBOtOzLLvHebai0LBOwwGPpmfoG6M4YE-eA',
    tags: ['PY', 'API'],
    badge: 'Sale'
  },
  {
    id: '4',
    title: 'Clase Maestra de Iluminación',
    price: 15,
    category: 'Tutorials',
    description: 'Inmersión profunda de 2 horas en la iluminación de tu habitación de stream para ese aspecto cinematográfico profesional con presupuesto.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS34B5beHyXytokqc9dW0TZEmw0brkGY6SSRgg3QNFkasBoxZtSgeUVeZ1m3rvdaTNeonic4LIJT60j3D-E4p8OdLPm26IaXmqXGuoh1rGR3E8Nt4-FVXrKj0eb9RmcElN9J7qJdLESlspIwAjH1tImzWzxYjUraJZm-SVDcyR4hD1272eZig-omPPjeIct13_Z5slE2_QgdXtCTuQ9APusRo8XL4FD-lZQiUBMgu555RuDSU6tvIQ_BEpqEooGEyzvmJapwlWUQ9J',
    tags: ['VIDEO', 'PDF'],
  },
  {
    id: '5',
    title: 'Pantalla Final Glitch',
    price: 20,
    category: 'Outros',
    description: 'Bucle de outro estilizado con espacios para redes sociales y superposición dinámica de "Video Reciente".',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbGE3vsHeSfLgsDGGtSeNNSW2hP19CmaQvTud6uIlAigeTAm5kNRFYbiZkWVULoYqKu4fUWR6mOq37CQLG38K6AeaFUZ-UDEgVx2DpC6M9vcdzjZC9P8aNixB9sOBPgAeADgrU7HruFwopBj2eiynQ6d0VPDdjr0xyVRGV9b4PFK8DQglHQzs_AjVA4jhjQVufi6vRV-B3plD4cH-yi-Z0lGQyOF41EmPBTNu6JWMbkvO2Y-d3DVmJB7ATsdvh5QZJJyL7dL-dT_bA',
    tags: ['MP4', 'WEBM', 'DR'],
  },
  {
    id: '6',
    title: 'Automatizador de Cambio de Escena',
    price: 'Free',
    category: 'Scripts',
    description: 'Script simple de Lua para OBS que cambia escenas basado en niveles de micrófono o actividad.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6kHt6kkDs9mXKS_MchYHPtdOAwkTIo_epJYWsE4rPyACC1Of4hpVgzgPd14Ew04RxepbDOcJ8oY3pnnBPJLMe3ZgJeOLHK7O54dmvuagnwH0JOtAeZqJ6niVaE3FMS1ItVsd-X6pBC5THok3E6KFwRonAwAZNjrY_Wv2dE_wQWO1cF6QQrJlyhDHPDTVUEhvTzbIRLDF2D8ulctShvPfaB8CQhRL-Jg5GU1yWuce4yu55FRTFkLtdQmfNd74SJFOc9RNi0tyFfsXj',
    tags: ['LUA', 'OBS'],
    badge: 'Free'
  },
  {
    id: '7',
    title: 'Minimalist Stream Panels',
    price: 12,
    category: 'Panels',
    description: 'Set de 20 paneles minimalistas para Twitch. Incluye "Sobre Mi", "Donaciones", "PC Specs" y más.',
    image: './minimalist_stream_panels.webp',
    tags: ['PNG', 'PSD'],
    badge: 'New'
  },
  {
    id: '8',
    title: 'Retro Wave Alerts',
    price: 15,
    category: 'Widgets',
    description: 'Alertas animadas con estilo ochentero y efectos de VHS.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    tags: ['OBS', 'WEBM'],
    badge: 'Featured'
  },
  {
    id: '9',
    title: 'Minimalist Camera Frame',
    price: 'Free',
    category: 'Widgets',
    description: 'Marco de cámara limpio y sutil con bordes redondeados y sombra.',
    image: './minimalist_camera_frame.webp',
    tags: ['PNG', 'OBS'],
    badge: 'Free'
  },
  {
    id: '10',
    title: 'Space Nebula Transition',
    price: 25,
    category: 'Intros',
    description: 'Transición stinger de alta calidad con temática espacial.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800',
    tags: ['MOV', 'WEBM'],
  },
  {
    id: '11',
    title: 'Discord Integration Bot',
    price: 30,
    category: 'Scripts',
    description: 'Bot personalizado para conectar eventos de stream con tu servidor de Discord.',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=800',
    tags: ['JS', 'API'],
    badge: 'Bestseller'
  },
  {
    id: '12',
    title: 'Gaming Keyboard Lights',
    price: 10,
    category: 'Tutorials',
    description: 'Aprende a sincronizar tus luces RGB con las alertas de tu stream.',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800',
    tags: ['VIDEO'],
  },
  {
    id: '13',
    title: 'Professional Logo Pack',
    price: 45,
    category: 'Panels',
    description: 'Logos vectorizados y editables para marcas de eSports.',
    image: 'https://images.unsplash.com/photo-1560157368-946d9c8f7cb6?auto=format&fit=crop&q=80&w=800',
    tags: ['AI', 'EPS'],
  },
  {
    id: '14',
    title: 'Holographic Chat Box',
    price: 18,
    category: 'Widgets',
    description: 'Overlay de chat con efecto de holograma futurista.',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800',
    tags: ['JS', 'CSS'],
    badge: 'Sale'
  },
  {
    id: '15',
    title: 'Cinematic Outro v3',
    price: 22,
    category: 'Outros',
    description: 'Final de stream épico con créditos dinámicos y agradecimientos.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    tags: ['MP4', 'AE'],
  },
  {
    id: '16',
    title: 'Twitch API Masterclass',
    price: 50,
    category: 'Tutorials',
    description: 'Curso avanzado para programar tus propias herramientas de stream.',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=800',
    tags: ['COURSE', 'JS'],
  },
  {
    id: '17',
    title: 'Pink Pastel Panels',
    price: 8,
    category: 'Panels',
    description: 'Colección de paneles estéticos para canales de arte y diseño.',
    image: './pink_pastel_panels.webp',
    tags: ['PNG'],
    badge: 'Free'
  },
  {
    id: '18',
    title: 'Advanced Scene Switcher',
    price: 12,
    category: 'Scripts',
    description: 'Cambia automáticamente entre juegos, chat y escenas de pausa.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800',
    tags: ['LUA'],
  },
  {
    id: '19',
    title: 'Golden Luxury Overlays',
    price: 35,
    category: 'Widgets',
    description: 'Pack premium con temática dorada para streamers VIP.',
    image: './golden_luxury_overlays.webp',
    tags: ['OBS', 'PNG'],
    badge: 'Featured'
  },
  {
    id: '20',
    title: 'Glitch Transition Pack',
    price: 15,
    category: 'Intros',
    description: '10 variaciones de efectos de glitch para transiciones rápidas.',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800',
    tags: ['WEBM'],
  },
  {
    id: '21',
    title: 'Auto-Shoutout Tool',
    price: 'Free',
    category: 'Scripts',
    description: 'Da la bienvenida automáticamente a otros streamers cuando entren al chat.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800',
    tags: ['PY', 'OBS'],
    badge: 'Free'
  }
];

export const TUTORIALS: Tutorial[] = [
  {
    id: 't1',
    title: 'Cómo configurar Alertas Dinámicas y Overlays de Chat',
    duration: '12:45',
    views: '8.2k',
    date: 'hace 2 días',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuNnLqkSzTDUVHCvNbv60-kyP4vBMwFrWtJ_3-eo4wO4_uMwO3cAm7NTM_pxaa_4V_pZP2k69m9_C_RgoKEabKkWiLcy9ntbucEOpJ3btmksQvrSac-zemft-fHjR31zbxTf34IG7ft-r3YWo17rnMlb9PL9-aCPGm_HsLGSBCYY_cjygNP-ijBLk8SGSUjOaTKpBoH58B_Wh8m1MJuyiVRf3G6EQgxLwDI7n7AtAnQI627hUs3W9B8vawsqxjan78Sur8Wbvixpso'
  },
  {
    id: 't2',
    title: 'Optimizando Bitrate para Twitch y YouTube',
    duration: '08:12',
    views: '15k',
    date: 'hace 1 semana',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi_s9X2Mts2ACzahAoRvmIfOGUpMTTdPHspMEaC-vCpelm_2jRZdP31A5eS8dN8fUGAR4L2c7TlmPbgN2SH2YOvzjVqSzxkinNFXylSPezJqaC1lWbQghEcE4OsrEn5AQ1BxSn-B4_eGiSm_8cdF9o4Y-D8Faw0-NpZV2hW1oRvo3ScV5mWNiN-s7Pm7XtvP9llnk5zZa7CC8ryOVeKNJiebYfYbyhzcAcrMBrW-py1ri4H7t36wTX78HuB0Es984N8ZhFXJRLzDQ1'
  },
  {
    id: 't3',
    title: 'Scripting Avanzado de Python para Automatización de OBS',
    duration: '25:30',
    views: '4.1k',
    date: 'hace 5 días',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX3LDPM98tMRfhZ21Io5lzEYkxQ0I8rw_wS0CgpmdsE4PPWlYZj-08Jvckd7rPm4RN205bmtPH0NVJuAgY_-KuRvaYYBHqIYIwSshiNKYLQ_ozmji3pfNzAFZot1r5SfcHAl0invwgEEDgrNGejWToUStjLip7KeDBokKB3yiJKWiBuA79oeJrdt02a0QF_SE5NAIb8FkyJW-3etJ15EtbKqPejRE0ApZDI51iWUTbEum2Liidn9lD-buCDhArzLqfehcTVpwPsY8o'
  },
  {
    id: 't4',
    title: 'Enrutamiento de Audio Multi-Pista para VODs Perfectos',
    duration: '15:00',
    views: '12.7k',
    date: 'hace 3 semanas',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzit_W4J2SM6nNUgnnLW4cjGDGMSfPEbf8B0qgl6yJUhzHi_FU7eLUTCghiptzl7ZXa8x2Q2bFQC1d7fVh3fKa7kWnRWBdIy83cKxctOz0Z4cysTnN9_GT7xb_OQgTc9Iy6a5Va9lYK8zWFHjoVLPTnhkzmuhahYC_EH5KYCeoaAIfmaxxVz04LlWH1CqJVz5J-4Ey34kzvRA1ttl0Aw94CYJ0rw2Gf3U9SdqiFgyf4y2sUydNefBYN2AcnMiRRE6atT_yN6EfFFx7'
  }
];
