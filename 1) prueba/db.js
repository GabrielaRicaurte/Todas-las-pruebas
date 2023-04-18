const games = [
    {
        id: 1,
        categoria: ['populares','masJugados'],
        nombre: 'VALORANT',
        portada: 'https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/VAL_1200x1600-9d4b02efc9c35dedfb51ec0e1248abec?h=854&resize=1&w=640',
        logo: 'https://cdn2.unrealengine.com/52717294-eac7-41e1-bc5d-a9187c633300-400x270-65c8dbf8988c.png?h=270&resize=1&w=480',
        desarrolladora: 'Riot Games',
        fechaDeLanzamiento: '04/11/21',
        precio: 'Gratis',
        img: {
            img1: 'https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-02-1920x1080-580683fffe0f.jpg',
            img2: 'https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-03-1920x1080-f34bc7b4f1b5.jpg',
            img3: 'https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-04-1920x1080-b9b0e57a12be.jpg',
            img4: 'https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-05-1920x1080-42cf018303e5.jpg',
            img5: 'https://cdn2.unrealengine.com/egs-valorant-riotgames-g1a-06-1920x1080-c525ac170f37.jpg',
        },
        info: 'VALORANT es un shooter táctico 5v5 basado en personajes que está ambientado en un escenario internacional. Sed más listos que vuestros oponentes, superadlos con grandes jugadas y eclipsadlos con habilidades tácticas, armas precisas y trabajo en equipo adaptable.',
        titulo1: 'DESAFIAD LOS LÍMITES GRATIS EN VALORANT',
        // genero: ['Acción', 'Disparos'],
        genero: ['Acción'],
        caracteristicas: ['Multijugador', 'Competitivo'],
        valoraciones: 4.5,
        especificaciones: {
            minimo: {
                sistemaOperativo: 'Windows 7/8',
                procesador: 'Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)',
                memoria: 'Memoria RAM de 4 GB',
                targetaGrafica: 'Intel HD 4000, Radeon R5 200',
            },
            recomendado: {
                sistemaOperativo: 'Windows 10 (64 bits)',
                procesador: 'Intel i3-4150 (Intel), Ryzen 3 1200 (AMD)',
                memoria: 'Memoria RAM de 4 GB',
                targetaGrafica: 'GeForce GT 730, Radeon R7 240'
            }
        }
    },
    
    {
        id: 2,
        categoria: ['masJugados'],
        nombre: 'Fortnite',
        portada: 'https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=854&resize=1&w=640',
        logo: 'https://cdn2.unrealengine.com/23br-c4s1-egs-launcher-logo-350x100-blue-350x100-31ea391ef6a7.png?h=270&resize=1&w=480',
        desarrolladora: 'Epic Games',
        fechaDeLanzamiento: '21/07/17',
        precio: 'Gratis',
        img: {
            img1: 'https://cdn2.unrealengine.com/01-cinematicstill007-3840x2160-3840x2160-7a8c3ecb0909.jpg',
            img2: 'https://cdn2.unrealengine.com/06-gameplaystill002-3840x2160-3840x2160-9f0357de8dc3.jpg',
            img3: 'https://cdn2.unrealengine.com/07-gameplaystill008-3840x2160-3840x2160-599d8eafbba2.jpg',
            img4: 'https://cdn2.unrealengine.com/08-gameplaystill009-3840x2160-3840x2160-35c190146448.jpg',
            img5: 'https://cdn2.unrealengine.com/09-gameplaystill018-3840x2160-3840x2160-d51ff0b2e501.jpg',
        },
        info: 'Reúne a tus amigos y dad el salto a Fortnite, de Epic Games: un enfrentamiento gigante entre 100 jugadores en el que se combinan los disparos, reunir botín, fabricar cosas y el caos absoluto. El resultado es una experiencia competitiva online feroz y totalmente impredecible que cada temporada se vuelve más salvaje.',
        // genero: ['Acción', 'Disparos'],
        genero: ['Disparos'],
        caracteristicas: ['Compatible con mando','Cooperativo','Multijugador','Competitivo','Multiplataforma','Un solo jugador'],
        valoraciones: 4.3,
        especificaciones: {
            minimo: {
                sistemaOperativo: 'Windows 7, 8 o 10 de 64 bits',
                procesador: 'Core i3-3225 3,3 GHz',
                memoria: '4 GB de RAM',
                targetaGrafica: '',
            },
            recomendado: {
                sistemaOperativo: 'Windows 10 de 64 bits',
                procesador: 'Core i5-7300U 3,5 GHz',
                memoria: '8 GB de RAM',
                targetaGrafica: 'Nvidia GTX 960, AMD R9 280 o GPU con DX11 equivalente'
            }
        }
    },
    
    {
        id:3,
        categoria: ['populares'],
        nombre: 'Dishonored - Definitive Edition',
        portada: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DishonoredDefinitiveEdition_ArkaneStudios_S2_1200x1600-f5305c222f0397fd04ce309f6f0d486f?h=854&resize=1&w=640',
        logo: 'https://cdn2.unrealengine.com/egs-dishonoreddefinitiveedition-arkanestudios-ic2-128x128-5713b884166d.png?h=270&resize=1&w=480',
        desarrolladora: 'Arkane Studios',
        fechaDeLanzamiento: '09/09/21',
        precio: '12,99 US$',
        img: {
            img1: 'https://cdn2.unrealengine.com/egs-dishonoreddefinitiveedition-arkanestudios-g1a-01-1920x1080-4b4cde39df36.jpg',
            img2: 'https://cdn2.unrealengine.com/egs-dishonoreddefinitiveedition-arkanestudios-g1a-02-1920x1080-19e4935dce66.jpg',
            img3: 'https://cdn2.unrealengine.com/egs-dishonoreddefinitiveedition-arkanestudios-g1a-03-1920x1080-d6719cbc16a4.jpg',
            img4: 'https://cdn2.unrealengine.com/egs-dishonoreddefinitiveedition-arkanestudios-g1a-04-1920x1080-f9937b3306b3.jpg'
        },
        info: 'Disfruta de la colección definitiva de Dishonored. Esta recopilación completa incluye el juego completo de Dishonored, así como su contenido adicional: Dunwall City Trials, El puñal de Dunwall, Las brujas de Brigmore y Void Walkers Arsenal.',
        // genero: ['Acción', 'aventura', 'Sigilo'],
        genero: ['aventura'],
        caracteristicas: ['Guardado en la nube', 'Un solo jugador'],
        valoraciones: '4.7',
        especificaciones: {
            minimo: {
                sistemaOperativo: 'Windows 7/8',
                procesador: 'Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)',
                memoria: 'Memoria RAM de 4 GB',
                targetaGrafica: 'Intel HD 4000, Radeon R5 200',
            },
            recomendado: {
                sistemaOperativo: 'Windows 10 (64 bits)',
                procesador: 'Intel i3-4150 (Intel), Ryzen 3 1200 (AMD)',
                memoria: 'Memoria RAM de 4 GB',
                targetaGrafica: 'GeForce GT 730, Radeon R7 240'
            }
        }
    },
    
    {
        id:4,
        categoria: ['populares'],
        nombre: 'NARAKA: BLADEPOINT',
        portada: 'https://cdn1.epicgames.com/offer/0c6aee83b9b64372bf44a043001325f2/EGS_NARAKABLADEPOINT_24Entertainment_S2_1200x1600-88f4e1f1ee1ffa8f7a85bf4e3a492e7e?h=854&resize=1&w=640',
        logo: 'https://cdn2.unrealengine.com/egs-narakabladepoint-24entertainment-ic1-400x146-6f7be3db7ca0.png?h=270&resize=1&w=480',
        desarrolladora: '24 Entertainment',
        editora: 'NetEase Montreal',
        fechaDeLanzamiento: '08/12/21',
        lanzamientoInicar: '11/08/21',
        precio: '19,99 US$',
        imagen: {
            img1: 'https://cdn2.unrealengine.com/egs-narakabladepoint-24entertainment-g1a-04-1920x1080-b989a0f8a573.jpg',
            img2: 'https://cdn2.unrealengine.com/egs-narakabladepoint-24entertainment-g1a-05-1920x1080-360a1f043663.jpg',
            img3: 'https://cdn2.unrealengine.com/egs-narakabladepoint-24entertainment-g1a-06-1920x1080-5cc05d69b344.jpg',
            img4: 'https://cdn2.unrealengine.com/egs-narakabladepoint-24entertainment-g1a-07-1920x1080-0fa094830d66.jpg',
            img5: 'https://cdn2.unrealengine.com/egs-narakabladepoint-24entertainment-g1a-08-1920x1080-9348f4b45834.jpg',
        },
        info: 'NARAKA: BLADEPOINT es un título de lucha y acción mítica JcJ en el que hasta 60 jugadores se enfrentan en combates cuerpo a cuerpo de artes marciales con movimientos que desafían a la gravedad, inmensos arsenales de armas cuerpo a cuerpo y a distancia y héroes legendarios personalizables con habilidades épicas.',
        genero: ['Acción'],
        caracteristicas: ['Multijugador', 'Competitivo'],
        valoraciones: '4.2',
        especificaciones: {
            minimo: {
                sistemaOperativo: 'Windows 10 de 64 bits',
                procesador: 'Intel i5 de cuarta generación, AMD FX 6300 o equivalente',
                memoria: '8 GB de RAM',
                targetaGrafica: 'NVIDIA GeForce GTX 750 Ti o equivalente',
            },
            recomendado: {
                sistemaOperativo: 'Windows 10 de 64 bits',
                procesador: 'Intel i7 de séptima generación o equivalente',
                memoria: '16 GB de RAM',
                targetaGrafica: 'NVIDIA GeForce GTX 1060 6G o equivalente'
            }
        }
    },
    
    {
        id:5,
        categoria: ['populares'],
        nombre: 'Red Dead Redemption 2',
        portada: 'https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=854&resize=1&w=640',
        logo: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fheather%2Fhome%2FEGS_RockstarGames_RedDeadRedemption2_IC1-625x625-38ae1bca6b89370d01ac3ed3a17daf7dd004f9f5.png?h=270&resize=1&w=480',
        desarrolladora: 'Rockstar Games',
        fechaDeLanzamiento: '05/11/19',
        precio: '44,99 US$',
        imagen: {
            img1: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fheather%2Fhome%2FEGS_RockstarGames_RedDeadRedemption2_G1A_00-1920x1080-308f101576da37225c889173094f373f2afc56c1.jpg'

        },
        info: 'Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es una historia épica sobre el honor y la lealtad en el umbral de una nueva era. Incluye Red Dead Redemption 2: Modo Historia y Red Dead Online.',
        // genero: ['Acción', 'Mundo abierto', 'Narración'],
        genero: ['Acción'],
        caracteristicas: ['Un solo jugador'],
        valoraciones: '4.9',
        especificaciones: {
            minimo: {
                sistemaOperativo: 'Windows 10 - April 2018 Update (v1803)',
                procesador: 'Intel(R) Core(TM) i5-2500K / AMD FX-6300',
                memoria: '8 GB',
                targetaGrafica: 'Nvidia GeForce GTX 770 2 GB / AMD Radeon R9 280 3 GB',
            },
            recomendado: {
                sistemaOperativo: 'Windows 10 - April 2018 Update (v1803)',
                procesador: 'Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x',
                memoria: '12 GB',
                targetaGrafica: 'Nvidia GeForce GTX 1060 6 GB / AMD Radeon RX 480 4 GB',
            }
        }
    },
    
    // {
    //     id: 6,
    //     categoria: ['populares','masVendidos','actualizadosRecientemente'],
    //     nombre: 'FIFA 23',
    //     portada: 'https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S2_1200x1600-fc5180814a7ade91d41b35798579946a?h=854&resize=1&w=640',
    //     logo: 'https://cdn2.unrealengine.com/egs-easportsfifa23standardedition-eacanada-ic1-400x400-6cc33c4193e3.png?h=270&resize=1&w=480',
    //     desarrolladora: 'EA Canada',
    //     fechaDeLanzamiento: '30/09/22',
    //     precio: '66,90 US$',
    //     imagen: {
    //         img1: 'https://cdn2.unrealengine.com/egs-easportsfifa23standardedition-eacanada-g1a-03-1920x1080-d2f64518bc93.jpg',
    //         img2: 'https://cdn2.unrealengine.com/egs-easportsfifa23standardedition-eacanada-g1a-04-1920x1080-34243940a09b.jpg',
    //         img3: 'https://cdn2.unrealengine.com/egs-easportsfifa23standardedition-eacanada-g1a-05-1920x1080-de10370921f7.jpg',
    //         img4: 'https://cdn2.unrealengine.com/egs-easportsfifa23standardedition-eacanada-g1a-06-1920x1080-04b1b4f0ca5c.jpg',
    //         img5: 'https://cdn2.unrealengine.com/egs-easportsfifa23standardedition-eacanada-g1a-07-1920x1080-2068b5e3abf8.jpg',
    //     },
    //     info: 'Vive la emoción del mayor torneo futbolístico con EA SPORTS™ FIFA 23 y la actualización de la FIFA World Cup™ masculina, ¡disponible el 9 de noviembre sin coste adicional*!',
    //     genero: ['Simulación'],
    //     caracteristicas: ['Competitivo'],
    //     valoraciones: '4.2',
    //     especificaciones: {
    //         minimo: {
    //             sistemaOperativo: 'Windows 10 de 64 bits',
    //             procesador: 'Ryzen 5 1600, Core i5 6600K',
    //             memoria: '8 GB',
    //             targetaGrafica: 'Radeon RX 570, GeForce GTX 1050 Ti',
    //         },
    //         recomendado: {
    //             sistemaOperativo: 'Windows 10 de 64 bits',
    //             procesador: 'Ryzen 7 2700X, Core i7 6700',
    //             memoria: '12 GB',
    //             targetaGrafica: 'Radeon RX 5600 XT, GeForce GTX 1660',
    //         }
    //     }
    // },
    
    // {
    //     id: 7,
    //     categoria: ['populares'],
    //     nombre: 'F.I.S.T.: Forged In Shadow Torch',
    //     portada: 'https://cdn1.epicgames.com/offer/a7e2a2c51b9149c097b771926ed91877/EGS_FISTForgedInShadowTorch_TiGames_S6_1200x1600-b0ce396c042359ad9a7b2ca50726cac1?h=854&resize=1&w=640',
    //     logo: 'https://cdn2.unrealengine.com/egs-fistforgedinshadowtorch-tigames-ic1-400x133-cc113b12150a.png?h=270&resize=1&w=480',
    //     desarrolladora: 'TiGames',
    //     fechaDeLanzamiento: '14/12/21',
    //     precio: '16,73 US$',
    //     imagen: {
    //         img1: 'https://cdn2.unrealengine.com/egs-fistforgedinshadowtorch-tigames-g1a-00-1920x1080-1a9368fc8440.jpg',
    //         img2: 'https://cdn2.unrealengine.com/egs-fistforgedinshadowtorch-tigames-g1a-01-1920x1080-f88f253aae1f.jpg',
    //         img3: 'https://cdn2.unrealengine.com/egs-fistforgedinshadowtorch-tigames-g1a-02-1920x1080-ce0acefa164e.jpg',
    //         img4: 'https://cdn2.unrealengine.com/egs-fistforgedinshadowtorch-tigames-g1a-03-1920x1080-23f1a151ac7d.jpg',
    //         img5: 'https://cdn2.unrealengine.com/egs-fistforgedinshadowtorch-tigames-g1a-04-1920x1080-a89daa84ab92.jpg',
    //     },
    //     info: 'Explora más de una decena de zonas únicas en un mapa de estilo metroidvania. El Fist (puño), el Drill (taladro) y el Whip (látigo) son tres armas con estilos de lucha completamente diferentes que te permiten alternar entre combo alto, daño elevado y ataques de largo alcance de forma fluida.',
    //     genero: ['Acción', 'Plataformas'],
    //     caracteristicas: ['Un solo jugador'],
    //     valoraciones: '4.6',
    //     especificaciones: {
    //         minimo: {
    //             sistemaOperativo: 'Windows 10 versión 1903',
    //             procesador: 'Intel Core i5-6400 o AMD FX 8320',
    //             memoria: '8 GB de RAM',
    //             targetaGrafica: 'NVIDIA GTX 960 o AMD Radeon R9 280'
    //         },
    //         recomendado: {
    //             sistemaOperativo: 'Windows 10 versión 1903',
    //             procesador: 'Intel Core i5-6400',
    //             memoria: '16 GB de RAM',
    //             targetaGrafica: 'NVIDIA GTX 1060 de 6 GB'
    //         }
    //     }
    // },
    
    // {
    //     id: 8,
    //     categoria: ['populares'],
    //     nombre: 'Among Us',
    //     portada: 'https://cdn1.epicgames.com/salesEvent/salesEvent/amogusportrait_1200x1600-66ad0e4d363e1c92f9f8aae67a96dd31?h=854&resize=1&w=640',
    //     logo: 'https://cdn2.unrealengine.com/egs-amongus-innersloth-ic1-400x400-675402583.png?h=270&resize=1&w=480',
    //     desarrolladora: 'Innersloth',
    //     fechaDeLanzamiento: '18/12/20',
    //     precio: '1,99 US$',
    //     imagen: {
    //         img1: 'https://cdn2.unrealengine.com/egs-amongus-innersloth-g2-00-1920x1080-675402405.jpg?h=720&resize=1&w=1280',
    //         img2: 'https://cdn2.unrealengine.com/egs-amongus-innersloth-g2-01-1920x1080-675402518.jpg?h=720&resize=1&w=1280',
    //         img3: 'https://cdn2.unrealengine.com/egs-amongus-innersloth-g2-02-1920x1080-675402672.jpg?h=720&resize=1&w=1280',
    //         img4: 'https://cdn2.unrealengine.com/egs-amongus-innersloth-g2-03-1920x1080-675402682.jpg?h=720&resize=1&w=1280',
    //     },
    //     info: 'Un juego para 4 a 15 jugadores en línea o en modo local mediante wifi en el que debéis preparar vuestra nave espacial para el despegue. Pero, cuidado: ¡uno o más jugadores elegidos al azar entre la tripulación son impostores dispuestos a matar al resto!',
    //     genero: ['Casual'],
    //     caracteristicas: ['Cooperativo', 'Competitivo', 'Multijugador', 'Multiplataforma'],
    //     valoraciones: '4.6',
    //     especificaciones: {
    //         minimo: {
    //             sistemaOperativo: 'Windows 7 SP1 o superior',
    //             procesador: 'Compatible con el conjunto de instrucciones SSE2',
    //             memoria: '1 GB de RAM',
    //             targetaGrafica: '',
    //         },
    //         recomendado: {
    //             sistemaOperativo: 'Windows 7 SP1 o superior',
    //             procesador: 'Compatible con el conjunto de instrucciones SSE2',
    //             memoria: '1 GB de RAM',
    //             targetaGrafica: '',
    //         }
    //     }
    // },

    // {
    //     id: 9,
    //     categoria: ['actualizadoRecientemente'],
    //     nombre: 'Dead by Daylight',
    //     portada: 'https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S2_1200x1600-a1c30209e3b9fb63144daa9b5670f503?h=854&resize=1&w=640',
    //     logo: 'https://cdn2.unrealengine.com/egs-deadbydaylight-behaviourinteractive-ic1-200x200-a41440806a53.png?h=270&resize=1&w=480',
    //     desarrolladora: 'Behaviour Interactive',
    //     fechaDeLanzamiento: '09/12/21',
    //     precio: '7,99 US$',
    //     imagen: {
    //         img1: 'https://cdn2.unrealengine.com/egs-deadbydaylight-behaviourinteractive-g1a-02-1920x1080-04e754d3e831.jpg',
    //         img2: 'https://cdn2.unrealengine.com/egs-deadbydaylight-behaviourinteractive-g1a-03-1920x1080-725ff21ce818.jpg',
    //         img3: 'https://cdn2.unrealengine.com/egs-deadbydaylight-behaviourinteractive-g1a-04-1920x1080-4332487e7bd9.jpg',
    //         img4: 'https://cdn2.unrealengine.com/egs-deadbydaylight-behaviourinteractive-g1a-05-1920x1080-bf401faad033.jpg',
    //         img5: 'https://cdn2.unrealengine.com/egs-deadbydaylight-behaviourinteractive-g1a-06-1920x1080-f616958d12b0.jpg',
    //     },
    //     info: 'Dead by Daylight es un juego de horror de multijugador (4 contra 1) en el que un jugador representa el rol del asesino despiadado y los 4 restantes juegan como supervivientes que intentan escapar de él para evitar ser capturados y asesinados.',
    //     genero: ['Acción', 'Supervivencia'],
    //     caracteristicas: ['Multijugador', 'Competitivo', 'Multiplataforma'],
    //     valoraciones: '4.5',
    //     especificaciones: {
    //         minimo: {
    //             sistemaOperativo: 'Windows 10 de 64 bits',
    //             procesador: 'Intel Core i3-4170 o AMD FX-8120',
    //             memoria: '8 GB de RAM',
    //             targetaGrafica: 'GeForce GTX 460 (1 GB) o AMD HD 6850 (1 GB) compatibles con DX11',
    //         },
    //         recomendado: {
    //             sistemaOperativo: 'Windows 10 de 64 bits',
    //             procesador: 'Intel Core i3-4170 o AMD FX-8300 o superior',
    //             memoria: '8 GB de RAM',
    //             targetaGrafica: 'GeForce 760 o AMD HD 8800 o superior con 4 GB de RAM y compatibles con DX11',
    //         }
    //     }
    // },
    
    // {
    //     id: 10,
    //     categoria: [''],
    //     nombre: 'Severed Steel',
    //     portada: 'https://cdn1.epicgames.com/offer/5db7394e65044dd1bb083ee983e2b3a5/EGS_SeveredSteel_GreylockStudio_S2_1200x1600-42edb36730050be3d18171baac58a7f2?h=854&resize=1&w=640',
    //     logo: 'https://cdn2.unrealengine.com/egs-severedsteel-greylockstudio-ic1-400x43-800197ae1885.png?h=270&resize=1&w=480',
    //     desarrolladora: 'Greylock Studio',
    //     fechaDeLanzamiento: '17/09/21',
    //     precio: '9,99 US$',
    //     imagen: {
    //         img1: 'https://cdn2.unrealengine.com/egs-severedsteel-greylockstudio-g1a-00-1920x1080-3889ce652e39.jpg',
    //         img2: 'https://cdn2.unrealengine.com/egs-severedsteel-greylockstudio-g1a-01-1920x1080-f8f42eb802a1.jpg',
    //         img3: 'https://cdn2.unrealengine.com/egs-severedsteel-greylockstudio-g1a-02-1920x1080-8834c743656c.jpg',
    //         img4: 'https://cdn2.unrealengine.com/egs-severedsteel-greylockstudio-g1a-03-1920x1080-19d2e0bb9177.jpg',
    //         img5: 'https://cdn2.unrealengine.com/egs-severedsteel-greylockstudio-g1a-04-1920x1080-87b6a31cf444.jpg',
    //     },
    //     info: 'Un visceral y estiloso juego de disparos en primera persona para un jugador con un sistema de acrobacias fluido, entornos vóxel destruibles, cámara lenta a gogó, una protagonista con una sola mano y una banda sonora electro-industrial.',
    //     genero: ['Acción', 'Indie'],
    //     caracteristicas: ['Logros', 'Compatible con mando', 'Un solo jugador'],
    //     valoraciones: '4.7',
    //     especificaciones: {
    //         minimo: {
    //             sistemaOperativo: 'Windows 10',
    //             procesador: 'Dual Core',
    //             memoria: '8 GB',
    //             targetaGrafica: 'NVIDIA 750 o equivalente',
    //         },
    //         recomendado: {
    //             sistemaOperativo: 'Windows 10',
    //             procesador: 'Dual Core',
    //             memoria: '8 GB',
    //             targetaGrafica: 'NVIDIA 1050 o equivalente',
    //         }
    //     }
    // },

    // {
    //     id: 60,
    //     categoria: ['populares'],
    //     nombre: 'Shadow Tactics - Aikos Choice',
    //     portada: 'https://cdn1.epicgames.com/spt-assets/24f4bf69387246819ea43509effb6ba4/download-shadow-tactics--aikos-choice-offer-1a077.jpg?h=854&resize=1&w=640',
    //     logo: 'https://cdn1.epicgames.com/spt-assets/24f4bf69387246819ea43509effb6ba4/shadow-tactics--aikos-choice-logo-19tqz.png?h=270&resize=1&w=480',
    //     desarrolladora: 'Mimimi Games',
    //     fechaDeLanzamiento: '06/12/21',
    //     precio: '06/12/21',
    //     imagen: {
    //         img1: 'https://cdn1.epicgames.com/spt-assets/24f4bf69387246819ea43509effb6ba4/shadow-tactics--aikos-choice-1tlse.jpg',
    //         img2: 'https://cdn1.epicgames.com/spt-assets/24f4bf69387246819ea43509effb6ba4/shadow-tactics--aikos-choice-l2ibw.jpg',
    //         img3: 'https://cdn1.epicgames.com/spt-assets/24f4bf69387246819ea43509effb6ba4/shadow-tactics--aikos-choice-1rlid.jpg',
    //         img4: 'https://cdn1.epicgames.com/spt-assets/24f4bf69387246819ea43509effb6ba4/shadow-tactics--aikos-choice-1bhya.jpg',
    //         img5: 'https://cdn1.epicgames.com/spt-assets/24f4bf69387246819ea43509effb6ba4/shadow-tactics--aikos-choice-1b9u5.jpg',
    //     },
    //     info: 'Aikos Choice es una nueva expansión independiente del famoso juego de espionaje táctico Shadow Tactics. Ambientada en el Japón feudal, y más concretamente en el período Edo, en ella controlas a la kunoichi Aiko y su banda de asesinos para acabar con los fantasmas de su pasado.',
    //     genero: ['Acción','Estrategia','Sigilo'],
    //     caracteristicas: ['Un solo jugador','Compatible con mando'],
    //     valoraciones: '4.7',
    //     especificaciones: {
    //         minimo: {
    //             sistemaOperativo: 'Windows Vista de 64 bits',
    //             procesador: 'Intel i3 de segunda generación a 2,5 GHz o AMD Quad-Core a 2,5 GHz',
    //             memoria: '4 GB de RAM',
    //             targetaGrafica: 'NVIDIA GT640, AMD Radeon HD7750, 1 GB DE VRAM',
    //         },
    //         recomendado: {
    //             sistemaOperativo: 'Windows 10',
    //             procesador: 'Intel i3 de cuarta generación a 3,5 GHz o AMD Quad-Core a 3,9 GHz',
    //             memoria: '6 GB de RAM',
    //             targetaGrafica: 'NVIDIA GTX 570, AMD Radeon HD 6950, 2 GB de VRAM',
    //         }
    //     }
    // },

    // {
    //     id: 61,
    //     categoria: ['masJugados'],
    //     nombre: 'Rocket League®',
    //     portada: 'https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/S9_1200x1600-c1bc7211d9e671d7384e2f0247f0f77a?h=854&resize=1&w=640',
    //     logo: 'https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-ic1-400x400-9f12eedafe2c.png?h=270&resize=1&w=480',
    //     desarrolladora: 'Psyonix LLC',
    //     fechaDeLanzamiento: '23/09/20',
    //     precio: 'Gratis',
    //     imagen: {
    //         img1: 'https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-g1a-01-1920x1080-30041976be98.jpg',
    //         img2: 'https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-g1a-02-1920x1080-45953e32ba91.jpg',
    //         img3: 'https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-g1a-03-1920x1080-c2a678b4a217.jpg',
    //         img4: 'https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-g1a-04-1920x1080-ba53602b9825.jpg',
    //         img5: 'https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-g1a-07-1920x1080-6f8971cc67fc.jpg',
    //     },
    //     info: 'Rocket League combina el fútbol de estilo arcade con el caos a cuatro ruedas, unos controles fáciles y una competición fluida y basada en la física.',
    //     genero: ['Deportes','Carreras'],
    //     caracteristicas: ['Logros','Cooperativo','Multijugador','Competitivo','Multiplataforma','Un solo jugador'],
    //     valoraciones: '4.5',
    //     especificaciones: {
    //         minimo: {
    //             sistemaOperativo: 'Windows 7 de 64 bits o sistema operativo Windows superior de 64 bits',
    //             procesador: 'Dual Core a 2,5 GHz',
    //             memoria: '4 GB',
    //             targetaGrafica: 'NVIDIA GeForce GTX 760 / AMD Radeon R7 270X o superior',
    //         },
    //         recomendado: {
    //             sistemaOperativo: 'Windows 7 de 64 bits o sistema operativo Windows superior de 64 bits',
    //             procesador: 'Quad Core a 3 GHz o superior',
    //             memoria: '8 GB',
    //             targetaGrafica: 'NVIDIA GeForce GTX 1060 / AMD Radeon RX 470 o superior',
    //         }
    //     }
    // },

    // {
    //     id: 62,
    //     categoria: ['masJugados','actualizadosRecientemente'],
    //     nombre: 'Genshin Impact',
    //     portada: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S2_1200x1600-c12cdcc2cac330df2185aa58c508e820?h=854&resize=1&w=640',
    //     logo: 'https://cdn2.unrealengine.com/egs-genshinimpact-mihoyolimited-ic1-400x400-0a1ff1b6cf40.png?h=270&resize=1&w=480',
    //     desarrolladora: 'COGNOSPHERE PTE. LTD.',
    //     fechaDeLanzamiento: '08/06/21',
    //     precio: 'Gratis',
    //     imagen: {
    //         img1: 'https://cdn2.unrealengine.com/es-1-1920x1080-2c7daaa23734.jpg',
    //         img2: 'https://cdn2.unrealengine.com/es-2-1920x1080-7f9395106958.jpg',
    //         img3: 'https://cdn2.unrealengine.com/es-3-1920x1080-5478012377d8.jpg',
    //         img4: 'https://cdn2.unrealengine.com/es-4-1920x1080-1e08656825e8.jpg',
    //         img5: 'https://cdn2.unrealengine.com/es-5-1920x1080-2a7eac2ac41e.jpg',
    //     },
    //     info: 'Comienza tu travesía en Teyvat para buscar a tu familiar perdido y encontrar respuestas sobre los dioses elementales. Explora cada rincón de este mundo maravilloso, une fuerzas con un amplio repertorio de personajes, y revela los muchos misterios ocultos…',
    //     genero: ['Rol','Mundo abierto','Aventura'],
    //     caracteristicas: ['Multijugador','MMO','Multiplataforma'],
    //     valoraciones: '4.7',
    //     especificaciones: {
    //         minimo: {
    //             sistemaOperativo: 'Windows 7 SP1 de 64 bits, Windows 8.1 de 64 bits o Windows 10 de 64 bits (las versiones dev de Windows 10 no son compatibles por el momento)',
    //             procesador: 'Intel Core i5 o equivalente',
    //             memoria: '8 GB',
    //             targetaGrafica: 'NVIDIA® GeForce® GT 1030 o superior',
    //         },
    //         recomendado: {
    //             sistemaOperativo: 'Windows 7 SP1 de 64 bits, Windows 8.1 de 64 bits o Windows 10 de 64 bits (las versiones dev de Windows 10 no son compatibles por el momento)',
    //             procesador: 'Intel Core i7 o equivalente',
    //             memoria: '16 GB',
    //             targetaGrafica: 'NVIDIA® GeForce® GTX 1060 6 GB o superior',
    //         }
    //     }
    // },

    // {
    //     id: 63,
    //     categoria: ['populares'],
    //     nombre: 'Bloons TD 6',
    //     portada: 'https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/download-bloons-td-6-offer-100fo.jpg?h=854&resize=1&w=640',
    //     logo: 'https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/bloons-td-6-logo-1vhmg.png?h=270&resize=1&w=480',
    //     desarrolladora: 'Ninja Kiwi',
    //     fechaDeLanzamiento: '19/07/22',
    //     precio: '8,99 US$',
    //     imagen: {
    //         img1: 'https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/bloons-td-6-1ct12.png',
    //         img2: 'https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/bloons-td-6-1opt8.png',
    //         img3: 'https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/bloons-td-6-18o0d.png',
    //         img4: 'https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/bloons-td-6-1x95k.png',
    //         img5: 'https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/bloons-td-6-1711g.png',
    //     },
    //     info: '',
    //     genero: ['Estrategia'],
    //     caracteristicas: ['Cooperativo','Multijugador','Un solo jugador'],
    //     valoraciones: '4.8',
    //     especificaciones: {
    //         minimo: {
    //             sistemaOperativo: 'Windows 10',
    //             procesador: '1.5Ghz or better (x86-64)',
    //             memoria: '4096 MB',
    //             targetaGrafica: 'OpenGL 2.0 compatible, ATI, Nvidia or Intel HD',
    //         },
    //         recomendado: {
    //             sistemaOperativo: 'Windows 10',
    //             procesador: '2Ghz or better (x86-64)',
    //             memoria: '8192 MB',
    //             targetaGrafica: 'OpenGL 2.0 compatible, ATI, Nvidia or Intel HD',
    //         }
    //     }
    // },

    // {
    //     id: 64,
    //     categoria: ['populares'],
    //     nombre: 'Shadow of the Tomb Raider: Definitive Edition',
    //     portada: 'https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s4-1200x1600-7ee40d6fa744_1200x1600-950cdb624cc75d04fe3c8c0b62ce98de?h=854&resize=1&w=640',
    //     logo: 'https://cdn2.unrealengine.com/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-ic1-400x400-1a101c6adcf1-400x132-564f4e1cc624.png?h=270&resize=1&w=480',
    //     desarrolladora: 'Eidos-Montréal, Crystal Dynamics, Nixxes Software',
    //     fechaDeLanzamiento: '30/12/21',
    //     precio: '39,99 US$',
    //     imagen: {
    //         img1: 'https://cdn2.unrealengine.com/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-g1a-01-1920x1080-508274bcd3fd.jpg',
    //         img2: 'https://cdn2.unrealengine.com/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-g1a-02-1920x1080-54a6af8c99d1.jpg',
    //         img3: 'https://cdn2.unrealengine.com/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-g1a-03-1920x1080-fa730698ae1f.jpg',
    //         img4: 'https://cdn2.unrealengine.com/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-g1a-04-1920x1080-ac6ae21df702.jpg',
    //         img5: 'https://cdn2.unrealengine.com/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-g1a-05-1920x1080-ef8667fc37ad.jpg',
    //     },
    //     info: 'En Shadow of the Tomb Raider: Definitive Edition, vive el capítulo final de la historia sobre el origen de Lara, en el que se convierte en la saqueadora de tumbas que está destinada a ser.',
    //     genero: ['Acción','Aventura'],
    //     caracteristicas: ['Guardado en la nube','Compatible con mando','Un solo jugador'],
    //     valoraciones: '4.7',
    //     especificaciones: {
    //         minimo: {
    //             sistemaOperativo: 'Windows 7 de 64 bits',
    //             procesador: 'Intel i3-3220 o AMD equivalente',
    //             memoria: '8 GB',
    //             targetaGrafica: 'Nvidia GTX 660/GTX 1050 o AMD Radeon HD 7770',
    //         },
    //         recomendado: {
    //             sistemaOperativo: 'Windows 10 de 64 bits',
    //             procesador: 'Intel Core i7 4770K a 3,40 GHz o AMD Ryzen 5 1600 a 3,20 GHz',
    //             memoria: '16 GB',
    //             targetaGrafica: 'Nvidia GTX 1060 (6 GB) o AMD Radeon RX 480 (8 GB)',
    //         }
    //     }
    // },

    // {
    //     id: 65,
    //     categoria: ['populares'],
    //     nombre: 'STAR WARS™ Battlefront™ II: Celebration Edition',
    //     portada: 'https://cdn1.epicgames.com/b156c3365a5b4cb9a01a5e1108b4e3f4/offer/EGS_STARWARSBattlefrontIICelebrationEdition_DICE_S2-1200x1600-11d040719a8457bbf36cabbe89b200db.jpg?h=854&resize=1&w=640',
    //     logo: 'https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-ic1-400x400-664fe15f870c.png?h=270&resize=1&w=480',
    //     desarrolladora: 'DICE',
    //     fechaDeLanzamiento: '14/01/21',
    //     precio: '39,99 US$',
    //     imagen: {
    //         img1: 'https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-02-1920x1080-aeb9deb222c1.jpg',
    //         img2: 'https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-03-1920x1080-9e43a5cc414f.jpg',
    //         img3: 'https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-04-1920x1080-6ec1f5203cde.jpg',
    //         img4: 'https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-05-1920x1080-9a83b9bfc2e4.jpg',
    //         img5: 'https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-06-1920x1080-4783ce81715a.jpg',
    //     },
    //     info: 'Pon a prueba tu dominio del bláster, la espada láser y la Fuerza online y offline en STAR WARS™ Battlefront™ II: Celebration Edition.',
    //     genero: ['Acción','Disparos','Aventura'],
    //     caracteristicas: ['Cooperativo','Multijugador','Un solo jugador'],
    //     valoraciones: '',
    //     especificaciones: {
    //         minimo: {
    //             sistemaOperativo: 'Windows 7 SP1/Windows 8.1/Windows 10 de 64 bits',
    //             procesador: 'AMD FX 6350 o Intel Core i5 6600K',
    //             memoria: '8 GB',
    //             targetaGrafica: 'AMD Radeon™ HD 7850 2 GB o NVIDIA GeForce® GTX 660 2 GB',
    //         },
    //         recomendado: {
    //             sistemaOperativo: 'Windows 10 o superior de 64 bits',
    //             procesador: 'AMD FX 8350 con Wraith o Intel Core i7 6700 o equivalente',
    //             memoria: '16 GB',
    //             targetaGrafica: 'AMD Radeon™ RX 480 4 GB o NVIDIA GeForce® GTX 1060 3 GB',
    //         }
    //     }
    // },

    // {
    //     id: 59,
    //     categoria: ['populares','masJugados','masVendidos'],
    //     nombre: 'Grand Theft Auto V',
    //     portada: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=854&resize=1&w=640',
    //     logo: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_400x400_GameLogo-1000x1000-f6c47a98454049a5e63959f7b6f898c4fc22829c.png?h=270&resize=1&w=480',
    //     desarrolladora: 'Rockstar Games',
    //     fechaDeLanzamiento: '14/05/20',
    //     precio: '19,99 US$',
    //     imagen: {
    //         img1: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg',
    //         img2: '',
    //         img3: '',
    //         img4: '',
    //         img5: '',
    //     },
    //     info: 'Grand Theft Auto V: Premium Edition permite disfrutar por completo de la trama de GTAV y acceder a Grand Theft Auto Online y a todas las mejoras y contenidos existentes. También incluye el Criminal Enterprise Starter Pack, la forma más rápida de dar un impulso a tu imperio criminal en GTA Online.',
    //     genero: ['Acción','Aventura'],
    //     caracteristicas: ['Competitivo'],
    //     valoraciones: '4.7',
    //     especificaciones: {
    //         minimo: {
    //             sistemaOperativo: 'Windows 10 de 64 bits, Windows 8.1 de 64 bits, Windows 8 de 64 bits, Windows 7 de 64 bits con Service Pack 1, Windows Vista de 64 bits con Service Pack 2* (*tarjeta de vídeo NVIDIA recomendada si se utiliza Windows Vista).',
    //             procesador: 'Intel Core 2 Quad CPU Q6600 a 2,40 GHz (con 4 CPU) / AMD Phenom 9850 con procesador Quad-Core (con 4 CPU) a 2,5 GHz',
    //             memoria: '4 GB de RAM',
    //             targetaGrafica: 'NVIDIA 9800 GT de 1 GB / AMD HD 4870 de 1 GB (DX 10, 10.1, 11)',
    //         },
    //         recomendado: {
    //             sistemaOperativo: 'Windows 10 de 64 bits, Windows 8.1 de 64 bits, Windows 8 de 64 bits, Windows 7 de 64 bits con Service Pack 1.',
    //             procesador: 'Intel Core i5 3470 a 3,2 GHz (con 4 CPU) / AMD X8 FX-8350 a 4 GHz (con 8 CPU)',
    //             memoria: '8 GB de RAM',
    //             targetaGrafica: 'Nvidia GTX 660 de 2 GB / AMD Radeon HD7870 de 2 GB',
    //         }
    //     }
    // },

]